import React, { useState, useEffect } from 'react';
import { Heart, Sparkles } from 'lucide-react';

/**
 * High-fidelity, continuously animated teddy bear and panda illustrations.
 * Engineered to auto-play seamlessly like a living animated picture-book.
 */

/* --- SCENE 1: WHITE TEDDY BEAR GREETING ("Hello, hello, hello! Hi!") --- */
export const WhiteBearGreeting: React.FC<{ className?: string }> = ({ className = 'w-56 h-56' }) => (
  <div className={`relative flex flex-col items-center justify-center ${className}`}>
    {/* Floating heart bursts from waving paw */}
    <div className="absolute top-2 left-6 text-pink-400 animate-float-slow">
      <Heart className="w-5 h-5 fill-current" />
    </div>
    <div className="absolute top-10 right-4 text-pink-300 animate-float-slow" style={{ animationDelay: '1.2s' }}>
      <Sparkles className="w-4 h-4" />
    </div>

    <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-md">
      {/* Soft shadow */}
      <ellipse cx="100" cy="180" rx="60" ry="12" fill="#E8D5CE" opacity="0.6" />

      {/* Body with breathing animation */}
      <path
        d="M 60 110 C 50 140, 50 170, 75 175 C 90 178, 110 178, 125 175 C 150 170, 150 140, 140 110 Z"
        fill="#FFFFFF"
        stroke="#493A38"
        strokeWidth="3.5"
        strokeLinecap="round"
      />

      {/* Feet */}
      <ellipse cx="78" cy="172" rx="16" ry="10" fill="#FFFFFF" stroke="#493A38" strokeWidth="3" />
      <ellipse cx="122" cy="172" rx="16" ry="10" fill="#FFFFFF" stroke="#493A38" strokeWidth="3" />

      {/* Ears with subtle twitch */}
      <circle cx="58" cy="55" r="22" fill="#FFFFFF" stroke="#493A38" strokeWidth="3.5" />
      <circle cx="58" cy="55" r="13" fill="#F9DDE7" />

      <circle cx="142" cy="55" r="22" fill="#FFFFFF" stroke="#493A38" strokeWidth="3.5" />
      <circle cx="142" cy="55" r="13" fill="#F9DDE7" />

      {/* Head */}
      <circle cx="100" cy="85" r="48" fill="#FFFFFF" stroke="#493A38" strokeWidth="3.5" />

      {/* Cheeks with rosy glow */}
      <ellipse cx="70" cy="98" rx="9" ry="6" fill="#F9A8B8" opacity="0.85" />
      <ellipse cx="130" cy="98" rx="9" ry="6" fill="#F9A8B8" opacity="0.85" />

      {/* Eyes */}
      <ellipse cx="82" cy="82" rx="4" ry="6" fill="#493A38" />
      <circle cx="81" cy="80" r="1.8" fill="#FFFFFF" />

      <ellipse cx="118" cy="82" rx="4" ry="6" fill="#493A38" />
      <circle cx="117" cy="80" r="1.8" fill="#FFFFFF" />

      {/* Snout & Smile */}
      <ellipse cx="100" cy="95" rx="14" ry="10" fill="#FFF8F2" />
      <ellipse cx="100" cy="91" rx="5" ry="3.5" fill="#493A38" />
      <path d="M 100 95 Q 96 102 92 100" fill="none" stroke="#493A38" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M 100 95 Q 104 102 108 100" fill="none" stroke="#493A38" strokeWidth="2.5" strokeLinecap="round" />

      {/* Left Waving Arm (Continuous wave animation) */}
      <g className="origin-[60px_115px] animate-soft-wiggle">
        <path
          d="M 60 115 C 35 105, 30 75, 42 70 C 50 67, 60 85, 65 110 Z"
          fill="#FFFFFF"
          stroke="#493A38"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />
        {/* Soft paw pad */}
        <ellipse cx="38" cy="74" rx="4" ry="4" fill="#F9DDE7" />
      </g>

      {/* Right Arm */}
      <path
        d="M 140 115 C 158 125, 160 145, 150 150 C 142 153, 134 135, 135 120 Z"
        fill="#FFFFFF"
        stroke="#493A38"
        strokeWidth="3.5"
      />

      {/* Pink Bowtie */}
      <g transform="translate(100, 126)">
        <polygon points="-12,-6 0,-2 -12,6" fill="#EFA4B8" stroke="#493A38" strokeWidth="2" />
        <polygon points="12,-6 0,-2 12,6" fill="#EFA4B8" stroke="#493A38" strokeWidth="2" />
        <circle cx="0" cy="0" r="4.5" fill="#E86E8A" stroke="#493A38" strokeWidth="2" />
      </g>
    </svg>
  </div>
);

