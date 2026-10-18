import React from 'react';
import { RotateCcw, Heart } from 'lucide-react';
import { DetourBearsIllustration } from '../common/TeddyIllustrations';
import { NO_MESSAGES } from '../../types';

interface Scene5DetourProps {
  noClickCount: number;
  onTryAgain: () => void;
}

export const Scene5Detour: React.FC<Scene5DetourProps> = ({ noClickCount, onTryAgain }) => {
  const currentMessage =
    noClickCount > 0
      ? NO_MESSAGES[Math.min(noClickCount - 1, NO_MESSAGES.length - 1)]
      : 'Why did you click No?';

  return (
    <div className="w-full min-h-[580px] max-w-md mx-auto flex flex-col items-center justify-between px-6 py-10 rounded-3xl bg-gradient-to-b from-[#800C16] via-[#6B0912] to-[#4F050C] text-white shadow-2xl relative overflow-hidden animate-fadeIn border-4 border-[#A31625]">
      {/* Subtle background glow */}
      <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-rose-500/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-red-600/20 blur-3xl pointer-events-none" />

      {/* Top Section: Playful Arched / Curved Heading */}
      <div className="w-full flex flex-col items-center pt-2">
        {/* SVG Arched Text for accurate curved typography like refrence.jfif */}
        <div className="w-full max-w-[340px] h-[90px] flex items-center justify-center">
          <svg viewBox="0 0 340 90" className="w-full h-full overflow-visible">
            <defs>
              <path id="curve" d="M 30,85 Q 170,10 310,85" fill="transparent" />
            </defs>
            <text fill="#FFFFFF" className="font-display font-extrabold tracking-wide" fontSize="28">
              <textPath href="#curve" startOffset="50%" textAnchor="middle">
                Why did you click No
              </textPath>
            </text>
          </svg>
        </div>

        {/* Small dialogue caption */}
        <div className="mt-1 px-4 py-1.5 rounded-full bg-black/30 border border-white/15 text-xs text-rose-100 font-medium backdrop-blur-sm flex items-center gap-1.5">
          <span>{currentMessage}</span>
        </div>
      </div>

      {/* Middle Section: Character Illustration recreating refrence.jfif */}
      <div className="my-auto py-4 flex flex-col items-center justify-center">
        <DetourBearsIllustration className="w-72 h-52 sm:w-80 sm:h-56" />

        <p className="text-[12px] text-rose-200/90 text-center mt-2 max-w-xs italic">
          &ldquo;Put the hands up! You are under arrest by the Bear Police for denying happiness!&rdquo; 🧸🚨
        </p>
      </div>

      {/* Bottom Section: Try Again Button */}
      <div className="w-full flex flex-col items-center pb-2">
        <button
          onClick={onTryAgain}
          className="w-full max-w-[220px] py-3.5 px-6 rounded-2xl font-display font-bold text-sm sm:text-base text-white bg-gradient-to-r from-[#FF6B8B] to-[#FF8DA1] hover:from-[#FA5276] hover:to-[#FF748D] shadow-lg shadow-black/40 hover:shadow-xl active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer border border-white/20"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Try Again</span>
          <Heart className="w-4 h-4 fill-white" />
        </button>

        <span className="text-[11px] text-rose-300/80 mt-3 font-medium">
          Attempt {noClickCount} of 5 &bull; Returning to your choice…
        </span>
      </div>
    </div>
  );
};
