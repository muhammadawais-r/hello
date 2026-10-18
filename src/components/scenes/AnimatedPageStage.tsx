import React, { useRef, useState, useEffect } from 'react';
import { Sparkles, Heart, Play } from 'lucide-react';
import { VideoAssetKey, VIDEO_MANIFEST } from '../../types';

interface AnimatedPageStageProps {
  videoKey: VideoAssetKey;
  heading: React.ReactNode;
  subtitle?: React.ReactNode;
  footerContent?: React.ReactNode;
  actionButton?: React.ReactNode;
  theme?: 'pink' | 'lavender' | 'ivory';
  animatedIllustration?: React.ReactNode;
  dialogueBadge?: React.ReactNode;
  onEnded?: () => void;
  loop?: boolean;
}

export const AnimatedPageStage: React.FC<AnimatedPageStageProps> = ({
  videoKey,
  heading,
  subtitle,
  footerContent,
  actionButton,
  theme = 'pink',
  onEnded,
  loop = true,
}) => {
  const manifest = VIDEO_MANIFEST[videoKey];
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Direct bundled asset URL guaranteed to work on Netlify and all deployments
  const videoSrc = manifest.videoUrl || manifest.defaultPath;

  // Ensure video autoplays immediately and sound turns on reliably
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Start with muted=true so Chrome/Safari/iOS/Netlify NEVER block autoplay
    video.defaultMuted = true;
    video.muted = true;
    video.load();

    const startPlay = () => {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            // Attempt to unmute immediately if browser policy allows
            video.muted = false;
          })
          .catch(() => {
            // If unmuted failed, ensure muted playback continues
            video.muted = true;
            video
              .play()
              .then(() => setIsPlaying(true))
              .catch(() => setIsPlaying(false));
          });
      }
    };

    startPlay();

    // Any touch, click, or keypress anywhere on the screen immediately starts/unmutes the video
    const handleUnmute = () => {
      if (video) {
        video.muted = false;
        video.play().then(() => setIsPlaying(true)).catch(() => {});
      }
    };

    window.addEventListener('click', handleUnmute, { once: true, passive: true });
    window.addEventListener('touchstart', handleUnmute, { once: true, passive: true });
    window.addEventListener('keydown', handleUnmute, { once: true, passive: true });

    return () => {
      window.removeEventListener('click', handleUnmute);
      window.removeEventListener('touchstart', handleUnmute);
      window.removeEventListener('keydown', handleUnmute);
      video.pause();
    };
  }, [videoSrc]);

  const handleCardClick = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = false;
      video.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  const themeConfig = {
    pink: {
      cardBg: 'bg-gradient-to-b from-[#FFF5F8] to-[#FFF0F4]',
      cardBorder: 'border-[#F9DDE7]',
      cardGlow: 'shadow-[0_16px_50px_rgba(239,164,184,0.22)]',
    },
    lavender: {
      cardBg: 'bg-gradient-to-b from-[#F9F6FE] to-[#F3EDFD]',
      cardBorder: 'border-[#E8E0F6]',
      cardGlow: 'shadow-[0_16px_50px_rgba(209,196,233,0.25)]',
    },
    ivory: {
      cardBg: 'bg-gradient-to-b from-[#FFFBF7] to-[#FFF6EE]',
      cardBorder: 'border-[#EADBCE]',
      cardGlow: 'shadow-[0_16px_50px_rgba(155,113,95,0.14)]',
    },
  }[theme];

  return (
    <div className="w-full max-w-xl mx-auto flex flex-col items-center px-4 py-2 sm:py-6 animate-fadeIn">
      {/* Editorial Header Section */}
      <div className="text-center mb-3 sm:mb-5 max-w-lg">
        <h1 className="text-2xl sm:text-3xl font-display font-bold text-[#493A38] tracking-tight leading-snug">
          {heading}
        </h1>
        {subtitle && (
          <p className="mt-1.5 text-xs sm:text-sm text-[#7A645F] font-normal leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>

      {/* Main Animated Story Stage */}
      <div
        className={`w-full relative rounded-3xl sm:rounded-[2.5rem] p-4 sm:p-6 border transition-all duration-500 overflow-hidden ${themeConfig.cardBg} ${themeConfig.cardBorder} ${themeConfig.cardGlow}`}
      >
        {/* Soft floating decorative hearts in card */}
        <div className="absolute top-3 left-4 text-pink-300/40 pointer-events-none animate-float-slow">
          <Heart className="w-5 h-5 fill-current" />
        </div>
        <div className="absolute bottom-4 right-4 text-pink-300/40 pointer-events-none animate-float-slow" style={{ animationDelay: '1.5s' }}>
          <Sparkles className="w-5 h-5" />
        </div>

        {/* Presentation Container with overflow-hidden to crop out black letterbox bars */}
        <div
          onClick={handleCardClick}
          className="relative w-full aspect-[9/16] sm:aspect-[4/5] max-h-[520px] rounded-2xl sm:rounded-3xl overflow-hidden flex flex-col items-center justify-center bg-white shadow-xs cursor-pointer group"
        >
          {/* THE REAL MP4 VIDEO: Directly displayed with zero placeholder blocking */}
          <video
            key={videoSrc}
            ref={videoRef}
            src={videoSrc}
            autoPlay
            loop={loop}
            playsInline
            muted
            preload="auto"
            onPlay={() => setIsPlaying(true)}
            onPlaying={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onEnded={() => {
              if (onEnded) onEnded();
            }}
            className="w-full h-full object-cover object-center scale-[1.18] transition-transform duration-300 block"
          />

          {/* Gentle play button shown only if browser policy paused autoplay */}
          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 z-20 transition-opacity">
              <div className="w-16 h-16 rounded-full bg-white/95 text-[#E86E8A] flex items-center justify-center shadow-xl group-hover:scale-105 active:scale-95 transition-transform">
                <Play className="w-7 h-7 fill-current ml-1" />
              </div>
            </div>
          )}
        </div>

        {/* Footer Dialogue Caption */}
        {footerContent && (
          <div className="mt-3 sm:mt-4 text-center px-2">
            {footerContent}
          </div>
        )}
      </div>

      {/* Navigation Button */}
      <div className="mt-5 sm:mt-6 flex flex-col items-center gap-2 w-full max-w-xs">
        {actionButton}
      </div>
    </div>
  );
};