/* --- SCENE 2: PINK BEAR INVESTIGATOR WITH MAGNIFYING GLASS --- */
export const PinkBearWithFlower: React.FC<{
  className?: string;
  hasMagnifyingGlass?: boolean;
  isWinking?: boolean;
}> = ({ className = 'w-56 h-56', hasMagnifyingGlass = true, isWinking = false }) => (
  <div className={`relative flex items-center justify-center ${className}`}>
    <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-md">
      <ellipse cx="100" cy="180" rx="55" ry="10" fill="#E8D5CE" opacity="0.6" />

      {/* Body */}
      <path
        d="M 65 115 C 55 145, 55 170, 78 174 C 92 176, 108 176, 122 174 C 145 170, 145 145, 135 115 Z"
        fill="#FDCAD8"
        stroke="#493A38"
        strokeWidth="3.5"
      />
      <ellipse cx="100" cy="145" rx="22" ry="18" fill="#FFEBF1" />

      {/* Feet */}
      <ellipse cx="78" cy="172" rx="14" ry="9" fill="#FDCAD8" stroke="#493A38" strokeWidth="3" />
      <ellipse cx="122" cy="172" rx="14" ry="9" fill="#FDCAD8" stroke="#493A38" strokeWidth="3" />

      {/* Ears */}
      <circle cx="62" cy="62" r="20" fill="#FDCAD8" stroke="#493A38" strokeWidth="3.5" />
      <circle cx="62" cy="62" r="11" fill="#FFEBF1" />

      <circle cx="138" cy="62" r="20" fill="#FDCAD8" stroke="#493A38" strokeWidth="3.5" />
      <circle cx="138" cy="62" r="11" fill="#FFEBF1" />

      {/* Flower on Ear */}
      <g transform="translate(138, 55)" className="animate-gentle-pulse">
        <circle cx="-5" cy="-5" r="4.5" fill="#FFE5A3" />
        <circle cx="5" cy="-5" r="4.5" fill="#FFE5A3" />
        <circle cx="-5" cy="5" r="4.5" fill="#FFE5A3" />
        <circle cx="5" cy="5" r="4.5" fill="#FFE5A3" />
        <circle cx="0" cy="0" r="4" fill="#FFAAA6" />
      </g>

      {/* Head */}
      <circle cx="100" cy="90" r="44" fill="#FDCAD8" stroke="#493A38" strokeWidth="3.5" />

      {/* Cheeks */}
      <ellipse cx="74" cy="102" rx="8" ry="5" fill="#F88DA5" opacity="0.85" />
      <ellipse cx="126" cy="102" rx="8" ry="5" fill="#F88DA5" opacity="0.85" />

      {/* Eyes */}
      {isWinking ? (
        <>
          <ellipse cx="83" cy="87" rx="3.5" ry="5.5" fill="#493A38" />
          <circle cx="82" cy="85" r="1.5" fill="#FFFFFF" />
          <path d="M 112 88 Q 118 82 124 88" fill="none" stroke="#493A38" strokeWidth="3.5" strokeLinecap="round" />
        </>
      ) : (
        <>
          <ellipse cx="84" cy="87" rx="3.8" ry="5.8" fill="#493A38" />
          <circle cx="83" cy="85" r="1.5" fill="#FFFFFF" />
          <ellipse cx="116" cy="87" rx="3.8" ry="5.8" fill="#493A38" />
          <circle cx="115" cy="85" r="1.5" fill="#FFFFFF" />
        </>
      )}

      {/* Snout & Smile */}
      <ellipse cx="100" cy="98" rx="12" ry="8" fill="#FFEBF1" />
      <ellipse cx="100" cy="95" rx="4" ry="2.5" fill="#493A38" />
      <path d="M 97 99 Q 100 104 103 99" fill="none" stroke="#493A38" strokeWidth="2.5" strokeLinecap="round" />

      {/* Magnifying Glass with gentle continuous scanning movement */}
      {hasMagnifyingGlass ? (
        <g className="origin-[68px_122px] animate-soft-wiggle">
          <path
            d="M 68 122 C 55 110, 52 95, 62 90 C 70 85, 75 105, 70 125 Z"
            fill="#FDCAD8"
            stroke="#493A38"
            strokeWidth="3.5"
          />
          <circle cx="56" cy="82" r="18" fill="#E8F4FD" fillOpacity="0.65" stroke="#493A38" strokeWidth="4" />
          <line x1="56" y1="100" x2="60" y2="118" stroke="#493A38" strokeWidth="5" strokeLinecap="round" />
          <path d="M 46 76 A 12 12 0 0 1 60 70" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
        </g>
      ) : (
        <g className="animate-gentle-pulse">
          <path d="M 68 125 C 50 120, 50 105, 62 105 C 72 105, 75 120, 70 130 Z" fill="#FDCAD8" stroke="#493A38" strokeWidth="3" />
          <path d="M 132 125 C 150 120, 150 105, 138 105 C 128 105, 125 120, 130 130 Z" fill="#FDCAD8" stroke="#493A38" strokeWidth="3" />
        </g>
      )}
    </svg>
  </div>
);

