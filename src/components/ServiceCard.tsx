import React from 'react';
import Link from 'next/link';
import { ArrowRight, Home, Grid3X3, Sofa, Blinds, Bed } from 'lucide-react';
import { Service } from '@/types';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  service: Service;
  variant?: 'default' | 'compact' | 'featured';
}

const iconMap: Record<string, React.ElementType> = {
  home: Home,
  grid: Grid3X3,
  sofa: Sofa,
  blinds: Blinds,
  bed: Bed,
};

export function ServiceCard({ service, variant = 'default' }: ServiceCardProps) {
  const Icon = iconMap[service.icon] || Home;

  if (variant === 'compact') {
    return (
      <Link
        href={`/services/${service.slug}`}
        className="group flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all border border-gray-100"
      >
        <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center group-hover:bg-blue-100 transition-colors">
          <Icon className="w-6 h-6 text-[#1e3a5f]" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 group-hover:text-[#1e3a5f] transition-colors">
            {service.shortName}
          </h3>
          <p className="text-sm text-gray-500 line-clamp-1">{service.tagline}</p>
        </div>
        <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#e63946] ml-auto transition-colors" />
      </Link>
    );
  }

  if (variant === 'featured') {
    return (
      <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-blue-50/50">
        <CardContent className="p-0">
          <div className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-[#1e3a5f] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Icon className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#1e3a5f] transition-colors">
                  {service.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{service.tagline}</p>
                <div className="flex flex-wrap gap-2">
                  {service.features.slice(0, 3).map((feature, index) => (
                    <span
                      key={index}
                      className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <Link
            href={`/services/${service.slug}`}
            className="block bg-[#1e3a5f] text-white text-center py-3 font-medium hover:bg-[#2d4a6f] transition-colors"
          >
            Learn More <ArrowRight className="w-4 h-4 inline ml-1" />
          </Link>
        </CardContent>
      </Card>
    );
  }

  // Default variant
  return (
    <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-100">
      <CardContent className="p-0">
        <div className="p-6">
          <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#1e3a5f] transition-colors">
            <Icon className="w-7 h-7 text-[#1e3a5f] group-hover:text-white transition-colors" />
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#1e3a5f] transition-colors">
            {service.shortName}
          </h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">{service.tagline}</p>
          <ul className="space-y-2 mb-4">
            {service.features.slice(0, 3).map((feature, index) => (
              <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <Link
          href={`/services/${service.slug}`}
          className="flex items-center justify-center gap-2 py-3 border-t border-gray-100 text-[#1e3a5f] font-medium hover:bg-gray-50 transition-colors"
        >
          View Service <ArrowRight className="w-4 h-4" />
        </Link>
      </CardContent>
    </Card>
  );
}
