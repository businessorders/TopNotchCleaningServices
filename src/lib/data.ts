import { CompanyInfo, Service, Review, ServiceArea, FAQ } from '@/types';

// Company Information
export const companyInfo: CompanyInfo = {
  name: 'DeepClean Dubai',
  phone: '+971501234567',
  phoneFormatted: '+971 50 123 4567',
  email: 'info@deepcleandubai.ae',
  address: 'Business Bay, Dubai',
  city: 'Dubai',
  country: 'United Arab Emirates',
  website: 'https://deepcleandubai.ae',
  yearsExperience: 12,
  customersServed: 15000,
  guarantee: '100% Satisfaction Guaranteed',
};

// Service Areas in Dubai
export const serviceAreas: ServiceArea[] = [
  { name: 'Downtown Dubai', popular: true },
  { name: 'Dubai Marina', popular: true },
  { name: 'JBR (Jumeirah Beach Residence)', popular: true },
  { name: 'Palm Jumeirah', popular: true },
  { name: 'Business Bay', popular: true },
  { name: 'Jumeirah', popular: true },
  { name: 'Dubai Hills', popular: false },
  { name: 'Arabian Ranches', popular: false },
  { name: 'The Greens', popular: false },
  { name: 'Dubai Sports City', popular: false },
  { name: 'Al Barsha', popular: false },
  { name: 'JLT (Jumeirah Lake Towers)', popular: false },
  { name: 'Silicon Oasis', popular: false },
  { name: 'Motor City', popular: false },
  { name: 'Dubai Investment Park', popular: false },
  { name: 'Meydan', popular: false },
  { name: 'Damac Hills', popular: false },
  { name: 'Town Square', popular: false },
];

// FAQs for Services
const houseCleaningFAQs: FAQ[] = [
  {
    question: 'How long does a deep house cleaning take?',
    answer: 'A complete deep house cleaning typically takes 4-8 hours depending on the size and condition of your home. Our team works efficiently to ensure thorough cleaning without rushing.',
  },
  {
    question: 'Do I need to be home during the cleaning?',
    answer: 'No, you don\'t need to be present. Many customers provide access instructions, and we complete the cleaning while they\'re at work. We\'re fully insured and vetted for your peace of mind.',
  },
  {
    question: 'What cleaning products do you use?',
    answer: 'We use eco-friendly, hospital-grade cleaning products that are safe for families, pets, and the environment. We can also accommodate specific product requests.',
  },
  {
    question: 'How often should I schedule deep cleaning?',
    answer: 'We recommend deep cleaning every 3-6 months, depending on your lifestyle, pets, and household size. High-traffic homes may benefit from quarterly deep cleaning.',
  },
  {
    question: 'Do you bring your own equipment?',
    answer: 'Yes, our professional teams arrive fully equipped with industry-leading cleaning equipment, including HEPA-filter vacuums, steam cleaners, and specialized tools.',
  },
];

const carpetCleaningFAQs: FAQ[] = [
  {
    question: 'How long does it take for carpets to dry after cleaning?',
    answer: 'Most carpets dry within 4-6 hours with proper ventilation. We use powerful extraction equipment that removes most moisture, speeding up the drying process.',
  },
  {
    question: 'Can you remove all types of stains?',
    answer: 'We can remove most common stains including wine, coffee, pet stains, and ink. Some permanent dyes may be challenging, but we have a high success rate with professional treatments.',
  },
  {
    question: 'Is hot water extraction safe for all carpet types?',
    answer: 'Hot water extraction is safe for most carpets, but we adjust our method based on your carpet\'s material. We assess each carpet before cleaning to use the appropriate technique.',
  },
  {
    question: 'How often should carpets be professionally cleaned?',
    answer: 'For homes with pets or children, we recommend professional cleaning every 6-12 months. Lower-traffic homes can extend this to 12-18 months.',
  },
];

