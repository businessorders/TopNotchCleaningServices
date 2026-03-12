'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FAQ } from '@/components/FAQ';
import { CTASection } from '@/components/CTASection';
import { ProcessSteps } from '@/components/ProcessSteps';
import { BeforeAfterGallery } from '@/components/BeforeAfterGallery';
import { ServiceCard } from '@/components/ServiceCard';
import { EditModeProvider } from '@/components/EditModeProvider';
import { getServiceBySlug, getRelatedServices, companyInfo } from '@/lib/data';
import { getServicePageSchemas } from '@/lib/schema';
import { Button } from '@/components/ui/button';
import { CheckCircle, Phone, Clock, Shield, Award, Star, ChevronRight, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { notFound } from 'next/navigation';

export default function ServicePage() {
  const params = useParams();
  const slug = params.slug as string;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const relatedServices = getRelatedServices(service);
  const schemas = getServicePageSchemas(service);

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
        <section
          className="min-h-[400px] relative flex items-center overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #1e3a5f 0%, #2d4a6f 50%, #1e3a5f 100%)',
          }}
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-1/2 -right-1/4 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl" />
            <div className="absolute -bottom-1/2 -left-1/4 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 py-16 relative z-10">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-blue-200 mb-6">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <Link href="/#services" className="hover:text-white transition-colors">Services</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white">{service.shortName}</span>
            </nav>

            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                <span className="text-white text-sm font-medium">
                  Dubai&apos;s #1 {service.shortName} Service
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                {service.name} in Dubai
              </h1>

              <p className="text-xl text-blue-200 font-medium mb-4">
                {service.tagline}
              </p>

              <p className="text-lg text-white/80 mb-8 max-w-2xl">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#e63946] hover:bg-[#d62828] text-white px-8 py-6 text-lg font-semibold shadow-lg"
                >
                  <Link href="#contact">Get Free Quote</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-[#1e3a5f] px-8 py-6 text-lg backdrop-blur-sm"
                >
                  <a href={`tel:${companyInfo.phone}`}>
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Features Bar */}
        <section className="bg-white py-6 border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-6 md:gap-12">
              {service.features.slice(0, 5).map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Content Column */}
              <div className="lg:col-span-2 space-y-12">
                {/* What's Included */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">What&apos;s Included</h2>
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <div className="grid md:grid-cols-2 gap-4">
                      {service.whatsIncluded.map((item, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                          </div>
                          <span className="text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Our Process */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Cleaning Process</h2>
                  <ProcessSteps steps={service.process} variant="vertical" />
                </div>

                {/* Before & After Gallery */}
                <BeforeAfterGallery images={service.beforeAfterImages} title="Before & After Results" />

                {/* Benefits */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Benefits of Professional {service.shortName}</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {service.benefits.map((benefit, index) => (
                      <Card key={index} className="border-0 shadow-sm">
                        <CardContent className="p-4 flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                            <CheckCircle className="w-4 h-4 text-blue-600" />
                          </div>
                          <span className="text-gray-700">{benefit}</span>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Quick Quote Card */}
                <Card className="sticky top-28 shadow-lg border-0">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Get a Free Quote</h3>
                    <p className="text-gray-600 mb-4">
                      Request a free, no-obligation quote for {service.shortName.toLowerCase()} in Dubai.
                    </p>
                    <div className="space-y-3">
                      <Button
                        asChild
                        className="w-full bg-[#e63946] hover:bg-[#d62828] text-white"
                      >
                        <Link href="#contact">Request Quote</Link>
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        className="w-full border-[#1e3a5f] text-[#1e3a5f] hover:bg-[#1e3a5f] hover:text-white"
                      >
                        <a href={`tel:${companyInfo.phone}`}>
                          <Phone className="w-4 h-4 mr-2" />
                          {companyInfo.phoneFormatted}
                        </a>
                      </Button>
                    </div>
                    <div className="mt-4 pt-4 border-t text-center">
                      <p className="text-sm text-gray-500">Available 8 AM - 8 PM</p>
                      <p className="text-sm text-gray-500">7 days a week</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Trust Badges */}
                <Card className="shadow-sm border-0">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-gray-900 mb-4">Why Choose Us</h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Shield className="w-5 h-5 text-green-600" />
                        <span className="text-sm text-gray-600">100% Satisfaction Guarantee</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Clock className="w-5 h-5 text-blue-600" />
                        <span className="text-sm text-gray-600">Same-Day Service Available</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Award className="w-5 h-5 text-yellow-600" />
                        <span className="text-sm text-gray-600">{companyInfo.yearsExperience}+ Years Experience</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-purple-600" />
                        <span className="text-sm text-gray-600">Eco-Friendly Products</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Service Areas */}
                <Card className="shadow-sm border-0">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-gray-900 mb-4">Service Areas</h4>
                    <div className="flex flex-wrap gap-2">
                      {['Downtown Dubai', 'Dubai Marina', 'JBR', 'Palm Jumeirah', 'Business Bay', 'Jumeirah'].map((area) => (
                        <span
                          key={area}
                          className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
                        >
                          {area}
                        </span>
                      ))}
                      <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                        + 12 more
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQ faqs={service.faqs} title={`Frequently Asked Questions About ${service.shortName}`} />

        {/* Related Services */}
        {relatedServices.length > 0 && (
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Related Services</h2>
                <p className="text-gray-600">Complete your cleaning with our other professional services</p>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedServices.map((relatedService) => (
                  <ServiceCard key={relatedService.id} service={relatedService} variant="compact" />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <CTASection
          title={`Ready for Professional ${service.shortName}?`}
          subtitle="Book now and experience the DeepClean Dubai difference. Same-day service available."
          variant="centered"
        />

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Book Your {service.shortName}</h2>
                <p className="text-gray-600">Fill out the form below and we&apos;ll get back to you within 30 minutes.</p>
              </div>

              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                        <input
                          type="text"
                          className="w-full h-10 rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                        <input
                          type="tel"
                          className="w-full h-10 rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="+971 XX XXX XXXX"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                      <input
                        type="email"
                        className="w-full h-10 rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Service</label>
                      <input
                        type="text"
                        className="w-full h-10 rounded-md border border-gray-300 px-3 py-2 text-sm bg-gray-50"
                        value={service.name}
                        readOnly
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Additional Details</label>
                      <textarea
                        className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent min-h-[100px]"
                        placeholder="Tell us about your cleaning needs, property size, preferred date..."
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-[#e63946] hover:bg-[#d62828] text-white py-6 text-lg"
                    >
                      Book {service.shortName}
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </EditModeProvider>
  );
}
