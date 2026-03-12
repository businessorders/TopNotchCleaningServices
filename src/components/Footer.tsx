import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { companyInfo, services, serviceAreas } from '@/lib/data';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1e3a5f] text-white">
      {/* Main footer content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-[#1e3a5f] font-bold text-xl">D</span>
              </div>
              <div>
                <span className="text-xl font-bold">DeepClean</span>
                <span className="text-xl font-light text-blue-200"> Dubai</span>
              </div>
            </div>
            <p className="text-blue-100 mb-4 text-sm">
              Dubai&apos;s trusted deep cleaning experts. Professional cleaning services for homes and businesses across the UAE.
            </p>
            <div className="space-y-2 text-sm">
              <a
                href={`tel:${companyInfo.phone}`}
                className="flex items-center gap-2 text-blue-100 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
                {companyInfo.phoneFormatted}
              </a>
              <a
                href={`mailto:${companyInfo.email}`}
                className="flex items-center gap-2 text-blue-100 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                {companyInfo.email}
              </a>
              <div className="flex items-center gap-2 text-blue-100">
                <MapPin className="w-4 h-4" />
                {companyInfo.address}
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-blue-100 hover:text-white transition-colors"
                  >
                    {service.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Service Areas</h3>
            <ul className="space-y-2 text-sm grid grid-cols-2 gap-x-4">
              {serviceAreas.slice(0, 10).map((area) => (
                <li key={area.name}>
                  <span className={area.popular ? 'text-white' : 'text-blue-100'}>
                    {area.name}
                    {area.popular && (
                      <span className="ml-1 text-xs text-yellow-400">★</span>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links & Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/#about" className="text-blue-100 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#reviews" className="text-blue-100 hover:text-white transition-colors">
                  Customer Reviews
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-blue-100 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>

            {/* Social Icons */}
            <h3 className="text-lg font-semibold mt-6 mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="https://facebook.com/deepcleandubai"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/deepcleandubai"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/company/deepcleandubai"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/deepcleandubai"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-blue-100">
            <p>
              © {currentYear} {companyInfo.name}. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
