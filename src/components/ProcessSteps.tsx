import React from 'react';
import { Calendar, Truck, Smile, Search, Sparkles, Shield, CheckCircle, Wind, Droplet, Flame, Flower, Settings, Layers, Brush, Droplets, Sun, Trash2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}

interface ProcessStepsProps {
  steps: ProcessStep[];
  title?: string;
  subtitle?: string;
  variant?: 'horizontal' | 'vertical';
}

const iconMap: Record<string, React.ElementType> = {
  calendar: Calendar,
  truck: Truck,
  smile: Smile,
  search: Search,
  broom: Trash2,
  'sparkles': Sparkles,
  shield: Shield,
  'check-circle': CheckCircle,
  wind: Wind,
  droplet: Droplet,
  flame: Flame,
  flower: Flower,
  settings: Settings,
  layers: Layers,
  brush: Brush,
  droplets: Droplets,
  sun: Sun,
};

export function ProcessSteps({
  steps,
  title = 'How It Works',
  subtitle = 'Simple, straightforward process',
  variant = 'horizontal',
}: ProcessStepsProps) {
  if (variant === 'vertical') {
    return (
      <div className="space-y-6">
        {steps.map((step, index) => {
          const Icon = iconMap[step.icon] || CheckCircle;
          return (
            <div
              key={step.step}
              className="relative flex gap-4"
            >
              {/* Step number and line */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-[#1e3a5f] text-white flex items-center justify-center font-bold text-lg z-10">
                  {step.step}
                </div>
                {index < steps.length - 1 && (
                  <div className="w-0.5 flex-1 bg-gray-200 mt-2" />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 pb-6">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-[#1e3a5f]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  // Horizontal variant (for homepage)
  return (
    <div>
      {(title || subtitle) && (
        <div className="text-center mb-10">
          {title && <h2 className="text-3xl font-bold text-gray-900 mb-2">{title}</h2>}
          {subtitle && <p className="text-gray-600">{subtitle}</p>}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, index) => {
          const Icon = iconMap[step.icon] || CheckCircle;
          return (
            <div
              key={step.step}
              className="relative text-center"
            >
              {/* Connector line (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] right-0 w-[40%] h-0.5 bg-gradient-to-r from-blue-200 to-transparent" />
              )}

              {/* Icon and step number */}
              <div className="relative inline-block mb-4">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#1e3a5f] to-[#2d4a6f] flex items-center justify-center shadow-lg">
                  <Icon className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#e63946] text-white flex items-center justify-center font-bold text-sm shadow-md">
                  {step.step}
                </div>
              </div>

              {/* Title and description */}
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600 max-w-xs mx-auto">{step.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
