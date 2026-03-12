'use client';

import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { ServiceCard } from '@/components/ServiceCard';
import { ReviewSlider } from '@/components/ReviewSlider';
import { ProcessSteps } from '@/components/ProcessSteps';
import { CTASection } from '@/components/CTASection';
import { EditModeProvider } from '@/components/EditModeProvider';
import { services, reviews, howItWorksSteps, serviceAreas, companyInfo } from '@/lib/data';
import { getHomepageSchemas } from '@/lib/schema';
import {
  CheckCircle,
  Shield,
  Clock,
  Award,
  Users,
  Sparkles,
  Phone,
  MapPin,
  Star,
  ChevronRight
} from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export default function Home() {
  const schemas = getHomepageSchemas();

  return (
    <EditModeProvider>
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemas),
        }}
      />

      <Header />

      <main className="pt-[88px]">
        {/* Hero Section */}
        <Hero
          title="Professional Deep Cleaning Services in Dubai"
          subtitle="Transform Your Space with Expert Care"
          description="Dubai's most trusted deep cleaning company. From carpets to curtains, sofas to mattresses, we deliver spotless results with eco-friendly products. Book now for a cleaner, healthier home."
          showTrustSignals={true}
          size="full"
        />

        {/* Trust Indicators Bar */}
        <section className="bg-white py-8 border-b">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="flex flex-col items-center gap-2">
                <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center">
                  <Users className="w-7 h-7 text-green-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">15,000+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center">
                  <Award className="w-7 h-7 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">{companyInfo.yearsExperience}+ Years</div>
                <div className="text-sm text-gray-600">Experience</div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-14 h-14 rounded-full bg-yellow-50 flex items-center justify-center">
                  <Star className="w-7 h-7 text-yellow-500 fill-yellow-500" />
                </div>
                <div className="text-2xl font-bold text-gray-900">4.9/5</div>
                <div className="text-sm text-gray-600">Average Rating</div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-14 h-14 rounded-full bg-purple-50 flex items-center justify-center">
                  <Shield className="w-7 h-7 text-purple-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">100%</div>
                <div className="text-sm text-gray-600">Satisfaction</div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-4 py-2 mb-4">
                <Sparkles className="w-4 h-4 text-[#1e3a5f]" />
                <span className="text-sm font-medium text-[#1e3a5f]">Our Services</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Professional Deep Cleaning Services
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Specialized deep cleaning solutions for every corner of your home. Each service is tailored to deliver exceptional results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <ServiceCard key={service.id} service={service} variant="default" />
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <ProcessSteps
              steps={howItWorksSteps}
              title="How It Works"
              subtitle="Get your deep cleaning done in 3 simple steps"
              variant="horizontal"
            />
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section id="about" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div>
                <div className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-4 py-2 mb-4">
                  <CheckCircle className="w-4 h-4 text-[#1e3a5f]" />
                  <span className="text-sm font-medium text-[#1e3a5f]">Why Choose Us</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Dubai&apos;s Trusted Deep Cleaning Experts
                </h2>
                <p className="text-gray-600 mb-8 text-lg">
                  With over {companyInfo.yearsExperience} years of experience serving Dubai residents, we&apos;ve built our reputation on quality, reliability, and customer satisfaction. Our professional team uses eco-friendly products and advanced equipment to deliver exceptional results every time.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Eco-Friendly Products</h3>
                      <p className="text-gray-600">Safe for your family, pets, and the environment. We use hospital-grade, non-toxic cleaning solutions.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Same-Day Service</h3>
                      <p className="text-gray-600">Need cleaning urgently? We offer same-day appointments for most services across Dubai.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
                      <Shield className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">100% Satisfaction Guarantee</h3>
                      <p className="text-gray-600">Not happy with the results? We&apos;ll re-clean for free. Your satisfaction is our priority.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-yellow-100 flex items-center justify-center flex-shrink-0">
                      <Award className="w-5 h-5 text-yellow-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Trained Professionals</h3>
                      <p className="text-gray-600">Our team is fully vetted, trained, and equipped with industry-leading equipment.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Image/Stats Card */}
              <div className="relative">
                <div className="bg-gradient-to-br from-[#1e3a5f] to-[#2d4a6f] rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-6">Our Track Record</h3>
                  <div className="space-y-6">
                    <div className="flex items-center justify-between border-b border-white/20 pb-4">
                      <span className="text-blue-200">Happy Customers</span>
                      <span className="text-2xl font-bold">15,000+</span>
                    </div>
                    <div className="flex items-center justify-between border-b border-white/20 pb-4">
                      <span className="text-blue-200">Years of Experience</span>
                      <span className="text-2xl font-bold">{companyInfo.yearsExperience}+</span>
                    </div>
                    <div className="flex items-center justify-between border-b border-white/20 pb-4">
                      <span className="text-blue-200">Properties Cleaned</span>
                      <span className="text-2xl font-bold">20,000+</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-blue-200">Customer Satisfaction</span>
                      <span className="text-2xl font-bold">99%</span>
                    </div>
                  </div>
                  <div className="mt-8 pt-6 border-t border-white/20">
                    <div className="flex items-center gap-3">
                      <div className="flex -space-x-2">
                        {[1, 2, 3, 4].map((i) => (
                          <div key={i} className="w-10 h-10 rounded-full bg-white/20 border-2 border-white flex items-center justify-center text-sm font-medium">
                            {['A', 'S', 'M', 'K'][i - 1]}
                          </div>
                        ))}
                      </div>
                      <div>
                        <div className="font-semibold">Join 15,000+ Happy Customers</div>
                        <div className="text-sm text-blue-200">Book your cleaning today</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section id="reviews">
          <ReviewSlider
            reviews={reviews}
            title="What Our Customers Say"
            subtitle="Verified reviews from happy customers across Dubai"
            autoPlay={true}
            autoPlayInterval={5000}
          />
        </section>

        {/* Service Areas Section */}
        <section id="areas" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-4 py-2 mb-4">
                <MapPin className="w-4 h-4 text-[#1e3a5f]" />
                <span className="text-sm font-medium text-[#1e3a5f]">Service Areas</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                We Serve All of Dubai
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Our professional deep cleaning teams are available throughout Dubai and surrounding areas. Same-day service available in most locations.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {serviceAreas.map((area) => (
                <div
                  key={area.name}
                  className="bg-gray-50 rounded-lg p-4 text-center hover:bg-blue-50 hover:border-blue-200 border border-transparent transition-all cursor-pointer"
                >
                  <div className="font-medium text-gray-900">{area.name}</div>
                  {area.popular && (
                    <span className="text-xs text-yellow-600 bg-yellow-50 px-2 py-0.5 rounded-full mt-1 inline-block">
                      Popular
                    </span>
                  )}
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <p className="text-gray-600">
                Don&apos;t see your area?{' '}
                <a href={`tel:${companyInfo.phone}`} className="text-[#1e3a5f] font-medium hover:underline">
                  Call us at {companyInfo.phoneFormatted}
                </a>
                {' '}to check availability.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Split Section */}
        <CTASection variant="split" />

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Get a Free Quote</h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below and we&apos;ll get back to you within 30 minutes during business hours.
                </p>

                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" placeholder="Your name" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" placeholder="+971 XX XXX XXXX" className="mt-1" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="your@email.com" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="service">Service Required</Label>
                    <select
                      id="service"
                      className="mt-1 w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service.id} value={service.id}>
                          {service.shortName}
                        </option>
                      ))}
                      <option value="multiple">Multiple Services</option>
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="message">Additional Details</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your cleaning needs..."
                      className="mt-1 min-h-[100px]"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-[#e63946] hover:bg-[#d62828] text-white py-6 text-lg"
                  >
                    Request Free Quote
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </Button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="lg:pl-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>

                <div className="space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                          <Phone className="w-6 h-6 text-[#1e3a5f]" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                          <a
                            href={`tel:${companyInfo.phone}`}
                            className="text-lg text-[#1e3a5f] hover:underline"
                          >
                            {companyInfo.phoneFormatted}
                          </a>
                          <p className="text-sm text-gray-500 mt-1">Available 8 AM - 8 PM, 7 days a week</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-6 h-6 text-green-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">Location</h4>
                          <p className="text-gray-600">{companyInfo.address}</p>
                          <p className="text-gray-600">{companyInfo.city}, {companyInfo.country}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Quick Links */}
                <div className="mt-8">
                  <h4 className="font-semibold text-gray-900 mb-4">Quick Links</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {services.slice(0, 4).map((service) => (
                      <Link
                        key={service.id}
                        href={`/services/${service.slug}`}
                        className="flex items-center gap-2 text-gray-600 hover:text-[#1e3a5f] transition-colors"
                      >
                        <ChevronRight className="w-4 h-4" />
                        {service.shortName}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Guarantee Badge */}
                <div className="mt-8 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center">
                      <Shield className="w-7 h-7 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">100% Satisfaction Guarantee</h4>
                      <p className="text-gray-600 text-sm">Not happy? We&apos;ll re-clean for free!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </EditModeProvider>
  );
}
