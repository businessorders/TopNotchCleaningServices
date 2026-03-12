'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowRightLeft } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface BeforeAfterImage {
  before: string;
  after: string;
  alt: string;
}

interface BeforeAfterGalleryProps {
  images: BeforeAfterImage[];
  title?: string;
}

export function BeforeAfterGallery({ images, title = 'Before & After Results' }: BeforeAfterGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAfter, setShowAfter] = useState(true);

  const currentImage = images[currentIndex];

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">{title}</h2>
          <p className="text-gray-600">See the dramatic transformations we achieve</p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Image Container */}
          <div className="relative">
            {/* Image Display */}
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-gray-100 shadow-xl">
              {/* Placeholder images for demo - in production, these would be actual images */}
              <div className="absolute inset-0">
                {showAfter ? (
                  <div className="w-full h-full bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl mb-4">✨</div>
                      <div className="text-xl font-semibold text-green-600">AFTER</div>
                      <div className="text-gray-500 mt-2">Clean & Fresh</div>
                    </div>
                  </div>
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl mb-4">🧹</div>
                      <div className="text-xl font-semibold text-gray-600">BEFORE</div>
                      <div className="text-gray-500 mt-2">Needs Cleaning</div>
                    </div>
                  </div>
                )}
              </div>

              {/* Toggle Button */}
              <button
                onClick={() => setShowAfter(!showAfter)}
                className="absolute inset-0 w-full h-full cursor-pointer group"
              >
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-md flex items-center gap-2 group-hover:bg-white transition-colors">
                  <ArrowRightLeft className="w-4 h-4 text-gray-700" />
                  <span className="text-sm font-medium text-gray-700">
                    Click to see {showAfter ? 'Before' : 'After'}
                  </span>
                </div>
              </button>

              {/* Label */}
              <div
                className={cn(
                  'absolute bottom-4 right-4 rounded-lg px-4 py-2 shadow-md font-semibold',
                  showAfter
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-700 text-white'
                )}
              >
                {showAfter ? 'AFTER' : 'BEFORE'}
              </div>
            </div>

            {/* Navigation Arrows */}
            {images.length > 1 && (
              <>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full shadow-lg"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full shadow-lg"
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </>
            )}
          </div>

          {/* Dots Navigation */}
          {images.length > 1 && (
            <div className="flex justify-center gap-2 mt-6">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={cn(
                    'w-2 h-2 rounded-full transition-all',
                    index === currentIndex
                      ? 'w-6 bg-[#1e3a5f]'
                      : 'bg-gray-300 hover:bg-gray-400'
                  )}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          )}

          {/* Caption */}
          <p className="text-center text-gray-500 mt-4">{currentImage?.alt}</p>
        </div>
      </div>
    </section>
  );
}