/* --- SCENE 4: PANDA POET ("Line, nine, wine, and you are MINE!") --- */
export const CutePandaPoet: React.FC<{ className?: string }> = ({ className = 'w-56 h-56' }) => (
  <div className={`relative flex flex-col items-center justify-center ${className}`}>
    {/* Floating lilac hearts */}
    <div className="absolute -top-2 right-4 text-purple-400 animate-float-slow">
      <Heart className="w-5 h-5 fill-current" />
    </div>

    <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-md">
      <ellipse cx="100" cy="180" rx="55" ry="10" fill="#E8D5CE" opacity="0.6" />

      {/* Black Ears */}
      <circle cx="60" cy="55" r="22" fill="#2D2A2A" stroke="#2D2A2A" strokeWidth="2" />
      <circle cx="140" cy="55" r="22" fill="#2D2A2A" stroke="#2D2A2A" strokeWidth="2" />

      {/* Head */}
      <circle cx="100" cy="85" r="46" fill="#FFFFFF" stroke="#493A38" strokeWidth="3.5" />

      {/* Lilac Headband & Bow */}
      <path d="M 62 60 Q 100 48 138 60" fill="none" stroke="#D1C4E9" strokeWidth="12" strokeLinecap="round" />
      <g transform="translate(100, 48)" className="animate-gentle-pulse">
        <ellipse cx="-12" cy="0" rx="10" ry="7" fill="#C2B2DE" stroke="#493A38" strokeWidth="2" />
        <ellipse cx="12" cy="0" rx="10" ry="7" fill="#C2B2DE" stroke="#493A38" strokeWidth="2" />
        <circle cx="0" cy="0" r="5" fill="#9575CD" stroke="#493A38" strokeWidth="2" />
      </g>

      {/* Panda Black Eye Patches */}
      <ellipse cx="78" cy="88" rx="14" ry="11" transform="rotate(-15 78 88)" fill="#2D2A2A" />
      <ellipse cx="122" cy="88" rx="14" ry="11" transform="rotate(15 122 88)" fill="#2D2A2A" />

      {/* Shiny Eyes */}
      <circle cx="79" cy="86" r="4.5" fill="#FFFFFF" />
      <circle cx="77" cy="89" r="2" fill="#FFFFFF" />
      <circle cx="121" cy="86" r="4.5" fill="#FFFFFF" />
      <circle cx="123" cy="89" r="2" fill="#FFFFFF" />

      {/* Cheeks */}
      <ellipse cx="64" cy="102" rx="7" ry="5" fill="#FFAAA6" opacity="0.8" />
      <ellipse cx="136" cy="102" rx="7" ry="5" fill="#FFAAA6" opacity="0.8" />

      {/* Nose and Smile */}
      <ellipse cx="100" cy="98" rx="4" ry="3" fill="#493A38" />
      <path d="M 96 102 Q 100 106 104 102" fill="none" stroke="#493A38" strokeWidth="2.5" strokeLinecap="round" />

      {/* Body */}
      <path
        d="M 65 118 C 55 145, 55 170, 78 174 C 92 176, 108 176, 122 174 C 145 170, 145 145, 135 118 Z"
        fill="#FFFFFF"
        stroke="#493A38"
        strokeWidth="3.5"
      />

      {/* Apron */}
      <path d="M 78 122 L 122 122 L 118 152 L 82 152 Z" fill="#FFE5A3" stroke="#493A38" strokeWidth="2.5" />
      <line x1="88" y1="124" x2="88" y2="150" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="3 3" />
      <line x1="100" y1="124" x2="100" y2="150" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="3 3" />
      <line x1="112" y1="124" x2="112" y2="150" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="3 3" />

      {/* Black Arms & Legs */}
      <g className="origin-[66px_122px] animate-soft-wiggle">
        <path d="M 66 122 C 48 126, 45 140, 55 148 C 64 152, 70 138, 70 126 Z" fill="#2D2A2A" stroke="#493A38" strokeWidth="2" />
      </g>
      <g className="origin-[134px_122px] animate-soft-wiggle">
        <path d="M 134 122 C 152 126, 155 140, 145 148 C 136 152, 130 138, 130 126 Z" fill="#2D2A2A" stroke="#493A38" strokeWidth="2" />
      </g>
      <ellipse cx="78" cy="172" rx="13" ry="8" fill="#2D2A2A" />
      <ellipse cx="122" cy="172" rx="13" ry="8" fill="#2D2A2A" />
    </svg>
  </div>
);

