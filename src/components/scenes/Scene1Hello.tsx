import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { AnimatedPageStage } from './AnimatedPageStage';
import { WhiteBearGreeting } from '../common/TeddyIllustrations';

interface Scene1HelloProps {
  onNext: () => void;
}

export const Scene1Hello: React.FC<Scene1HelloProps> = ({ onNext }) => {
  return (
    <div className="w-full flex flex-col items-center">
      <AnimatedPageStage
        videoKey="hello"
        theme="pink"
        heading={
          <span>
            Hey Nivahh, someone has a little surprise for you. <span className="inline-block animate-gentle-pulse">💗</span>
          </span>
        }
        subtitle="A cute little friend has been waiting all day just to say hi!"
        animatedIllustration={<WhiteBearGreeting className="w-48 h-48 sm:w-56 sm:h-56" />}
        dialogueBadge={
          <div className="px-4 py-2 rounded-2xl bg-white/95 border border-[#FADCE6] text-xs sm:text-sm font-semibold text-[#D95B78] shadow-sm flex items-center gap-2">
            <span>&ldquo;Hello! Hello! Hello! Hi! 👋💗&rdquo;</span>
          </div>
        }
        actionButton={
          <button
            onClick={onNext}
            className="w-full py-3.5 px-6 rounded-2xl font-display font-semibold text-base bg-[#E86E8A] hover:bg-[#D95B78] text-white shadow-lg shadow-[#E86E8A]/30 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 ring-4 ring-[#F9DDE7] cursor-pointer"
          >
            <span>Continue to Next Surprise</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        }
      />
    </div>
  );
};
