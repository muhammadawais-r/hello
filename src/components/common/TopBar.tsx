import React from 'react';
import { Heart, Sparkles } from 'lucide-react';
import { SceneId } from '../../types';

interface TopBarProps {
  currentScene: SceneId;
  onSelectScene: (scene: SceneId) => void;
}

export const TopBar: React.FC<TopBarProps> = ({ currentScene, onSelectScene }) => {
  const sceneSteps: { id: SceneId; label: string }[] = [
    { id: 1, label: '1. Welcome' },
    { id: 2, label: '2. Cute' },
    { id: 3, label: '3. Vitamin' },
    { id: 4, label: '4. Rhyme' },
    { id: 5, label: '5. Surprise' },
    { id: 6, label: '6. Birthday' },
    { id: 7, label: '7. Letter' },
  ];

  const activeNumber = currentScene === 'detour' ? 5 : currentScene;

  return (
    <header className="sticky top-0 z-30 w-full backdrop-blur-md bg-[#FFF8F2]/90 border-b border-[#F5E6DD]">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-4 sm:gap-8 px-4 sm:px-6 py-3.5">
        {/* Zone 1: Brand Wordmark (Single text element) */}
        <button
          onClick={() => onSelectScene(1)}
          className="text-base sm:text-lg font-display font-bold tracking-tight text-[#493A38] hover:text-[#E86E8A] transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 cursor-pointer text-left"
        >
          <span>Nivahh&apos;s 20th</span>
          <Heart className="w-4 h-4 fill-[#E86E8A] text-[#E86E8A] inline-block" />
        </button>

        {/* Zone 2: Navigation Links / Scene Steps */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-6 text-xs sm:text-sm font-medium text-[#7A645F] overflow-x-auto py-1">
          {sceneSteps.map(step => {
            const isActive = activeNumber === step.id;
            const isCompleted = typeof activeNumber === 'number' && activeNumber > (step.id as number);

            return (
              <button
                key={step.id}
                onClick={() => onSelectScene(step.id)}
                className={`whitespace-nowrap shrink-0 transition-colors py-1 px-1 cursor-pointer ${
                  isActive
                    ? 'text-[#E86E8A] font-bold border-b-2 border-[#E86E8A]'
                    : isCompleted
                    ? 'text-[#493A38] hover:text-[#E86E8A]'
                    : 'text-[#A68F89] hover:text-[#7A645F]'
                }`}
              >
                {step.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: 1 Primary Action / Celebratory Badge */}
        <div className="flex items-center gap-2 shrink-0">
          <div className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#D95B78] bg-[#FFF0F5] border border-[#FADCE6] rounded-xl shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#E86E8A]" />
            <span className="hidden sm:inline">Oct 22, 2026</span>
            <span className="sm:hidden">20th 🎂</span>
          </div>
        </div>
      </div>
    </header>
  );
};
