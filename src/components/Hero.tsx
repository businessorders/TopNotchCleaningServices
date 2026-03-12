'use client';

import React from 'react';
import Link from 'next/link';
import { CheckCircle, Shield, Clock, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { companyInfo } from '@/lib/data';
import { EditableText } from './EditableText';

interface HeroProps {
  title?: string;
  subtitle?: string;
  description?: string;
  showTrustSignals?: boolean;
  backgroundImage?: string;
  size?: 'full' | 'medium' | 'small';
}

export function Hero({
  title,
  subtitle,
  description,
  showTrustSignals = true,
  backgroundImage,
  size = 'full',
}: HeroProps) {
  const defaultTitle = 'Professional Deep Cleaning Services in Dubai';
  const defaultSubtitle = 'Transform Your Space with Expert Care';
  const defaultDescription = `Dubai's most trusted deep cleaning company. From carpets to curtains, sofas to mattresses, we deliver spotless results with eco-friendly products. Book now for a cleaner, healthier home.`;

  const heightClass = {
    full: 'min-h-[600px] lg:min-h-[700px]',
    medium: 'min-h-[400px]',
    small: 'min-h-[300px]',
  };

  return (
    <section
      className={`${heightClass[size]} relative flex items-center overflow-hidden`}
      style={{
        background: backgroundImage
          ? `linear-gradient(rgba(30, 58, 95, 0.85), rgba(30, 58, 95, 0.9)), url(${backgroundImage})`
          : 'linear-gradient(135deg, #1e3a5f 0%, #2d4a6f 50%, #1e3a5f 100%)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/4 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/4 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="text-white text-sm font-medium">
              Rated 4.9/5 by 1,250+ Happy Customers
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 leading-tight">
            <EditableText
              id="hero-title"
              defaultContent={title || defaultTitle}
              as="span"
            />
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-blue-200 font-medium mb-4">
            <EditableText
              id="hero-subtitle"
              defaultContent={subtitle || defaultSubtitle}
              as="span"
            />
          </p>

          {/* Description */}
          <p className="text-lg text-white/80 mb-8 max-w-2xl">
            <EditableText
              id="hero-description"
              defaultContent={description || defaultDescription}
              as="span"
            />
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-8">
            <Button
              asChild
              size="lg"
              className="bg-[#e63946] hover:bg-[#d62828] text-white px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              <Link href="#contact">Book Online</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-[#1e3a5f] px-8 py-6 text-lg font-semibold backdrop-blur-sm"
            >
              <Link href="#services">View Services</Link>
            </Button>
          </div>

          {/* Trust Signals */}
          {showTrustSignals && (
            <div className="flex flex-wrap gap-6 text-white/90">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-sm md:text-base">{companyInfo.guarantee}</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-blue-400" />
                <span className="text-sm md:text-base">{companyInfo.yearsExperience}+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-yellow-400" />
                <span className="text-sm md:text-base">Same Day Service</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      {size === 'full' && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-white/50 rounded-full animate-pulse" />
          </div>
        </div>
      )}
    </section>
  );
}
