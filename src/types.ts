/**
 * Application scene and media types for Nivahh's 20th Birthday Experience.
 */

import helloVideo from './assets/videos/hello.mp4';
import cuteVideo from './assets/videos/cute.mp4';
import vitaminVideo from './assets/videos/vitamin.mp4';
import mineVideo from './assets/videos/mine.mp4';
import birthdayVideo from './assets/videos/birthday.mp4';

export type SceneId = 1 | 2 | 3 | 4 | 5 | 'detour' | 6 | 7;

export type VideoAssetKey = 'hello' | 'cute' | 'vitamin' | 'mine' | 'birthday';

export interface VideoAssetInfo {
  key: VideoAssetKey;
  filename: string;
  defaultPath: string;
  videoUrl: string;
  sceneNumber: 1 | 2 | 3 | 4 | 6;
  title: string;
  character: string;
  description: string;
}

export const VIDEO_MANIFEST: Record<VideoAssetKey, VideoAssetInfo> = {
  hello: {
    key: 'hello',
    filename: 'hello.mp4',
    defaultPath: helloVideo,
    videoUrl: helloVideo,
    sceneNumber: 1,
    title: 'Scene 1: Hello, Hello, Hello',
    character: 'White Teddy Bear',
    description: 'A cute white teddy bear greeting Nivahh with bows and gentle waves.',
  },
  cute: {
    key: 'cute',
    filename: 'cute.mp4',
    defaultPath: cuteVideo,
    videoUrl: cuteVideo,
    sceneNumber: 2,
    title: 'Scene 2: Suspiciously Cute',
    character: 'Pink Teddy Bear',
    description: 'The pink bear with a magnifying glass declaring Nivahh suspiciously cute.',
  },
  vitamin: {
    key: 'vitamin',
    filename: 'vitamin.mp4',
    defaultPath: vitaminVideo,
    videoUrl: vitaminVideo,
    sceneNumber: 3,
    title: 'Scene 3: Missing Vitamins',
    character: 'Pink Teddy Bear',
    description: 'The pink bear diagnosing a shortage of Vitamin ME with hearts and winks.',
  },
  mine: {
    key: 'mine',
    filename: 'mine.mp4',
    defaultPath: mineVideo,
    videoUrl: mineVideo,
    sceneNumber: 4,
    title: "Scene 4: The Panda's Line",
    character: 'Panda Bear with Lavender Bow',
    description: 'A charming panda reciting: line, nine, wine, and you are MINE!',
  },
  birthday: {
    key: 'birthday',
    filename: 'birthday.mp4',
    defaultPath: birthdayVideo,
    videoUrl: birthdayVideo,
    sceneNumber: 6,
    title: 'Scene 6: The Birthday Reveal',
    character: 'Birthday Teddy Bear',
    description: 'Candle-blowing countdown followed by an adorable Happy Birthday serenade.',
  },
};

export const NO_MESSAGES: string[] = [
  'Why did you click No?',
  'Are you really sure you want to say No?',
  'Think about this very carefully...',
  'The bears are getting emotional now!',
  'There is only one right answer: YES!',
];
