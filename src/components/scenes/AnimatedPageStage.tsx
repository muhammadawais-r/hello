import React, { useRef, useState, useEffect } from 'react';
import { Sparkles, Heart } from 'lucide-react';
import { VideoAssetKey, VIDEO_MANIFEST } from '../../types';

interface AnimatedPageStageProps {
  videoKey: VideoAssetKey;
  heading: React.ReactNode;
  subtitle?: React.ReactNode;
  footerContent?: React.ReactNode;
  actionButton?: React.ReactNode;
  theme?: 'pink' | 'lavender' | 'ivory';
  animatedIllustration: React.ReactNode;
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
  animatedIllustration,
  dialogueBadge,
  onEnded,
  loop = true,
}) => {
  const manifest = VIDEO_MANIFEST[videoKey];
  const videoRef = useRef<HTMLVideoElement>(null);

  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  // Auto-play video with sound always enabled
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = false;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setVideoLoaded(true);
          setIsMuted(false);
        })
        .catch(() => {
          // If browser policy prevents unmuted autoplay on initial load,
          // start muted and unmute immediately on the first touch or click
          video.muted = true;
          setIsMuted(true);
          video
            .play()
            .then(() => setVideoLoaded(true))
            .catch(() => setVideoLoaded(false));

          const enableAudio = () => {
            if (videoRef.current) {
              videoRef.current.muted = false;
              setIsMuted(false);
            }
          };
          window.addEventListener('click', enableAudio, { once: true });
          window.addEventListener('touchstart', enableAudio, { once: true });
        });
    }

    return () => {
      if (video) {
        video.pause();
      }
    };
  }, [manifest.defaultPath]);

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

      {/* Main Animated Story Stage (No Black Borders, Rounded & Seamless) */}
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
          {/* THE REAL MP4 ANIMATION: Cropped with scale-[1.18] so black borders do not show, seamlessly merging with background */}
          <video
            ref={videoRef}
            src={manifest.defaultPath}
            autoPlay
            loop={loop}
            playsInline
            muted={isMuted}
            onEnded={() => {
              if (onEnded) onEnded();
            }}
            onLoadedData={() => setVideoLoaded(true)}
            onPlay={() => setVideoLoaded(true)}
            onError={(e) => {
              console.warn('Video failed to load:', manifest.defaultPath, e);
              setVideoLoaded(false);
            }}
            className="w-full h-full object-cover object-center scale-[1.18] z-10 transition-transform duration-300"
          />

          {/* Fallback illustration only shown if video cannot load */}
          {!videoLoaded && (
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 z-0">
              {animatedIllustration}
              {dialogueBadge && (
                <div className="mt-4 sm:mt-6 animate-gentle-pulse">
                  {dialogueBadge}
                </div>
              )}
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