/* --- DETOUR SCENE RECREATING REFERENCE.JFIF --- */
export const DetourBearsIllustration: React.FC<{ className?: string }> = ({ className = 'w-72 h-52' }) => (
  <div className={`relative flex items-center justify-center ${className}`}>
    <svg viewBox="0 0 280 180" className="w-full h-full drop-shadow-lg">
      <ellipse cx="90" cy="165" rx="35" ry="8" fill="#4A0E17" opacity="0.4" />
      <ellipse cx="180" cy="165" rx="35" ry="8" fill="#4A0E17" opacity="0.4" />

      {/* Panda with teal bonnet pointing playful toy gun */}
      <g id="panda-left">
        <path d="M 68 115 C 60 135, 60 155, 78 158 C 90 160, 102 160, 112 158 C 125 155, 125 135, 118 115 Z" fill="#FFFFFF" stroke="#2D1B1E" strokeWidth="3" />
        <ellipse cx="78" cy="158" rx="9" ry="6" fill="#FFFFFF" stroke="#2D1B1E" strokeWidth="2.5" />
        <ellipse cx="108" cy="158" rx="9" ry="6" fill="#FFFFFF" stroke="#2D1B1E" strokeWidth="2.5" />

        <circle cx="95" cy="85" r="32" fill="#FFFFFF" stroke="#2D1B1E" strokeWidth="3" />

        <path
          d="M 65 78 C 65 52, 125 52, 125 78 C 125 96, 122 105, 118 108 L 100 115 L 72 108 C 68 105, 65 96, 65 78 Z"
          fill="#88D4D6"
          stroke="#2D1B1E"
          strokeWidth="3"
        />
        <path d="M 75 68 Q 80 62 85 66" fill="none" stroke="#FFFFFF" strokeWidth="1.8" />
        <path d="M 98 62 Q 104 56 110 62" fill="none" stroke="#FFFFFF" strokeWidth="1.8" />
        <ellipse cx="95" cy="115" rx="5" ry="3" fill="#6CB8BA" stroke="#2D1B1E" strokeWidth="2" />

        <ellipse cx="95" cy="90" rx="20" ry="16" fill="#FFFFFF" />
        <path d="M 83 82 L 91 85" stroke="#2D1B1E" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M 107 82 L 99 85" stroke="#2D1B1E" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="87" cy="89" r="2.5" fill="#2D1B1E" />
        <circle cx="103" cy="89" r="2.5" fill="#2D1B1E" />
        <ellipse cx="79" cy="94" rx="4" ry="2.5" fill="#FFAAA6" />
        <ellipse cx="111" cy="94" rx="4" ry="2.5" fill="#FFAAA6" />
        <path d="M 92 97 Q 95 95 98 97" fill="none" stroke="#2D1B1E" strokeWidth="2" strokeLinecap="round" />

        {/* Toy Gun */}
        <g transform="translate(136, 112)">
          <rect x="0" y="0" width="16" height="6" rx="1.5" fill="#6B7280" stroke="#2D1B1E" strokeWidth="2" />
          <rect x="3" y="5" width="5" height="9" rx="1" fill="#4B5563" stroke="#2D1B1E" strokeWidth="2" />
          <line x1="16" y1="3" x2="20" y2="3" stroke="#2D1B1E" strokeWidth="2" />
        </g>
      </g>

      {/* Brown bear looking bashful */}
      <g id="bear-right">
        <circle cx="158" cy="62" r="12" fill="#B3806D" stroke="#2D1B1E" strokeWidth="2.5" />
        <circle cx="204" cy="62" r="12" fill="#B3806D" stroke="#2D1B1E" strokeWidth="2.5" />
        <circle cx="181" cy="85" r="32" fill="#B3806D" stroke="#2D1B1E" strokeWidth="3" />

        <path d="M 166 79 Q 172 76 176 81" fill="none" stroke="#2D1B1E" strokeWidth="2" strokeLinecap="round" />
        <path d="M 196 79 Q 190 76 186 81" fill="none" stroke="#2D1B1E" strokeWidth="2" strokeLinecap="round" />
        <ellipse cx="172" cy="86" rx="2.5" ry="3.5" fill="#2D1B1E" />
        <ellipse cx="190" cy="86" rx="2.5" ry="3.5" fill="#2D1B1E" />
        <ellipse cx="162" cy="94" rx="6" ry="3.5" fill="#E8967D" />
        <ellipse cx="200" cy="94" rx="6" ry="3.5" fill="#E8967D" />

        <ellipse cx="181" cy="92" rx="10" ry="7" fill="#CBB0A3" />
        <ellipse cx="181" cy="90" rx="3.5" ry="2" fill="#2D1B1E" />

        <path d="M 158 115 C 150 135, 150 155, 168 158 C 178 160, 192 160, 200 158 C 215 155, 215 135, 206 115 Z" fill="#B3806D" stroke="#2D1B1E" strokeWidth="3" />
        <path d="M 166 112 Q 185 135 198 150" fill="none" stroke="#68BBD4" strokeWidth="4" />
        <rect x="188" y="140" width="18" height="14" rx="4" fill="#8FE2F8" stroke="#2D1B1E" strokeWidth="2" />
        <path d="M 158 122 C 165 118, 172 124, 168 134 Z" fill="#B3806D" stroke="#2D1B1E" strokeWidth="2" />
        <path d="M 190 125 C 182 122, 176 128, 180 136 Z" fill="#B3806D" stroke="#2D1B1E" strokeWidth="2" />
      </g>
    </svg>
  </div>
);