const sofaCleaningFAQs: FAQ[] = [
  {
    question: 'Can you clean all types of sofa fabrics?',
    answer: 'Yes, we clean all fabric types including leather, microfiber, velvet, cotton, and synthetic materials. Our technicians identify the fabric and use appropriate cleaning methods.',
  },
  {
    question: 'How long does sofa cleaning take?',
    answer: 'A standard 3-seater sofa takes about 1-2 hours to clean. Larger sectional sofas may take 2-3 hours. Drying typically takes 4-8 hours.',
  },
  {
    question: 'Will cleaning damage my sofa?',
    answer: 'No, our professional methods are designed to be gentle on fabrics while effectively removing dirt and stains. We test cleaning solutions on hidden areas first.',
  },
  {
    question: 'Do you offer leather sofa cleaning?',
    answer: 'Yes, we have specialized leather cleaning and conditioning services. We clean, condition, and protect leather furniture to maintain its beauty and extend its life.',
  },
];

const curtainsCleaningFAQs: FAQ[] = [
  {
    question: 'Do I need to take down my curtains for cleaning?',
    answer: 'We offer both on-site and off-site cleaning options. For most curtains, we can clean them while hanging. Heavy or delicate curtains may be taken down for specialized cleaning.',
  },
  {
    question: 'Can you clean all types of curtains?',
    answer: 'Yes, we clean all curtain types including silk, velvet, linen, blackout curtains, and sheer fabrics. Each material receives appropriate treatment.',
  },
  {
    question: 'Will my curtains shrink after cleaning?',
    answer: 'We use professional techniques that minimize shrinkage risk. Our technicians assess fabric types and use appropriate methods to preserve your curtains\' dimensions.',
  },
  {
    question: 'How long does curtain cleaning take?',
    answer: 'On-site cleaning typically takes 1-3 hours depending on the number of curtains. Drying takes 2-4 hours with proper ventilation.',
  },
];

const mattressCleaningFAQs: FAQ[] = [
  {
    question: 'How often should mattresses be cleaned?',
    answer: 'We recommend professional mattress cleaning every 6-12 months. If you have allergies or pets, more frequent cleaning may be beneficial.',
  },
  {
    question: 'Can you remove bed bugs from mattresses?',
    answer: 'Our deep cleaning process includes high-temperature treatment that can eliminate bed bugs. For severe infestations, we recommend combining our service with pest control.',
  },
  {
    question: 'Is the cleaning process safe for children?',
    answer: 'Yes, we use eco-friendly, non-toxic cleaning solutions that are safe for children and pets. Our UV sanitation process is chemical-free and highly effective.',
  },
  {
    question: 'How long until I can sleep on my mattress?',
    answer: 'Most mattresses are ready within 4-6 hours after cleaning. We recommend cleaning in the morning so you can sleep on it the same night.',
  },
];

