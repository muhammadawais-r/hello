import React from 'react';
import { ArrowRight } from 'lucide-react';
import { AnimatedPageStage } from './AnimatedPageStage';
import { PinkBearWithFlower } from '../common/TeddyIllustrations';

interface Scene3VitaminProps {
  onNext: () => void;
}

export const Scene3Vitamin: React.FC<Scene3VitaminProps> = ({ onNext }) => {
  return (
    <div className="w-full flex flex-col items-center">
      <AnimatedPageStage
        videoKey="vitamin"
        theme="pink"
        heading={<span>Urgent Health Checkup 🩺💗</span>}
        subtitle="Wait, hold on… are you feeling alright today?"
        animatedIllustration={
          <PinkBearWithFlower className="w-48 h-48 sm:w-56 sm:h-56" hasMagnifyingGlass={false} isWinking={true} />
        }
        dialogueBadge={
          <div className="px-4 py-2 rounded-2xl bg-white/95 border border-[#FADCE6] text-xs sm:text-sm font-semibold text-[#D95B78] shadow-sm flex items-center gap-1.5 text-center">
            <span>&ldquo;You look like you&apos;re missing a Vitamin… Vitamin ME! 😉💖&rdquo;</span>
          </div>
        }
        footerContent={
          <div className="py-2 px-3 rounded-xl bg-white/70 border border-[#F9DDE7] text-xs font-medium text-[#D95B78] inline-block">
            Prescription: a little extra happiness. 💗
          </div>
        }
        actionButton={
          <button
            onClick={onNext}
            className="w-full py-3.5 px-6 rounded-2xl font-display font-semibold text-base bg-[#E86E8A] hover:bg-[#D95B78] text-white shadow-lg shadow-[#E86E8A]/30 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 ring-4 ring-[#F9DDE7] cursor-pointer"
          >
            <span>Continue to Scene 4</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        }
      />
    </div>
  );
};