/* --- SCENE 6: BIRTHDAY CAKE & SINGING SERENADE ANIMATION --- */
export const BirthdaySerenadeAnimation: React.FC<{
  onCountdownComplete?: () => void;
}> = ({ onCountdownComplete }) => {
  const [countdown, setCountdown] = useState<number>(4);
  const [isBlownOut, setIsBlownOut] = useState(false);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(prev => prev - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (countdown === 0 && !isBlownOut) {
      setIsBlownOut(true);
      if (onCountdownComplete) {
        onCountdownComplete();
      }
    }
  }, [countdown, isBlownOut, onCountdownComplete]);

  return (
    <div className="relative flex flex-col items-center justify-center w-full max-w-[280px]">
      {/* Countdown or Serenade Text */}
      <div className="mb-2 text-center">
        {!isBlownOut ? (
          <div className="flex flex-col items-center">
            <span className="text-xs font-semibold text-[#8C7671] uppercase tracking-wider">
              Blow the candle in…
            </span>
            <span className="font-display font-extrabold text-3xl sm:text-4xl text-[#E86E8A] animate-gentle-pulse">
              {countdown > 0 ? countdown : '🎉'}
            </span>
          </div>
        ) : (
          <div className="px-3.5 py-1.5 rounded-full bg-[#FFF0F5] border border-[#FADCE6] text-xs font-bold text-[#D95B78] animate-gentle-pulse flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Happy Birthday to you, Nivahh! 🎶</span>
          </div>
        )}
      </div>

      <svg viewBox="0 0 200 200" className="w-48 h-48 sm:w-56 sm:h-56 drop-shadow-md">
        {/* Plate */}
        <ellipse cx="100" cy="165" rx="70" ry="15" fill="#F1F5F9" stroke="#493A38" strokeWidth="3" />

        {/* Cake Base */}
        <path
          d="M 45 130 C 45 155, 155 155, 155 130 L 155 115 C 155 95, 45 95, 45 115 Z"
          fill="#F9DDE7"
          stroke="#493A38"
          strokeWidth="3.5"
        />

        {/* Frosting */}
        <ellipse cx="100" cy="115" rx="55" ry="18" fill="#FFF8F2" stroke="#493A38" strokeWidth="3.5" />
        <path
          d="M 45 116 C 52 130, 60 120, 70 128 C 80 122, 90 134, 100 126 C 110 132, 120 120, 130 128 C 140 122, 148 130, 155 116"
          fill="none"
          stroke="#EFA4B8"
          strokeWidth="4"
          strokeLinecap="round"
        />

        {/* Candle */}
        <rect x="96" y="70" width="8" height="35" rx="3" fill="#FFE5A3" stroke="#493A38" strokeWidth="2.5" />
        <line x1="96" y1="80" x2="104" y2="84" stroke="#EFA4B8" strokeWidth="2" />
        <line x1="96" y1="92" x2="104" y2="96" stroke="#EFA4B8" strokeWidth="2" />
        <line x1="100" y1="70" x2="100" y2="62" stroke="#493A38" strokeWidth="2" />

        {/* Flame or gentle smoke puff */}
        {!isBlownOut ? (
          <g className="animate-gentle-pulse origin-[100px_50px]">
            <circle cx="100" cy="50" r="14" fill="#FFAAA6" opacity="0.3" />
            <path
              d="M 100 38 C 93 48, 95 56, 100 62 C 105 56, 107 48, 100 38 Z"
              fill="#FFB703"
              stroke="#FB8500"
              strokeWidth="1.5"
            />
            <ellipse cx="100" cy="52" rx="3" ry="5" fill="#FFFFFF" />
          </g>
        ) : (
          <g className="animate-float-slow">
            {/* Soft cute smoke swirl */}
            <path d="M 100 60 Q 95 48 103 40 T 98 25" fill="none" stroke="#CBD5E1" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="100" cy="30" r="3" fill="#E2E8F0" opacity="0.8" />
          </g>
        )}

        {/* 20 Charm on Cake */}
        <g transform="translate(100, 145)">
          <text
            textAnchor="middle"
            fontSize="18"
            fontWeight="bold"
            fill="#E86E8A"
            stroke="#493A38"
            strokeWidth="0.8"
            fontFamily="Fredoka, sans-serif"
          >
            20
          </text>
        </g>
      </svg>
    </div>
  );
};