// Services Data
export const services: Service[] = [
  {
    id: 'house-deep-cleaning',
    slug: 'house-deep-cleaning-dubai',
    name: 'House Deep Cleaning Services',
    shortName: 'House Deep Cleaning',
    tagline: 'Complete home transformation with our thorough deep cleaning',
    description: 'Professional house deep cleaning services in Dubai. Our comprehensive cleaning covers every room, surface, and corner of your home. We eliminate dust, allergens, and bacteria for a healthier living environment.',
    targetKeyword: 'home deep cleaning company Dubai',
    metaTitle: 'Home Deep Cleaning Company Dubai | Professional House Cleaning',
    metaDescription: 'Dubai\'s trusted home deep cleaning company. Professional house cleaning services with eco-friendly products. Book now for spotless results!',
    heroImage: '/images/house-cleaning-hero.jpg',
    icon: 'home',
    features: [
      'Complete room-by-room cleaning',
      'Bathroom deep sanitization',
      'Kitchen degreasing & cleaning',
      'Window & mirror cleaning',
      'Floor deep scrubbing',
    ],
    process: [
      { step: 1, title: 'Assessment', description: 'Our team inspects your home to identify areas needing special attention and creates a customized cleaning plan.', icon: 'search' },
      { step: 2, title: 'Pre-Cleaning', description: 'We remove surface dust and debris, preparing all areas for deep cleaning treatment.', icon: 'broom' },
      { step: 3, title: 'Deep Scrub', description: 'Intensive cleaning of all surfaces, fixtures, and hard-to-reach areas using professional equipment.', icon: 'sparkles' },
      { step: 4, title: 'Sanitization', description: 'Application of hospital-grade disinfectants to eliminate 99.9% of bacteria and viruses.', icon: 'shield' },
      { step: 5, title: 'Final Inspection', description: 'Quality check walkthrough to ensure every area meets our high standards.', icon: 'check-circle' },
    ],
    whatsIncluded: [
      'All bedrooms and living areas',
      'Complete bathroom sanitization',
      'Kitchen appliances and surfaces',
      'Interior windows and mirrors',
      'All flooring types',
      'Dusting of all surfaces',
      'Baseboards and door frames',
      'Light fixtures and fans',
      'Inside cabinets (on request)',
      'Balcony cleaning',
    ],
    benefits: [
      'Eliminates 99.9% of bacteria and viruses',
      'Removes deep-seated dirt and allergens',
      'Improves indoor air quality',
      'Extends the life of surfaces and fixtures',
      'Creates a healthier environment for family',
      'Saves you time and energy',
    ],
    beforeAfterImages: [
      { before: '/images/before-living-room.jpg', after: '/images/after-living-room.jpg', alt: 'Living room deep cleaning transformation' },
      { before: '/images/before-kitchen.jpg', after: '/images/after-kitchen.jpg', alt: 'Kitchen deep cleaning transformation' },
      { before: '/images/before-bathroom.jpg', after: '/images/after-bathroom.jpg', alt: 'Bathroom deep cleaning transformation' },
    ],
    faqs: houseCleaningFAQs,
    relatedServices: ['carpets-deep-cleaning-dubai', 'sofa-set-deep-cleaning-dubai', 'bed-mattress-deep-cleaning-dubai'],
  },
  {
    id: 'carpet-deep-cleaning',
    slug: 'carpets-deep-cleaning-dubai',
    name: 'Carpet Deep Cleaning Services',
    shortName: 'Carpet Deep Cleaning',
    tagline: 'Revitalize your carpets with professional deep extraction',
    description: 'Expert carpet deep cleaning services in Dubai. We use advanced hot water extraction technology to remove embedded dirt, stains, and allergens from your carpets, leaving them fresh and revitalized.',
    targetKeyword: 'carpet deep cleaning company Dubai',
    metaTitle: 'Carpet Deep Cleaning Company Dubai | Professional Carpet Cleaning',
    metaDescription: 'Leading carpet deep cleaning company in Dubai. Hot water extraction, stain removal & sanitization. 4-6 hour drying time. Book today!',
    heroImage: '/images/carpet-cleaning-hero.jpg',
    icon: 'grid',
    features: [
      'Hot water extraction technology',
      'Professional stain treatment',
      'Deep allergen removal',
      'Fast drying process',
      'Eco-friendly solutions',
    ],
    process: [
      { step: 1, title: 'Pre-Inspection', description: 'We examine your carpet\'s material, condition, and identify stains requiring special treatment.', icon: 'search' },
      { step: 2, title: 'Pre-Vacuum', description: 'Thorough vacuuming removes loose dirt and debris before deep cleaning begins.', icon: 'wind' },
      { step: 3, title: 'Stain Treatment', description: 'Pre-treatment of spots and stains with specialized solutions for effective removal.', icon: 'droplet' },
      { step: 4, title: 'Hot Water Extraction', description: 'Deep cleaning with pressurized hot water and eco-friendly detergents that remove embedded dirt.', icon: 'flame' },
      { step: 5, title: 'Deodorizing', description: 'Application of freshening treatments for a clean, pleasant scent.', icon: 'flower' },
    ],
    whatsIncluded: [
      'Pre-vacuuming of all carpet areas',
      'Spot and stain treatment',
      'Deep hot water extraction',
      'Sanitization treatment',
      'Carpet grooming',
      'Deodorizing application',
      'Speed drying assistance',
      'Post-cleaning inspection',
    ],
    benefits: [
      'Extends carpet life by years',
      'Removes allergens and dust mites',
      'Eliminates stubborn odors',
      'Restores carpet appearance',
      'Improves indoor air quality',
      'Removes up to 95% of stains',
    ],
    beforeAfterImages: [
      { before: '/images/before-carpet-1.jpg', after: '/images/after-carpet-1.jpg', alt: 'Carpet stain removal transformation' },
      { before: '/images/before-carpet-2.jpg', after: '/images/after-carpet-2.jpg', alt: 'Carpet deep cleaning results' },
    ],
    faqs: carpetCleaningFAQs,
    relatedServices: ['sofa-set-deep-cleaning-dubai', 'curtains-deep-cleaning-dubai', 'house-deep-cleaning-dubai'],
  },
  {
    id: 'sofa-set-deep-cleaning',
    slug: 'sofa-set-deep-cleaning-dubai',
    name: 'Sofa Set Deep Cleaning Services',
    shortName: 'Sofa Deep Cleaning',
    tagline: 'Restore your furniture to its original beauty',
    description: 'Professional sofa set deep cleaning in Dubai. Our expert technicians clean all fabric and leather sofas, removing stains, odors, and allergens while preserving the integrity of your furniture.',
    targetKeyword: 'sofa set deep cleaning company Dubai',
    metaTitle: 'Sofa Set Deep Cleaning Company Dubai | Professional Upholstery Cleaning',
    metaDescription: 'Expert sofa set deep cleaning in Dubai. All fabric types, leather cleaning, stain removal. Same-day service available. Get a free quote!',
    heroImage: '/images/sofa-cleaning-hero.jpg',
    icon: 'sofa',
    features: [
      'All fabric types supported',
      'Leather cleaning & conditioning',
      'Deep stain removal',
      'Dust mite elimination',
      'Fabric protection available',
    ],
    process: [
      { step: 1, title: 'Fabric Analysis', description: 'We identify your sofa\'s material and select the appropriate cleaning method.', icon: 'search' },
      { step: 2, title: 'Pre-Vacuum', description: 'Thorough vacuuming removes loose dirt, dust, and debris from all surfaces.', icon: 'wind' },
      { step: 3, title: 'Pre-Spray', description: 'Application of fabric-specific cleaning solutions to break down dirt and stains.', icon: 'droplet' },
      { step: 4, title: 'Agitation', description: 'Gentle brushing works the cleaning solution deep into the fabric fibers.', icon: 'brush' },
      { step: 5, title: 'Extraction', description: 'Powerful extraction removes dirt, moisture, and cleaning residue.', icon: 'droplets' },
      { step: 6, title: 'Drying', description: 'We accelerate drying with professional air movers for faster results.', icon: 'sun' },
    ],
    whatsIncluded: [
      'All sofa cushions',
      'Armrests and back panels',
      'Under cushion areas',
      'Throw pillows',
      'Fabric conditioning',
      'Spot treatment',
      'Odor neutralization',
      'Final grooming',
    ],
    benefits: [
      'Restores original appearance',
      'Removes tough stains',
      'Eliminates dust mites and allergens',
      'Extends furniture lifespan',
      'Creates healthier seating',
      'Removes pet hair and dander',
    ],
    beforeAfterImages: [
      { before: '/images/before-sofa-1.jpg', after: '/images/after-sofa-1.jpg', alt: 'Fabric sofa cleaning transformation' },
      { before: '/images/before-sofa-2.jpg', after: '/images/after-sofa-2.jpg', alt: 'Leather sofa cleaning results' },
    ],
    faqs: sofaCleaningFAQs,
    relatedServices: ['carpets-deep-cleaning-dubai', 'curtains-deep-cleaning-dubai', 'house-deep-cleaning-dubai'],
  },
  {
    id: 'curtains-deep-cleaning',
    slug: 'curtains-deep-cleaning-dubai',
    name: 'Curtains Deep Cleaning Services',
    shortName: 'Curtains Deep Cleaning',
    tagline: 'Gentle yet thorough cleaning for all curtain types',
    description: 'Specialized curtains deep cleaning services in Dubai. We clean all curtain fabrics including silk, velvet, blackout, and sheer curtains, removing dust, allergens, and odors while preserving fabric quality.',
    targetKeyword: 'curtains cleaning company Dubai',
    metaTitle: 'Curtains Cleaning Company Dubai | Professional Curtain Cleaning',
    metaDescription: 'Dubai\'s trusted curtains cleaning company. All fabric types, on-site & off-site options. Remove dust, allergens & odors. Book now!',
    heroImage: '/images/curtains-cleaning-hero.jpg',
    icon: 'blinds',
    features: [
      'All curtain types',
      'On-site cleaning available',
      'Delicate fabric care',
      'Allergen removal',
      'Color brightening',
    ],
    process: [
      { step: 1, title: 'Removal Options', description: 'We offer on-site cleaning or careful removal for off-site treatment at our facility.', icon: 'settings' },
      { step: 2, title: 'Fabric-Specific Cleaning', description: 'Each curtain type receives appropriate treatment based on material and condition.', icon: 'layers' },
      { step: 3, title: 'Stain Treatment', description: 'Specialized solutions target specific stains without damaging delicate fabrics.', icon: 'droplet' },
      { step: 4, title: 'Gentle Extraction', description: 'Controlled extraction removes dirt and cleaning solutions while preserving fabric.', icon: 'wind' },
      { step: 5, title: 'Re-Hanging', description: 'We carefully re-hang your freshly cleaned curtains for immediate enjoyment.', icon: 'check-circle' },
    ],
    whatsIncluded: [
      'All curtain panels',
      'Valances and swags',
      'Tie-backs and accessories',
      'Dust removal',
      'Stain treatment',
      'Deodorizing',
      'Steam finishing',
      'Re-hanging service',
    ],
    benefits: [
      'Removes allergens and dust',
      'Preserves fabric integrity',
      'Brightens colors',
      'Extends curtain lifespan',
      'Improves indoor air quality',
      'Professional finish',
    ],
    beforeAfterImages: [
      { before: '/images/before-curtains-1.jpg', after: '/images/after-curtains-1.jpg', alt: 'Curtain cleaning transformation' },
      { before: '/images/before-curtains-2.jpg', after: '/images/after-curtains-2.jpg', alt: 'Dusty curtains cleaning results' },
    ],
    faqs: curtainsCleaningFAQs,
    relatedServices: ['sofa-set-deep-cleaning-dubai', 'carpets-deep-cleaning-dubai', 'house-deep-cleaning-dubai'],
  },
  {
    id: 'bed-mattress-deep-cleaning',
    slug: 'bed-mattress-deep-cleaning-dubai',
    name: 'Bed Mattress Deep Cleaning Services',
    shortName: 'Mattress Deep Cleaning',
    tagline: 'Sleep better with a deeply cleaned, sanitized mattress',
    description: 'Professional bed mattress deep cleaning in Dubai. We eliminate dust mites, bacteria, and allergens using UV sanitation and deep extraction methods, giving you a healthier sleep environment.',
    targetKeyword: 'bed mattress deep cleaning Dubai',
    metaTitle: 'Bed Mattress Deep Cleaning Dubai | Professional Mattress Cleaning',
    metaDescription: 'Expert bed mattress deep cleaning in Dubai. UV sanitation, dust mite removal, stain treatment. Sleep healthier tonight. Book now!',
    heroImage: '/images/mattress-cleaning-hero.jpg',
    icon: 'bed',
    features: [
      'UV light sanitation',
      'Dust mite elimination',
      'Stain removal',
      'Odor neutralization',
      'Hypoallergenic treatment',
    ],
    process: [
      { step: 1, title: 'UV Sanitation', description: 'High-powered UV light treatment kills bacteria, viruses, and dust mites on contact.', icon: 'sun' },
      { step: 2, title: 'Deep Extraction', description: 'Powerful vacuum extraction removes dust mites, dead skin, and debris.', icon: 'wind' },
      { step: 3, title: 'Stain Treatment', description: 'Professional treatment for sweat stains, urine spots, and other discoloration.', icon: 'droplet' },
      { step: 4, title: 'Deodorizing', description: 'Application of odor-neutralizing treatments for a fresh, clean scent.', icon: 'flower' },
      { step: 5, title: 'Protection', description: 'Optional protective treatment to guard against future stains and allergens.', icon: 'shield' },
    ],
    whatsIncluded: [
      'Both sides of mattress',
      'Edge and border cleaning',
      'Pillow top treatment',
      'UV sanitation',
      'Deep vacuum extraction',
      'Stain treatment',
      'Odor neutralization',
      'Hypoallergenic spray',
    ],
    benefits: [
      'Eliminates bed bugs and dust mites',
      'Removes allergens for better breathing',
      'Improves sleep quality',
      'Extends mattress lifespan',
      'Removes sweat and body oils',
      'Creates healthier sleep environment',
    ],
    beforeAfterImages: [
      { before: '/images/before-mattress-1.jpg', after: '/images/after-mattress-1.jpg', alt: 'Mattress stain removal transformation' },
      { before: '/images/before-mattress-2.jpg', after: '/images/after-mattress-2.jpg', alt: 'Mattress deep cleaning results' },
    ],
    faqs: mattressCleaningFAQs,
    relatedServices: ['house-deep-cleaning-dubai', 'sofa-set-deep-cleaning-dubai', 'carpets-deep-cleaning-dubai'],
  },
];

