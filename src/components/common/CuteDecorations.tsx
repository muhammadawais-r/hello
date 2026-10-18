import React, { useMemo } from 'react';
import { Heart, Sparkles } from 'lucide-react';

export const FloatingBackgroundDecorations: React.FC<{ variant?: 'pink' | 'lavender' | 'crimson' | 'ivory' }> = ({
  variant = 'pink',
}) => {
  // Generate random static particles to prevent hydration jitter
  const particles = useMemo(() => {
    return Array.from({ length: 14 }).map((_, i) => ({
      id: i,
      left: `${(i * 7.5 + 4) % 95}%`,
      top: `${(i * 9 + 8) % 90}%`,
      delay: `${(i * 0.4) % 3.2}s`,
      duration: `${4 + (i % 4)}s`,
      size: 14 + (i % 3) * 6,
      opacity: 0.25 + (i % 4) * 0.12,
      isSparkle: i % 3 === 0,
    }));
  }, []);

  const getVariantColors = () => {
    switch (variant) {
      case 'lavender':
        return {
          glow1: 'from-purple-200/40 via-pink-100/20 to-transparent',
          glow2: 'from-indigo-100/30 via-purple-100/20 to-transparent',
          heartColor: 'text-purple-300',
          sparkleColor: 'text-purple-400',
        };
      case 'crimson':
        return {
          glow1: 'from-rose-900/30 via-red-950/20 to-transparent',
          glow2: 'from-red-900/20 via-pink-900/10 to-transparent',
          heartColor: 'text-rose-400',
          sparkleColor: 'text-amber-300',
        };
      case 'ivory':
      case 'pink':
      default:
        return {
          glow1: 'from-pink-200/50 via-rose-100/30 to-transparent',
          glow2: 'from-amber-100/40 via-pink-100/20 to-transparent',
          heartColor: 'text-pink-300',
          sparkleColor: 'text-pink-400',
        };
    }
  };

  const colors = getVariantColors();

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {/* Ambient gradient orbs */}
      <div
        className={`absolute -top-32 -left-32 w-96 h-96 rounded-full bg-gradient-to-br ${colors.glow1} blur-3xl`}
      />
      <div
        className={`absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-gradient-to-tl ${colors.glow2} blur-3xl`}
      />

      {/* Floating particles */}
      {particles.map(p => (
        <div
          key={p.id}
          className="absolute transition-transform animate-float-slow"
          style={{
            left: p.left,
            top: p.top,
            animationDelay: p.delay,
            animationDuration: p.duration,
            opacity: p.opacity,
          }}
        >
          {p.isSparkle ? (
            <Sparkles className={`${colors.sparkleColor} animate-sparkle`} style={{ width: p.size, height: p.size }} />
          ) : (
            <Heart className={`${colors.heartColor} fill-current`} style={{ width: p.size, height: p.size }} />
          )}
        </div>
      ))}
    </div>
  );
};
