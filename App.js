import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import Slide1 from './components/slides/Slide1';
import Slide2 from './components/slides/Slide2';
import Slide3 from './components/slides/Slide3';
import Slide4 from './components/slides/Slide4';
import Slide5 from './components/slides/Slide5';
import Slide6 from './components/slides/Slide6';
import Slide7 from './components/slides/Slide7';

// --- MAIN APP COMPONENT ---
export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7];
  const CurrentSlideComponent = slides[currentSlide];

  const nextSlide = () => setCurrentSlide(prev => Math.min(prev + 1, slides.length - 1));
  const prevSlide = () => setCurrentSlide(prev => Math.max(prev - 1, 0));

  return (
    <div className="min-h-screen bg-gray-950 flex flex-col items-center justify-center p-4 font-sans antialiased">
      
      {/* Slide Container 16:9 Aspect Ratio */}
      <div className="w-full max-w-6xl aspect-[16/9] bg-white rounded-xl shadow-2xl overflow-hidden relative flex flex-col">
        
        {/* Render Current Slide */}
        <div className="flex-1 overflow-hidden transition-opacity duration-300">
          <CurrentSlideComponent />
        </div>

        {/* Navigation Bar overlay */}
        <div className="absolute bottom-4 left-0 right-0 px-8 flex justify-between items-center z-50 pointer-events-none">
          <div className="text-xs font-medium text-gray-400 bg-black/40 px-3 py-1 rounded-full backdrop-blur-md pointer-events-auto">
            {currentSlide + 1} / {slides.length}
          </div>
          
          <div className="flex gap-2 pointer-events-auto">
            <button 
              onClick={prevSlide} 
              disabled={currentSlide === 0}
              className={`p-2 rounded-full backdrop-blur-md transition-all ${currentSlide === 0 ? 'bg-gray-800/20 text-gray-500 cursor-not-allowed' : 'bg-black/50 text-white hover:bg-black/70'}`}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={nextSlide} 
              disabled={currentSlide === slides.length - 1}
              className={`p-2 rounded-full backdrop-blur-md transition-all ${currentSlide === slides.length - 1 ? 'bg-gray-800/20 text-gray-500 cursor-not-allowed' : 'bg-black/50 text-white hover:bg-black/70'}`}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 h-1 bg-gray-800 w-full z-50">
          <div 
            className="h-full bg-emerald-500 transition-all duration-300 ease-out"
            style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          ></div>
        </div>
      </div>
      
      <p className="text-gray-500 text-sm mt-4 flex items-center gap-2">
        <kbd className="bg-gray-800 px-2 py-1 rounded text-xs text-gray-300">Use arrow buttons to navigate</kbd> 
        <span>•</span>
        <span>Interactive elements are active on Slide 3</span>
      </p>

    </div>
  );
}