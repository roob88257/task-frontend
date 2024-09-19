'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const CustomCarousel = ({ images }) => {
  const scrollRef = useRef(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const updateButtonVisibility = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftButton(scrollLeft > 0);
      setShowRightButton(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      updateButtonVisibility();
    };

    updateButtonVisibility();
    window.addEventListener('resize', handleResize);
    if (scrollRef.current) {
      scrollRef.current.addEventListener('scroll', updateButtonVisibility);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      if (scrollRef.current) {
        scrollRef.current.removeEventListener('scroll', updateButtonVisibility);
      }
    };
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const imageWidth = scrollRef.current.offsetWidth;
      const scrollAmount = direction === 'left' ? -imageWidth : imageWidth;
      
      scrollRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });

      setActiveIndex(prevIndex => {
        const newIndex = direction === 'left' 
          ? Math.max(0, prevIndex - 1)
          : Math.min(images.length - 1, prevIndex + 1);
        return newIndex;
      });
    }
  };

  return (
    <div className="relative overflow-hidden group">
      <div 
        ref={scrollRef} 
        className="flex overflow-x-auto scrollbar-hide space-x-4 py-4 px-8 transition-all duration-300 ease-in-out"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {images.map((src, index) => (
          <div key={index} className="flex-shrink-0 transition-opacity duration-300 ease-in-out">
            <Image 
              src={src} 
              alt={`Product ${index + 1}`} 
              width={200}
              height={200}
              className={`object-cover rounded-lg ${
                index === activeIndex ? 'opacity-100' : 'opacity-50'
              }`}
            />
          </div>
        ))}
      </div>
      <button 
        onClick={() => scroll('left')} 
        className={`absolute left-0 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/75 rounded-r-full p-2 transition-opacity z-20 ${
          showLeftButton ? 'opacity-100' : 'opacity-0'
        } group-hover:opacity-100`}
        aria-label="Scroll left"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button 
        onClick={() => scroll('right')} 
        className={`absolute right-0 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/75 rounded-l-full p-2 transition-opacity z-20 ${
          showRightButton ? 'opacity-100' : 'opacity-0'
        } group-hover:opacity-100`}
        aria-label="Scroll right"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>
    </div>
  );
};

export default CustomCarousel;