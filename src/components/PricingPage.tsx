
import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import BookingDialog from './BookingDialog';
import { Instagram, Mail, FileText, Calendar } from 'lucide-react';

const PricingPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('social-media');
  const [currency, setCurrency] = useState('INR');
  const [selectedPackage, setSelectedPackage] = useState<{name: string, category: string} | null>(null);

  const categories = [
    { id: 'social-media', name: 'Social Media Design', icon: Instagram },
    { id: 'branding', name: 'Branding & Business', icon: FileText },
    { id: 'youtube', name: 'YouTube & Creator', icon: () => (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.54 6.42C22.4212 5.94541 22.1793 5.51057 21.8387 5.15941C21.4981 4.80824 21.0708 4.55318 20.6 4.42C18.88 4 12 4 12 4C12 4 5.12 4 3.4 4.46C2.92925 4.59318 2.50195 4.84824 2.16135 5.19941C1.82075 5.55057 1.57878 5.98541 1.46 6.46C1.14522 8.20556 0.991243 9.97631 1 11.75C0.988852 13.537 1.14283 15.3213 1.46 17.08C1.59096 17.5398 1.8333 17.9581 2.17322 18.2945C2.51314 18.6308 2.93894 18.8738 3.4 19C5.12 19.46 12 19.46 12 19.46C12 19.46 18.88 19.46 20.6 19C21.0708 18.8668 21.4981 18.6118 21.8387 18.2606C22.1793 17.9094 22.4212 17.4746 22.54 17C22.8524 15.2676 23.0063 13.5103 23 11.75C23.0112 9.96295 22.8572 8.1787 22.54 6.42Z" fill="currentColor" />
        <path d="M9.75 15.02L15.5 11.75L9.75 8.48001V15.02Z" fill="white" />
      </svg>
    ) },
    { id: 'retainers', name: 'Monthly Retainers', icon: Calendar }
  ];

  const packageData = {
    'social-media': [
      {
        title: "Basic",
        priceINR: 499,
        features: [
          "3 Instagram posts (static)",
          "2 revisions included",
          "Standard delivery (48 hrs)"
        ]
      },
      {
        title: "Standard",
        priceINR: 999,
        features: [
          "5 posts",
          "1 carousel (multi-slide)",
          "2 revisions included",
          "Fast delivery (36 hrs)"
        ]
      },
      {
        title: "Pro",
        priceINR: 1999,
        features: [
          "10 posts",
          "3 carousels",
          "Highlight covers",
          "Priority delivery (24 hrs)"
        ],
        popular: true
      }
    ],
    'branding': [
      {
        title: "Logo Only",
        priceINR: 1499,
        features: [
          "2 logo concepts",
          "2 revisions included",
          "Source files provided",
          "Delivery in 3-4 days"
        ]
      },
      {
        title: "Starter",
        priceINR: 2499,
        features: [
          "Logo package",
          "Business card",
          "Letterhead design",
          "3 revisions included",
          "Delivery in 5-7 days"
        ]
      },
      {
        title: "Complete Brand Kit",
        priceINR: 4499,
        features: [
          "Logo package",
          "Business cards & Letterhead",
          "Poster design",
          "Social media templates",
          "Mini brand guide",
          "Unlimited revisions",
          "Delivery in 10-14 days"
        ],
        popular: true
      }
    ],
    'youtube': [
      {
        title: "Basic",
        priceINR: 499,
        features: [
          "2 thumbnails",
          "1 revision included",
          "Standard delivery (48 hrs)"
        ]
      },
      {
        title: "Standard",
        priceINR: 1499,
        features: [
          "5 thumbnails",
          "Channel art",
          "2 revisions included",
          "Delivery in 3-4 days"
        ]
      },
      {
        title: "Pro Creator",
        priceINR: 2999,
        features: [
          "10 thumbnails",
          "Channel art",
          "Reels/Shorts covers",
          "3 revisions included",
          "Priority delivery (48 hrs)"
        ],
        popular: true
      }
    ],
    'retainers': [
      {
        title: "Lite",
        priceINR: 2999,
        period: "/month",
        features: [
          "10 designs/month (any mix)",
          "Basic support",
          "3-day turnaround"
        ]
      },
      {
        title: "Creative",
        priceINR: 5999,
        period: "/month",
        features: [
          "20 designs/month",
          "2 thumbnails",
          "2 posters",
          "Priority support",
          "2-day turnaround"
        ]
      },
      {
        title: "Content Partner",
        priceINR: 8999,
        period: "/month",
        features: [
          "30+ custom designs",
          "Full brand support",
          "Strategy sessions",
          "VIP support",
          "1-day turnaround"
        ],
        popular: true
      }
    ]
  };

  const formatPrice = (priceINR: number) => {
    if (currency === 'USD') {
      const priceUSD = Math.round(priceINR / 42.92);
      return `$${priceUSD}`;
    }
    return `₹${priceINR}`;
  };

  const handleBookNow = (packageTitle: string, categoryName: string) => {
    setSelectedPackage({ name: packageTitle, category: categoryName });
  };

  const currentPackages = packageData[selectedCategory as keyof typeof packageData];
  const selectedCategoryData = categories.find(cat => cat.id === selectedCategory);

  return (
    <>
      <Navbar />
      <section className="section-padding bg-soft-white pt-24">
        <div className="container-padding max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pricing & <span className="text-warm-yellow">Packages</span>
            </h2>
            <p className="text-charcoal/80 max-w-2xl mx-auto">
              Professional design solutions tailored to your unique brand needs and budget.
            </p>
          </div>

          {/* Currency Toggle */}
          <div className="flex justify-center mb-12">
            <div className="bg-charcoal/5 p-1 rounded-lg">
              <button
                onClick={() => setCurrency('INR')}
                className={`px-4 py-2 rounded-md transition-colors ${
                  currency === 'INR' 
                    ? 'bg-warm-yellow text-charcoal' 
                    : 'text-charcoal/70 hover:text-charcoal'
                }`}
              >
                ₹ INR
              </button>
              <button
                onClick={() => setCurrency('USD')}
                className={`px-4 py-2 rounded-md transition-colors ${
                  currency === 'USD' 
                    ? 'bg-warm-yellow text-charcoal' 
                    : 'text-charcoal/70 hover:text-charcoal'
                }`}
              >
                $ USD
              </button>
            </div>
          </div>

          {/* Category Selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`p-6 rounded-lg border transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-warm-yellow border-warm-yellow text-charcoal'
                      : 'bg-white border-charcoal/10 text-charcoal hover:border-warm-yellow/50'
                  }`}
                >
                  <div className="flex flex-col items-center text-center">
                    <IconComponent />
                    <h3 className="mt-3 font-medium">{category.name}</h3>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Selected Category Title */}
          {selectedCategoryData && (
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold">{selectedCategoryData.name}</h3>
            </div>
          )}

          {/* Packages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {currentPackages.map((pkg, index) => (
              <Card 
                key={index}
                className={`overflow-hidden transition-all duration-300 hover:shadow-xl flex flex-col ${
                  pkg.popular 
                    ? 'border-warm-yellow shadow-lg transform hover:-translate-y-1' 
                    : 'border-soft-white/20 shadow hover:border-warm-yellow/50'
                }`}
              >
                {pkg.popular && (
                  <div className="bg-warm-yellow text-charcoal py-1 px-3 text-xs font-medium absolute right-0 top-4 rounded-l-md">
                    Most Popular
                  </div>
                )}
                
                <CardHeader className={`pb-0 ${pkg.popular ? 'bg-warm-yellow/10' : ''}`}>
                  <CardTitle className="text-xl">{pkg.title}</CardTitle>
                  <div className="mt-4 mb-2">
                    <span className="text-3xl font-bold">{formatPrice(pkg.priceINR)}</span>
                    <span className="text-sm text-charcoal/60">{pkg.period || ""}</span>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-6 flex flex-col flex-grow">
                  <ul className="space-y-3 mb-8 flex-grow">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <div className="h-2 w-2 bg-warm-yellow rounded-full mt-2 mr-2"></div>
                        <span className="text-charcoal/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    onClick={() => handleBookNow(pkg.title, selectedCategoryData?.name || '')}
                    className={`w-full transition-colors ${
                      pkg.popular 
                        ? 'bg-warm-yellow text-charcoal hover:bg-charcoal hover:text-soft-white' 
                        : 'bg-charcoal text-soft-white hover:bg-warm-yellow hover:text-charcoal'
                    }`}
                  >
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Add-ons Section with currency conversion */}
          {selectedCategory === 'social-media' && (
            <div className="mt-8 bg-charcoal/5 rounded-lg p-6 mb-12">
              <h4 className="font-medium mb-3">Add-ons:</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="h-1.5 w-1.5 bg-warm-yellow rounded-full mr-2"></div>
                  <span>Revisions beyond 2 → {formatPrice(100)} each</span>
                </li>
                <li className="flex items-center">
                  <div className="h-1.5 w-1.5 bg-warm-yellow rounded-full mr-2"></div>
                  <span>Reels covers (per piece) → {formatPrice(100)}</span>
                </li>
                <li className="flex items-center">
                  <div className="h-1.5 w-1.5 bg-warm-yellow rounded-full mr-2"></div>
                  <span>Brand style guide → {formatPrice(499)}</span>
                </li>
              </ul>
            </div>
          )}

          {selectedCategory === 'branding' && (
            <div className="mt-8 bg-charcoal/5 rounded-lg p-6 mb-12">
              <h4 className="font-medium mb-3">Add-ons:</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="h-1.5 w-1.5 bg-warm-yellow rounded-full mr-2"></div>
                  <span>Animated logo → {formatPrice(999)}</span>
                </li>
                <li className="flex items-center">
                  <div className="h-1.5 w-1.5 bg-warm-yellow rounded-full mr-2"></div>
                  <span>Flyer/poster (each) → {formatPrice(399)}</span>
                </li>
                <li className="flex items-center">
                  <div className="h-1.5 w-1.5 bg-warm-yellow rounded-full mr-2"></div>
                  <span>Menu/Brochure design → {formatPrice(799)}+</span>
                </li>
              </ul>
            </div>
          )}

          {selectedCategory === 'youtube' && (
            <div className="mt-8 bg-charcoal/5 rounded-lg p-6 mb-12">
              <h4 className="font-medium mb-3">Add-ons:</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="h-1.5 w-1.5 bg-warm-yellow rounded-full mr-2"></div>
                  <span>Intro/outro graphics (non-motion) → {formatPrice(799)}</span>
                </li>
                <li className="flex items-center">
                  <div className="h-1.5 w-1.5 bg-warm-yellow rounded-full mr-2"></div>
                  <span>Thumbnail template for reuse → {formatPrice(299)}</span>
                </li>
              </ul>
            </div>
          )}

          {/* Smart Pricing Notes */}
          <div className="bg-charcoal/5 p-8 rounded-lg mb-12">
            <h4 className="text-xl font-bold mb-4">Smart Pricing Notes:</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="h-2 w-2 bg-warm-yellow rounded-full mt-2 mr-3"></div>
                <p>At LOTS Media, we believe in fair pricing that respects creative value and client goals.</p>
              </li>
              <li className="flex items-start">
                <div className="h-2 w-2 bg-warm-yellow rounded-full mt-2 mr-3"></div>
                <p>We start affordably, but never undervalue.</p>
              </li>
              <li className="flex items-start">
                <div className="h-2 w-2 bg-warm-yellow rounded-full mt-2 mr-3"></div>
                <p>You get strategic design support, not just pretty visuals.</p>
              </li>
              <li className="flex items-start">
                <div className="h-2 w-2 bg-warm-yellow rounded-full mt-2 mr-3"></div>
                <p>Repeat clients & bundles get exclusive discounts.</p>
              </li>
            </ul>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <a href="mailto:lotsmediaco@gmail.com">
              <Button className="bg-warm-yellow text-charcoal hover:bg-charcoal hover:text-soft-white transition-colors px-6 py-6 h-auto text-base">
                <Mail className="h-5 w-5 mr-2" />
                Mail Us
              </Button>
            </a>
            <a href="https://www.instagram.com/direct/t/17847879945423429" target="_blank" rel="noopener noreferrer">
              <Button className="bg-warm-yellow text-charcoal hover:bg-charcoal hover:text-soft-white transition-colors px-6 py-6 h-auto text-base">
                <Instagram className="h-5 w-5 mr-2" />
                DM on Instagram
              </Button>
            </a>
            <Button variant="outline" className="border-charcoal bg-soft-white text-charcoal hover:text-soft-white hover:bg-charcoal transition-colors px-6 py-6 h-auto text-base">
              Request Custom Quote
            </Button>
          </div>

          <p className="text-center text-charcoal/70 mt-4 mb-0">
            For custom requests, reach out via Instagram DM or Mail us.
          </p>
        </div>
      </section>

      <BookingDialog 
        isOpen={!!selectedPackage}
        onClose={() => setSelectedPackage(null)}
        packageName={selectedPackage?.name || ''}
        packageCategory={selectedPackage?.category || ''}
      />

      <Footer />
    </>
  );
};

export default PricingPage;
