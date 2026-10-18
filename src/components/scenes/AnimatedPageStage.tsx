import React, { useRef, useEffect } from 'react';
import { Sparkles, Heart } from 'lucide-react';
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

  // Compute robust path that works in dev, preview, Netlify, and custom domains
  const base = import.meta.env.BASE_URL.endsWith('/')
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;
  const videoSrc = `${base}videos/${manifest.filename}`;

  // Ensure video autoplays immediately and sound turns on reliably
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Start with muted=true so Chrome/Safari/iOS/Netlify NEVER block autoplay
    video.muted = true;
    const playPromise = video.play();

    // Attempt to unmute immediately if browser policy allows
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          video.muted = false;
        })
        .catch(() => {
          // If browser requires user interaction for sound, retry muted
          video.muted = true;
          video.play().catch(() => {});
        });
    }

    // Any touch, click, or keypress anywhere on the screen immediately unmutes the video
    const handleUnmute = () => {
      if (video) {
        video.muted = false;
        video.play().catch(() => {});
      }
    };

    window.addEventListener('click', handleUnmute, { once: true, passive: true });
    window.addEventListener('touchstart', handleUnmute, { once: true, passive: true });
    window.addEventListener('keydown', handleUnmute, { once: true, passive: true });

    return () => {
      window.removeEventListener('click', handleUnmute);
      window.removeEventListener('touchstart', handleUnmute);
      window.removeEventListener('keydown', handleUnmute);
      if (video) {
        video.pause();
      }
    };
  }, [videoSrc]);

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
          className="relative w-full aspect-[9/16] sm:aspect-[4/5] max-h-[520px] rounded-2xl sm:rounded-3xl overflow-hidden flex flex-col items-center justify-center bg-white shadow-xs"
        >
          {/* THE REAL MP4 VIDEO: Directly displayed with zero placeholder blocking */}
          <video
            ref={videoRef}
            src={videoSrc}
            autoPlay
            loop={loop}
            playsInline
            muted
            preload="auto"
            onEnded={() => {
              if (onEnded) onEnded();
            }}
            className="w-full h-full object-cover object-center scale-[1.18] transition-transform duration-300 block"
          />
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
