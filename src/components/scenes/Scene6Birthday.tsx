import React, { useState } from 'react';
import { Mail, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { AnimatedPageStage } from './AnimatedPageStage';
import { BirthdaySerenadeAnimation } from '../common/TeddyIllustrations';

interface Scene6BirthdayProps {
  onOpenLetter: () => void;
}

export const Scene6Birthday: React.FC<Scene6BirthdayProps> = ({ onOpenLetter }) => {
  const [countdownFinished, setCountdownFinished] = useState(false);

  const handleCountdownComplete = () => {
    setCountdownFinished(true);

    try {
      confetti({
        particleCount: 90,
        spread: 75,
        origin: { y: 0.6 },
        colors: ['#EFA4B8', '#F9DDE7', '#FFE5A3', '#E8E0F6', '#DCEBDD'],
      });
      setTimeout(() => {
        confetti({
          particleCount: 60,
          angle: 60,
          spread: 60,
          origin: { x: 0 },
          colors: ['#FF6B8B', '#FFAAA6', '#FFE5A3'],
        });
        confetti({
          particleCount: 60,
          angle: 120,
          spread: 60,
          origin: { x: 1 },
          colors: ['#FF6B8B', '#FFAAA6', '#FFE5A3'],
        });
      }, 400);
    } catch (e) {
      console.warn('Confetti error:', e);
    }
  };

  return (
    <div className="w-full flex flex-col items-center">
      <AnimatedPageStage
        videoKey="birthday"
        theme="pink"
        heading={
          <span>
            Happy 20th Birthday, Nivahh! 🎂🎉
          </span>
        }
        subtitle="Blow the candle and make your sweetest wish…"
        animatedIllustration={
          <BirthdaySerenadeAnimation onCountdownComplete={handleCountdownComplete} />
        }
        dialogueBadge={
          countdownFinished ? (
            <div className="px-4 py-2 rounded-2xl bg-gradient-to-r from-[#FFF0F5] to-[#F3E8FF] border border-[#F9DDE7] text-xs sm:text-sm font-bold text-[#D95B78] shadow-sm flex items-center gap-1.5 animate-gentle-pulse">
              <Sparkles className="w-4 h-4 text-[#E86E8A]" />
              <span>A personal birthday letter has unlocked for you!</span>
              <Sparkles className="w-4 h-4 text-[#E86E8A]" />
            </div>
          ) : null
        }
        actionButton={
          <button
            onClick={onOpenLetter}
            className="w-full py-4 px-6 rounded-2xl font-display font-bold text-base text-white bg-gradient-to-r from-[#E86E8A] via-[#FF758C] to-[#E86E8A] hover:opacity-95 shadow-xl shadow-[#E86E8A]/35 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2.5 animate-gentle-pulse ring-4 ring-[#F9DDE7] cursor-pointer"
          >
            <Mail className="w-5 h-5" />
            <span>Open Your Birthday Letter 💌</span>
          </button>
        }
      />
    </div>
  );
};
