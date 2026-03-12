'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle } from 'lucide-react';
import { Review } from '@/types';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ReviewSliderProps {
  reviews: Review[];
  title?: string;
  subtitle?: string;
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

export function ReviewSlider({
  reviews,
  title = 'What Our Customers Say',
  subtitle = 'Verified reviews from happy customers across Dubai',
  autoPlay = true,
  autoPlayInterval = 5000,
}: ReviewSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  }, [reviews.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  }, [reviews.length]);

  useEffect(() => {
    if (!autoPlay || isPaused) return;

    const interval = setInterval(nextSlide, autoPlayInterval);
    return () => clearInterval(interval);
  }, [autoPlay, isPaused, autoPlayInterval, nextSlide]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={cn(
          'w-4 h-4',
          i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
        )}
      />
    ));
  };

  // Get visible reviews (current, next, and previous)
  const getVisibleReviews = () => {
    const prev = (currentIndex - 1 + reviews.length) % reviews.length;
    const next = (currentIndex + 1) % reviews.length;
    return [reviews[prev], reviews[currentIndex], reviews[next]];
  };

  return (
    <section
      className="py-16 bg-gradient-to-b from-gray-50 to-white"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            {title}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        {/* Review Cards - Desktop */}
        <div className="hidden lg:block relative">
          <div className="flex items-center justify-center gap-6">
            {getVisibleReviews().map((review, index) => {
              const isCenter = index === 1;
              return (
                <Card
                  key={review.id}
                  className={cn(
                    'transition-all duration-500 w-full max-w-md',
                    isCenter
                      ? 'scale-100 opacity-100 shadow-xl z-10'
                      : 'scale-90 opacity-50 blur-[1px]'
                  )}
                >
                  <CardContent className="p-6">
                    {/* Quote icon */}
                    <Quote className="w-8 h-8 text-blue-100 mb-4" />

                    {/* Review text */}
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      &ldquo;{review.text}&rdquo;
                    </p>

                    {/* Rating */}
                    <div className="flex gap-1 mb-4">
                      {renderStars(review.rating)}
                    </div>

                    {/* Author */}
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-gray-900 flex items-center gap-2">
                          {review.name}
                          {review.verified && (
                            <CheckCircle className="w-4 h-4 text-green-500" />
                          )}
                        </div>
                        <div className="text-sm text-gray-500">{review.location}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-gray-400">{review.service}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Review Cards - Mobile */}
        <div className="lg:hidden">
          <Card className="shadow-lg">
            <CardContent className="p-6">
              <Quote className="w-8 h-8 text-blue-100 mb-4" />
              <p className="text-gray-700 mb-6 leading-relaxed">
                &ldquo;{reviews[currentIndex].text}&rdquo;
              </p>
              <div className="flex gap-1 mb-4">
                {renderStars(reviews[currentIndex].rating)}
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-gray-900 flex items-center gap-2">
                    {reviews[currentIndex].name}
                    {reviews[currentIndex].verified && (
                      <CheckCircle className="w-4 h-4 text-green-500" />
                    )}
                  </div>
                  <div className="text-sm text-gray-500">{reviews[currentIndex].location}</div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-gray-400">{reviews[currentIndex].service}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            className="rounded-full border-gray-200 hover:bg-gray-100"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>

          {/* Dots */}
          <div className="flex gap-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  'w-2 h-2 rounded-full transition-all',
                  index === currentIndex
                    ? 'w-6 bg-[#1e3a5f]'
                    : 'bg-gray-300 hover:bg-gray-400'
                )}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="rounded-full border-gray-200 hover:bg-gray-100"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
