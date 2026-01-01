'use client';

import { useState } from 'react';
import { HiPause, HiPlay } from 'react-icons/hi';

export default function MarqueeSection() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="relative py-8 md:py-12 overflow-hidden my-8 md:my-12">
      {/* Background overlay - full width */}
      <div className="absolute inset-0 bg-black"></div>
      
      <div className="relative z-10 max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <div
            className={`flex whitespace-nowrap ${isPaused ? '' : 'animate-marquee'}`}
            style={{
              animation: isPaused ? 'none' : 'marquee 19s linear infinite',
            }}
          >
            {/* Multiple copies for seamless loop */}
            {[...Array(6)].map((_, i) => (
              <div key={i} className="flex items-center mx-4 sm:mx-6 md:mx-8 flex-shrink-0">
                <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white">
                  Unlock Your Full Potential
                </span>
                <div className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 mx-4 sm:mx-6 md:mx-8 rounded-full flex-shrink-0 bg-white" />
              </div>
            ))}
          </div>

          {/* Pause/Play Button */}
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors z-10"
            aria-label={isPaused ? 'Play Marquee' : 'Pause Marquee'}
            aria-pressed={!isPaused}
          >
            {isPaused ? (
              <HiPlay className="h-5 w-5 text-white" />
            ) : (
              <HiPause className="h-5 w-5 text-white" />
            )}
          </button>
        </div>
      </div>
    </section>
  );
}

