import React, { useState } from 'react';
import { Heart, Sparkles } from 'lucide-react';
import { NO_MESSAGES } from '../../types';
import { WhiteBearGreeting, CutePandaPoet } from '../common/TeddyIllustrations';

interface Scene5SurpriseProps {
  noClickCount: number;
  onYes: () => void;
  onNo: () => void;
}

export const Scene5Surprise: React.FC<Scene5SurpriseProps> = ({
  noClickCount,
  onYes,
  onNo,
}) => {
  const [isNavigating, setIsNavigating] = useState(false);

  const handleYesClick = () => {
    if (isNavigating) return;
    setIsNavigating(true);
    onYes();
  };

  const handleNoClick = () => {
    if (isNavigating) return;
    onNo();
  };

  // Determine current supporting message
  const currentMessage =
    noClickCount > 0
      ? NO_MESSAGES[Math.min(noClickCount - 1, NO_MESSAGES.length - 1)]
      : 'Do you want to see it?';

  // Calculate dynamic scales
  // Yes button grows by ~12-15% each No click
  const yesScale = 1 + Math.min(noClickCount, 5) * 0.12;
  // No button shrinks by ~8-10% each No click
  const noScale = Math.max(0.55, 1 - noClickCount * 0.09);
  const showNoButton = noClickCount < 5;

  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col items-center justify-center px-4 py-8 animate-fadeIn">
      {/* Main Card Container inspired by reference 1 */}
      <div className="w-full relative rounded-3xl p-6 sm:p-10 border border-[#F9DDE7] bg-white/85 backdrop-blur-md shadow-[0_16px_50px_rgba(239,164,184,0.22)] flex flex-col items-center text-center">
        {/* Decorative corner tag */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF0F5] border border-[#F9DDE7] text-xs font-semibold text-[#D95B78] mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#E86E8A] animate-sparkle" />
          <span>A Secret Milestone Ahead</span>
        </div>

        {/* Two cute companion characters: White Bear & Panda Bear together */}
        <div className="relative flex items-center justify-center gap-2 sm:gap-6 my-2 sm:my-4">
          <div className="relative transform -rotate-3 hover:rotate-0 transition-transform duration-300">
            <WhiteBearGreeting className="w-32 h-32 sm:w-40 sm:h-40" />
          </div>
          <div className="relative transform rotate-3 hover:rotate-0 transition-transform duration-300">
            <CutePandaPoet className="w-32 h-32 sm:w-40 sm:h-40" />
          </div>

          {/* Floating heart between them */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 animate-gentle-pulse">
            <Heart className="w-8 h-8 text-[#E86E8A] fill-[#E86E8A] drop-shadow-md" />
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-[#493A38] tracking-tight leading-snug mt-2 max-w-md">
          Wait… I have one more surprise for you, Nivahh! 🎁
        </h1>

        {/* Supporting Question or Playful No-Reaction */}
        <p
          key={noClickCount}
          className="mt-3 text-base sm:text-lg text-[#7A645F] font-medium transition-all duration-300 min-h-[1.75rem]"
        >
          {currentMessage}
        </p>

        {/* No click counter pill indicator if counter > 0 */}
        {noClickCount > 0 && (
          <div className="mt-2 text-xs font-medium text-[#D95B78] bg-[#FEE2E2] px-3 py-1 rounded-full border border-red-200 animate-gentle-pulse">
            {noClickCount === 5 ? (
              <span>✨ No button ran away! Only sweet Yes remains! ✨</span>
            ) : (
              <span>Bear Persuasion Level: {noClickCount} / 5</span>
            )}
          </div>
        )}

        {/* Interactive Buttons Container */}
        <div className="mt-8 mb-2 flex flex-wrap items-center justify-center gap-4 sm:gap-6 w-full min-h-[90px]">
          {/* YES Button (Expands with every No click) */}
          <button
            onClick={handleYesClick}
            disabled={isNavigating}
            style={{
              transform: `scale(${yesScale})`,
              transformOrigin: 'center center',
            }}
            className="py-3.5 px-7 rounded-2xl font-display font-bold text-white bg-gradient-to-r from-[#E86E8A] to-[#FF8DA1] hover:from-[#D95B78] hover:to-[#FA728D] shadow-lg shadow-[#E86E8A]/35 active:scale-95 transition-all duration-300 flex items-center gap-2 cursor-pointer focus:outline-none focus:ring-4 focus:ring-pink-300"
          >
            <span>Yes! Show me</span>
            <Heart className="w-4 h-4 fill-white text-white" />
          </button>

          {/* NO Button (Shrinks with every click and disappears at 5) */}
          {showNoButton && (
            <button
              onClick={handleNoClick}
              disabled={isNavigating}
              style={{
                transform: `scale(${noScale})`,
                transformOrigin: 'center center',
              }}
              className="py-3 px-6 rounded-2xl font-display font-medium text-[#6B5A57] bg-[#F1E8E6] hover:bg-[#E5D7D4] shadow-sm hover:shadow active:scale-90 transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-stone-300"
            >
              <span>No 🙈</span>
            </button>
          )}
        </div>

        <p className="text-[12px] text-[#A68F89] mt-6">
          Hint: The little bears spent days preparing this just for you! 🧸💗
        </p>
      </div>
    </div>
  );
};
