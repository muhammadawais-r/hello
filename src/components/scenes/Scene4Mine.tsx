import React from 'react';
import { Gift } from 'lucide-react';
import { AnimatedPageStage } from './AnimatedPageStage';
import { CutePandaPoet } from '../common/TeddyIllustrations';

interface Scene4MineProps {
  onNext: () => void;
}

export const Scene4Mine: React.FC<Scene4MineProps> = ({ onNext }) => {
  return (
    <div className="w-full flex flex-col items-center">
      <AnimatedPageStage
        videoKey="mine"
        theme="lavender"
        heading={<span>A Poetic Declaration 🐼✨</span>}
        subtitle="A special friend in a lilac ribbon has a very important rhyme for you…"
        animatedIllustration={<CutePandaPoet className="w-48 h-48 sm:w-56 sm:h-56" />}
        dialogueBadge={
          <div className="px-4 py-2.5 rounded-2xl bg-white/95 border border-[#E9D5FF] text-xs sm:text-sm font-semibold text-[#7E22CE] shadow-sm flex items-center gap-1.5 text-center">
            <span>&ldquo;This is line… this is nine… this is wine… and you are MINE! 💜&rdquo;</span>
          </div>
        }
        actionButton={
          <button
            onClick={onNext}
            className="w-full py-3.5 px-6 rounded-2xl font-display font-semibold text-base bg-gradient-to-r from-[#9333EA] to-[#E86E8A] hover:from-[#7E22CE] hover:to-[#D95B78] text-white shadow-lg shadow-purple-300/40 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 ring-4 ring-[#E8E0F6] cursor-pointer"
          >
            <Gift className="w-4 h-4" />
            <span>Unlock the Big Surprise 🎁</span>
          </button>
        }
      />
    </div>
  );
};