export const BirthdayCakeCelebration: React.FC<{ className?: string }> = ({ className = 'w-24 h-24' }) => (
  <div className={`relative flex items-center justify-center ${className}`}>
    <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-md">
      <ellipse cx="100" cy="165" rx="70" ry="15" fill="#F1F5F9" stroke="#493A38" strokeWidth="3" />
      <path
        d="M 45 130 C 45 155, 155 155, 155 130 L 155 115 C 155 95, 45 95, 45 115 Z"
        fill="#F9DDE7"
        stroke="#493A38"
        strokeWidth="3.5"
      />
      <ellipse cx="100" cy="115" rx="55" ry="18" fill="#FFF8F2" stroke="#493A38" strokeWidth="3.5" />
      <path
        d="M 45 116 C 52 130, 60 120, 70 128 C 80 122, 90 134, 100 126 C 110 132, 120 120, 130 128 C 140 122, 148 130, 155 116"
        fill="none"
        stroke="#EFA4B8"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <rect x="96" y="70" width="8" height="35" rx="3" fill="#FFE5A3" stroke="#493A38" strokeWidth="2.5" />
      <line x1="100" y1="70" x2="100" y2="62" stroke="#493A38" strokeWidth="2" />
      <g className="animate-gentle-pulse origin-[100px_50px]">
        <circle cx="100" cy="50" r="14" fill="#FFAAA6" opacity="0.3" />
        <path
          d="M 100 38 C 93 48, 95 56, 100 62 C 105 56, 107 48, 100 38 Z"
          fill="#FFB703"
          stroke="#FB8500"
          strokeWidth="1.5"
        />
        <ellipse cx="100" cy="52" rx="3" ry="5" fill="#FFFFFF" />
      </g>
      <g transform="translate(100, 145)">
        <text
          textAnchor="middle"
          fontSize="18"
          fontWeight="bold"
          fill="#E86E8A"
          stroke="#493A38"
          strokeWidth="0.8"
          fontFamily="Fredoka, sans-serif"
        >
          20
        </text>
      </g>
    </svg>
  </div>
);