// Reviews Data
export const reviews: Review[] = [
  {
    id: '1',
    name: 'Ahmed S.',
    location: 'Dubai Marina',
    rating: 5,
    text: 'Exceptional carpet cleaning! They removed stains I thought were permanent. Highly recommend DeepClean Dubai for anyone looking for quality service.',
    service: 'Carpet Deep Cleaning',
    date: '2024-01-15',
    verified: true,
  },
  {
    id: '2',
    name: 'Fatima M.',
    location: 'JBR',
    rating: 5,
    text: 'Professional sofa cleaning service. My furniture looks brand new. Great value for money! The team was punctual and very thorough.',
    service: 'Sofa Set Deep Cleaning',
    date: '2024-01-10',
    verified: true,
  },
  {
    id: '3',
    name: 'Mohammed K.',
    location: 'Downtown Dubai',
    rating: 5,
    text: 'Best deep cleaning in Dubai. The team was punctual, thorough, and left my apartment spotless. Will definitely use again!',
    service: 'House Deep Cleaning',
    date: '2024-01-08',
    verified: true,
  },
  {
    id: '4',
    name: 'Sarah L.',
    location: 'Palm Jumeirah',
    rating: 5,
    text: 'I was amazed at how clean my curtains look after the service. They carefully handled my expensive silk curtains with great care.',
    service: 'Curtains Deep Cleaning',
    date: '2024-01-05',
    verified: true,
  },
  {
    id: '5',
    name: 'Khalid A.',
    location: 'Business Bay',
    rating: 5,
    text: 'Mattress cleaning was a game changer for my allergies. I can finally sleep comfortably. Professional service from start to finish.',
    service: 'Mattress Deep Cleaning',
    date: '2024-01-03',
    verified: true,
  },
  {
    id: '6',
    name: 'Lisa R.',
    location: 'Jumeirah',
    rating: 5,
    text: 'DeepClean Dubai exceeded my expectations. The house cleaning team was professional, efficient, and my home has never been cleaner!',
    service: 'House Deep Cleaning',
    date: '2023-12-28',
    verified: true,
  },
  {
    id: '7',
    name: 'Omar H.',
    location: 'Dubai Hills',
    rating: 5,
    text: 'We had our carpets and sofas cleaned together. The difference is incredible! Great pricing for the quality of work provided.',
    service: 'Carpet & Sofa Cleaning',
    date: '2023-12-22',
    verified: true,
  },
  {
    id: '8',
    name: 'Nadia P.',
    location: 'Arabian Ranches',
    rating: 5,
    text: 'Finally found a reliable cleaning company in Dubai! They removed pet stains from my carpet that other companies couldn\'t touch.',
    service: 'Carpet Deep Cleaning',
    date: '2023-12-18',
    verified: true,
  },
];

// How It Works Steps (for homepage)
export const howItWorksSteps = [
  {
    step: 1,
    title: 'Book Online',
    description: 'Select your service, choose a convenient time, and book in just a few clicks. Get instant confirmation.',
    icon: 'calendar',
  },
  {
    step: 2,
    title: 'We Arrive',
    description: 'Our professional team arrives on time with all equipment needed. Fully vetted and trained staff.',
    icon: 'truck',
  },
  {
    step: 3,
    title: 'You Relax',
    description: 'Sit back while we transform your space. Enjoy your freshly cleaned home with zero hassle.',
    icon: 'smile',
  },
];

// Helper function to get service by slug
export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(service => service.slug === slug);
}

// Helper function to get related services
export function getRelatedServices(service: Service): Service[] {
  return service.relatedServices
    .map(slug => getServiceBySlug(slug))
    .filter((s): s is Service => s !== undefined);
}

// Navigation Links
export const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '#services', children: services.map(s => ({ label: s.shortName, href: `/services/${s.slug}` })) },
  { label: 'About', href: '#about' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Areas', href: '#areas' },
  { label: 'Contact', href: '#contact' },
];
