import React from 'react';
import Link from 'next/link';
import { Phone, Calendar, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { companyInfo } from '@/lib/data';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  variant?: 'default' | 'centered' | 'split';
}

export function CTASection({
  title = 'Ready for a Cleaner Home?',
  subtitle = 'Book your deep cleaning service today and experience the DeepClean Dubai difference.',
  primaryButtonText = 'Book Online',
  primaryButtonHref = '#contact',
  secondaryButtonText = 'Call Us Now',
  secondaryButtonHref = `tel:${companyInfo.phone}`,
  variant = 'default',
}: CTASectionProps) {
  if (variant === 'split') {
    return (
      <section className="py-0">
        <div className="grid md:grid-cols-2">
          {/* Book Online */}
          <div className="bg-[#1e3a5f] py-16 px-6 text-center">
            <Calendar className="w-12 h-12 text-white/80 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">Book Online</h3>
            <p className="text-blue-200 mb-6 max-w-md mx-auto">
              Schedule your cleaning in minutes. Choose your service, date, and time.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-[#e63946] hover:bg-[#d62828] text-white px-8"
            >
              <Link href={primaryButtonHref}>
                {primaryButtonText} <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>

          {/* Call Us */}
          <div className="bg-[#2d4a6f] py-16 px-6 text-center">
            <Phone className="w-12 h-12 text-white/80 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">Call Us Now</h3>
            <p className="text-blue-200 mb-6 max-w-md mx-auto">
              Prefer to talk? Our friendly team is ready to help you with any questions.
            </p>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white text-[#1e3a5f] hover:bg-gray-100 px-8 border-0"
            >
              <a href={secondaryButtonHref}>
                <Phone className="w-4 h-4 mr-2" />
                {companyInfo.phoneFormatted}
              </a>
            </Button>
          </div>
        </div>
      </section>
    );
  }

  if (variant === 'centered') {
    return (
      <section className="py-20 bg-gradient-to-r from-[#1e3a5f] to-[#2d4a6f] relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-1/2 -right-1/4 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-1/2 -left-1/4 w-[300px] h-[300px] bg-white/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">{subtitle}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-[#e63946] hover:bg-[#d62828] text-white px-8 py-6 text-lg"
            >
              <Link href={primaryButtonHref}>
                {primaryButtonText} <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-[#1e3a5f] px-8 py-6 text-lg"
            >
              <a href={secondaryButtonHref}>
                <Phone className="w-5 h-5 mr-2" />
                {secondaryButtonText}
              </a>
            </Button>
          </div>
        </div>
      </section>
    );
  }

  // Default variant
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-[#1e3a5f] to-[#2d4a6f] rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-1/2 -right-1/4 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl" />
          </div>

          <div className="text-center md:text-left relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{title}</h2>
            <p className="text-blue-100 max-w-xl">{subtitle}</p>
          </div>

          <div className="flex flex-wrap gap-4 relative z-10">
            <Button
              asChild
              size="lg"
              className="bg-[#e63946] hover:bg-[#d62828] text-white px-6"
            >
              <Link href={primaryButtonHref}>
                {primaryButtonText} <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-[#1e3a5f] px-6"
            >
              <a href={secondaryButtonHref}>
                <Phone className="w-4 h-4 mr-2" />
                {companyInfo.phoneFormatted}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
