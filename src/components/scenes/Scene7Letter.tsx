import React, { useState } from 'react';
import { Heart, RotateCcw, Sparkles, Cake, Share2, Check } from 'lucide-react';
import { BirthdayCakeCelebration, WhiteBearGreeting } from '../common/TeddyIllustrations';

interface Scene7LetterProps {
  onReplayBirthdayVideo: () => void;
  onRestartStory: () => void;
}

export const Scene7Letter: React.FC<Scene7LetterProps> = ({
  onReplayBirthdayVideo,
  onRestartStory,
}) => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setHasCopied(true);
      setTimeout(() => setHasCopied(false), 2500);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col items-center px-4 py-6 sm:py-10 animate-fadeIn">
      {/* Decorative Envelope Header Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFF0F5] border border-[#F9DDE7] text-xs sm:text-sm font-semibold text-[#D95B78] shadow-sm mb-4 sm:mb-6">
        <Sparkles className="w-4 h-4 text-[#E86E8A]" />
        <span>A Special Birthday Letter Just For You</span>
        <Heart className="w-3.5 h-3.5 fill-[#E86E8A] text-[#E86E8A]" />
      </div>

      {/* Main Paper-like Letter Panel */}
      <div className="w-full relative rounded-3xl p-6 sm:p-10 md:p-12 border border-[#EADBCE] bg-[#FFFBF7] shadow-[0_20px_60px_rgba(155,113,95,0.12)] text-[#493A38] relative overflow-hidden">
        {/* Subtle lined paper texture / border styling */}
        <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-[#EFA4B8] via-[#E8E0F6] to-[#EFA4B8]" />

        {/* Vintage Postmark Stamp Top Right */}
        <div className="absolute top-6 right-6 border-2 border-dashed border-[#D5C2B9] rounded-xl p-2.5 flex flex-col items-center text-[10px] sm:text-xs text-[#9B715F] font-mono rotate-3 opacity-80 pointer-events-none select-none">
          <span className="font-bold tracking-widest uppercase">Special Delivery</span>
          <span className="font-semibold text-[#E86E8A]">OCTOBER 22, 2026</span>
          <span>NIVAHH &bull; 20 YEARS</span>
        </div>

        {/* Header with Birthday Cake Illustration */}
        <div className="flex flex-col items-center text-center mt-2 mb-8">
          <div className="w-24 h-24 mb-2">
            <BirthdayCakeCelebration className="w-full h-full" />
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-[#493A38] tracking-tight">
            Happy 20th Birthday, Nivahh! 🎂💗
          </h1>
          <p className="mt-1 text-xs sm:text-sm text-[#9B715F] font-medium">
            October 22, 2026 &bull; Stepping into your twenties
          </p>
        </div>

        {/* Letter Body Content */}
        <div className="space-y-4 text-sm sm:text-base leading-relaxed text-[#5A4947] font-normal">
          <p className="first-letter:text-3xl first-letter:font-display first-letter:font-bold first-letter:text-[#E86E8A] first-letter:mr-1">
            Happy, happy 20th Birthday, Nivahh! Entering a brand-new decade is a truly meaningful milestone, and today is all about celebrating the remarkable person you are.
          </p>

          <p>
            Your genuine warmth and deeply caring nature brighten every room you enter. You bring so much gentle kindness to the people around you, always showing up with empathy, thoughtfulness, and a compassionate heart that never goes unnoticed.
          </p>

          <p>
            I admire your dedication, resilience, and the tireless hard work you pour into everything you set your mind to. Whether facing quiet challenges or striving toward big ambitions, your patience and perseverance are truly inspiring.
          </p>

          <p>
            As you step boldly into your twenties, my sincerest wish for you is a year filled with abundant happiness, steady peace, and exciting new milestones. May every path you choose bring you fulfillment, authentic friendships, and unforgettable memories that make you smile for years to come.
          </p>

          <p className="p-3.5 rounded-2xl bg-[#FFF3F6] border border-[#FADCE6] text-[#A24D63] font-medium text-xs sm:text-sm">
            🌸 <strong>A gentle reminder:</strong> Amidst all your hard work and caring for others, always remember to look after yourself too. Rest when you need to, treat yourself kindly, and never forget just how worthy and cherished you are.
          </p>

          <p>
            This little digital story was created with immense care and thought, built piece by piece just to bring a smile to your face on your special day. I hope each bear, giggle, and surprise reminded you of how much you mean to the people who celebrate you today.
          </p>
        </div>

        {/* Sign-off & Stamp */}
        <div className="mt-8 pt-6 border-t border-[#EADBCE] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <WhiteBearGreeting className="w-16 h-16" />
            <div className="text-left">
              <p className="text-xs text-[#9B715F]">With all the warmest wishes,</p>
              <p className="font-display font-bold text-base text-[#493A38]">From someone who cares 💗</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs px-3 py-1 rounded-full bg-[#F3E8FF] text-[#7E22CE] font-medium border border-[#E9D5FF]">
              Forever 20 &bull; 2026
            </span>
          </div>
        </div>
      </div>

      {/* Navigation & Action Controls below letter */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3 w-full">
        <button
          onClick={onReplayBirthdayVideo}
          className="py-3 px-5 rounded-2xl font-display font-semibold text-sm text-[#493A38] bg-white hover:bg-[#FFF3F6] border border-[#F9DDE7] shadow-sm hover:shadow active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
        >
          <Cake className="w-4 h-4 text-[#E86E8A]" />
          <span>Replay Birthday Video 🎂</span>
        </button>

        <button
          onClick={onRestartStory}
          className="py-3 px-5 rounded-2xl font-display font-semibold text-sm text-[#493A38] bg-white hover:bg-[#F8F5F2] border border-[#EADBCE] shadow-sm hover:shadow active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
        >
          <RotateCcw className="w-4 h-4 text-[#9B715F]" />
          <span>Play from Beginning 🧸</span>
        </button>

        <button
          onClick={handleShare}
          className="py-3 px-4 rounded-2xl font-display font-medium text-xs sm:text-sm text-[#7A645F] hover:text-[#493A38] bg-white/70 hover:bg-white border border-[#EADBCE] shadow-sm active:scale-95 transition-all flex items-center gap-1.5 cursor-pointer"
          title="Copy link to this birthday surprise"
        >
          {hasCopied ? (
            <>
              <Check className="w-4 h-4 text-emerald-600" />
              <span className="text-emerald-700 font-semibold">Link Copied!</span>
            </>
          ) : (
            <>
              <Share2 className="w-4 h-4" />
              <span>Share Link</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};
