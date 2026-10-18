import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'video-storage-and-streaming-api',
        configureServer(server) {
          // Endpoint to save MP4 files directly to public/videos/
          server.middlewares.use('/api/save-video', (req, res) => {
            if (req.method === 'POST') {
              const url = new URL(req.url || '', `http://${req.headers.host}`);
              const filename = url.searchParams.get('name');
              
              if (!filename || !['hello.mp4', 'cute.mp4', 'vitamin.mp4', 'mine.mp4', 'birthday.mp4'].includes(filename)) {
                res.statusCode = 400;
                res.end(JSON.stringify({ error: 'Invalid or missing filename' }));
                return;
              }

              const targetDir = path.join(process.cwd(), 'public', 'videos');
              if (!fs.existsSync(targetDir)) {
                fs.mkdirSync(targetDir, { recursive: true });
              }

              const targetPath = path.join(targetDir, filename);
              const writeStream = fs.createWriteStream(targetPath);

              req.pipe(writeStream);

              writeStream.on('finish', () => {
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ success: true, file: filename, path: `/videos/${filename}` }));
              });

              writeStream.on('error', (err) => {
                res.statusCode = 500;
                res.end(JSON.stringify({ error: err.message }));
              });
            } else {
              res.statusCode = 405;
              res.end('Method Not Allowed');
            }
          });

          // Endpoint to check which videos exist on disk
          server.middlewares.use('/api/check-videos', (req, res) => {
            const targetDir = path.join(process.cwd(), 'public', 'videos');
            const files = ['hello.mp4', 'cute.mp4', 'vitamin.mp4', 'mine.mp4', 'birthday.mp4'];
            const status: Record<string, boolean> = {};

            files.forEach(f => {
              status[f] = fs.existsSync(path.join(targetDir, f));
            });

            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(status));
          });

          // Streaming middleware for /videos/*.mp4 with Range & 206 Partial Content support
          server.middlewares.use((req, res, next) => {
            const rawUrl = req.url || '';
            const cleanPath = rawUrl.split('?')[0];

            if (cleanPath.startsWith('/videos/')) {
              const filename = cleanPath.replace('/videos/', '');
              const filePath = path.join(process.cwd(), 'public', 'videos', filename);

              if (fs.existsSync(filePath)) {
                try {
                  const stat = fs.statSync(filePath);
                  const range = req.headers.range;

                  res.setHeader('Content-Type', 'video/mp4');
                  res.setHeader('Accept-Ranges', 'bytes');

                  if (range) {
                    const parts = range.replace(/bytes=/, '').split('-');
                    const start = parseInt(parts[0], 10);
                    const end = parts[1] ? parseInt(parts[1], 10) : stat.size - 1;
                    const chunksize = end - start + 1;
                    const file = fs.createReadStream(filePath, { start, end });

                    res.writeHead(206, {
                      'Content-Range': `bytes ${start}-${end}/${stat.size}`,
                      'Accept-Ranges': 'bytes',
                      'Content-Length': chunksize,
                      'Content-Type': 'video/mp4',
                    });
                    file.pipe(res);
                  } else {
                    res.writeHead(200, {
                      'Content-Length': stat.size,
                      'Content-Type': 'video/mp4',
                    });
                    fs.createReadStream(filePath).pipe(res);
                  }
                  return;
                } catch (e) {
                  console.error('Error streaming video:', e);
                }
              }
            }
            next();
          });
        },
      },
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
