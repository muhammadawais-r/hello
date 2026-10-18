/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { SceneId } from './types';
import { FloatingBackgroundDecorations } from './components/common/CuteDecorations';
import { TopBar } from './components/common/TopBar';

import { Scene1Hello } from './components/scenes/Scene1Hello';
import { Scene2Cute } from './components/scenes/Scene2Cute';
import { Scene3Vitamin } from './components/scenes/Scene3Vitamin';
import { Scene4Mine } from './components/scenes/Scene4Mine';
import { Scene5Surprise } from './components/scenes/Scene5Surprise';
import { Scene5Detour } from './components/scenes/Scene5Detour';
import { Scene6Birthday } from './components/scenes/Scene6Birthday';
import { Scene7Letter } from './components/scenes/Scene7Letter';

export default function App() {
  const [currentScene, setCurrentScene] = useState<SceneId>(1);
  const [noClickCount, setNoClickCount] = useState<number>(0);

  // Background decoration theme depending on scene
  const getThemeForScene = (): 'pink' | 'lavender' | 'crimson' | 'ivory' => {
    if (currentScene === 'detour') return 'crimson';
    if (currentScene === 4) return 'lavender';
    if (currentScene === 7) return 'ivory';
    return 'pink';
  };

  const handleNextFromScene = (nextScene: SceneId) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentScene(nextScene);
  };

  const handleNoClickInSurprise = () => {
    setNoClickCount(prev => Math.min(prev + 1, 5));
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentScene('detour');
  };

  const handleTryAgainFromDetour = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentScene(5);
  };

  const handleYesClickInSurprise = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentScene(6);
  };

  const handleReplayBirthdayVideo = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentScene(6);
  };

  const handleRestartStory = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setNoClickCount(0);
    setCurrentScene(1);
  };

  return (
    <div className="min-h-screen bg-[#FFF8F2] text-[#493A38] flex flex-col relative selection:bg-pink-200 selection:text-pink-900 transition-colors duration-500">
        {/* Floating background ambient elements */}
        <FloatingBackgroundDecorations variant={getThemeForScene()} />

        {/* Top Navigation Bar with strict 3-zone contract */}
        <TopBar
          currentScene={currentScene}
          onSelectScene={scene => handleNextFromScene(scene)}
        />

        {/* Main Content Area */}
        <main className="flex-1 flex flex-col justify-center items-center py-4 sm:py-8 z-10 w-full max-w-6xl mx-auto px-4">
          {currentScene === 1 && (
            <Scene1Hello onNext={() => handleNextFromScene(2)} />
          )}

          {currentScene === 2 && (
            <Scene2Cute onNext={() => handleNextFromScene(3)} />
          )}

          {currentScene === 3 && (
            <Scene3Vitamin onNext={() => handleNextFromScene(4)} />
          )}

          {currentScene === 4 && (
            <Scene4Mine onNext={() => handleNextFromScene(5)} />
          )}

          {currentScene === 5 && (
            <Scene5Surprise
              noClickCount={noClickCount}
              onYes={handleYesClickInSurprise}
              onNo={handleNoClickInSurprise}
            />
          )}

          {currentScene === 'detour' && (
            <Scene5Detour
              noClickCount={noClickCount}
              onTryAgain={handleTryAgainFromDetour}
            />
          )}

          {currentScene === 6 && (
            <Scene6Birthday onOpenLetter={() => handleNextFromScene(7)} />
          )}

          {currentScene === 7 && (
            <Scene7Letter
              onReplayBirthdayVideo={handleReplayBirthdayVideo}
              onRestartStory={handleRestartStory}
            />
          )}
        </main>


        {/* Quiet footer with anti-slop restraint */}
        <footer className="w-full py-4 text-center text-xs text-[#A68F89] z-10 border-t border-[#F5E6DD]/60">
          <p>
            Made with love for Nivahh&apos;s 20th Birthday &bull; October 22, 2026
          </p>
        </footer>
      </div>
  );
}
