
import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import BookingDialog from './BookingDialog';
import { Instagram, Mail, FileText, Calendar } from 'lucide-react';

const PricingPage = () => {
  const [currency, setCurrency] = useState('INR');
  const [activeCategory, setActiveCategory] = useState('Social Media Design');
  const [selectedPackage, setSelectedPackage] = useState<{name: string, category: string} | null>(null);

  const exchangeRates = {
    INR: 1,
    USD: 0.012
  };

  const convertPrice = (inrPrice: number) => {
    if (currency === 'USD') {
      return Math.round(inrPrice * exchangeRates.USD);
    }
    return inrPrice;
  };

  const formatPrice = (inrPrice: number) => {
    const convertedPrice = convertPrice(inrPrice);
    return currency === 'USD' ? `$${convertedPrice}` : `₹${convertedPrice}`;
  };

  const handleBookNow = (packageTitle: string, category: string) => {
    setSelectedPackage({ name: packageTitle, category });
  };

  const categories = [
    { name: 'Social Media Design', icon: Instagram },
    { name: 'Branding & Business', icon: FileText },
    { name: 'YouTube & Creator', icon: ({ className }: { className?: string }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.54 6.42C22.4212 5.94541 22.1793 5.51057 21.8387 5.15941C21.4981 4.80824 21.0708 4.55318 20.6 4.42C18.88 4 12 4 12 4C12 4 5.12 4 3.4 4.46C2.92925 4.59318 2.50195 4.84824 2.16135 5.19941C1.82075 5.55057 1.57878 5.98541 1.46 6.46C1.14522 8.20556 0.991243 9.97631 1 11.75C0.988852 13.537 1.14283 15.3213 1.46 17.08C1.59096 17.5398 1.8333 17.9581 2.17322 18.2945C2.51314 18.6308 2.93894 18.8738 3.4 19C5.12 19.46 12 19.46 12 19.46C12 19.46 18.88 19.46 20.6 19C21.0708 18.8668 21.4981 18.6118 21.8387 18.2606C22.1793 17.9094 22.4212 17.4746 22.54 17C22.8524 15.2676 23.0063 13.5103 23 11.75C23.0112 9.96295 22.8572 8.1787 22.54 6.42Z" fill="currentColor" />
        <path d="M9.75 15.02L15.5 11.75L9.75 8.48001V15.02Z" fill="white" />
      </svg>
    ) },
    { name: 'Monthly Retainers', icon: Calendar }
  ];

  const packages = {
    "Social Media Design": [
      {
        title: "Basic",
        price: 499,
        features: [
          "3 Instagram posts (static)",
          "2 revisions included",
          "Standard delivery (48 hrs)"
        ],
        popular: false
      },
      {
        title: "Standard",
        price: 999,
        features: [
          "5 posts",
          "1 carousel (multi-slides)",
          "2 revisions included",
          "Fast delivery (36 hrs)"
        ],
        popular: false
      },
      {
        title: "Pro",
        price: 1899,
        features: [
          "10 posts",
          "3 carousels",
          "Highlight covers",
          "Priority delivery (24 hrs)"
        ],
        popular: true
      }
    ],
    "Branding & Business": [
      {
        title: "Starter",
        price: 2499,
        features: ["Logo package", "Business card", "Letterhead", "3 revisions"],
        popular: false
      },
      {
        title: "Professional",
        price: 4999,
        features: ["Complete brand kit", "Stationery set", "Brand guidelines", "5 revisions"],
        popular: false
      },
      {
        title: "Enterprise",
        price: 9999,
        features: ["Full brand identity", "Marketing materials", "Brand strategy", "Unlimited revisions"],
        popular: true
      }
    ],
    "YouTube & Creator": [
      {
        title: "Basic",
        price: 999,
        features: ["3 thumbnails", "Basic editing", "2 revisions"],
        popular: false
      },
      {
        title: "Standard",
        price: 1499,
        features: ["5 thumbnails", "Channel art", "3 revisions", "Fast delivery"],
        popular: false
      },
      {
        title: "Premium",
        price: 2499,
        features: ["10 thumbnails", "Complete channel branding", "Unlimited revisions", "Priority support"],
        popular: true
      }
    ],
    "Monthly Retainers": [
      {
        title: "Starter",
        price: 3999,
        features: ["10 designs/month", "1 thumbnail", "Basic support"],
        popular: false
      },
      {
        title: "Creative Retainer",
        price: 5999,
        features: ["20 designs/month", "2 thumbnails", "2 posters", "Priority support"],
        popular: false
      },
      {
        title: "Pro",
        price: 9999,
        features: ["Unlimited designs", "5 thumbnails", "5 posters", "Dedicated designer"],
        popular: true
      }
    ]
  };

  const addOns = {
    "Social Media Design": [
      { name: "Revisions beyond 2", price: 100 },
      { name: "Reels covers (per piece)", price: 100 },
      { name: "Brand style guide", price: 499 }
    ],
    "Branding & Business": [
      { name: "Animated logo", price: 999 },
      { name: "Flyer/poster (each)", price: 399 },
      { name: "Menu/Brochure design", price: 799 }
    ],
    "YouTube & Creator": [
      { name: "Intro/outro graphics (non-motion)", price: 799 },
      { name: "Thumbnail template for reuse", price: 299 }
    ],
    "Monthly Retainers": []
  };

  return (
    <>
      <Navbar />
      <section className="bg-soft-white min-h-screen pt-24 pb-12">
        <div className="max-w-6xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-charcoal mb-4">
              Pricing & <span className="text-warm-yellow">Packages</span>
            </h1>
            <p className="text-charcoal/70 mb-8">
              Professional design solutions tailored to your unique brand needs and budget.
            </p>
            
            {/* Currency Selector */}
            <div className="flex justify-center mb-8">
              <div className="bg-soft-white border border-charcoal/20 rounded-lg p-1 flex">
                <button 
                  onClick={() => setCurrency('INR')}
                  className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                    currency === 'INR' 
                      ? 'bg-warm-yellow text-charcoal' 
                      : 'text-charcoal/70 hover:text-charcoal'
                  }`}
                >
                  ₹ INR
                </button>
                <button 
                  onClick={() => setCurrency('USD')}
                  className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                    currency === 'USD' 
                      ? 'bg-warm-yellow text-charcoal' 
                      : 'text-charcoal/70 hover:text-charcoal'
                  }`}
                >
                  $ USD
                </button>
              </div>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="grid grid-cols-4 gap-4 mb-12">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.name}
                  onClick={() => setActiveCategory(category.name)}
                  className={`p-6 rounded-lg border text-center transition-all ${
                    activeCategory === category.name
                      ? 'bg-warm-yellow border-warm-yellow text-charcoal shadow-lg'
                      : 'bg-soft-white border-charcoal/20 text-charcoal hover:border-warm-yellow/50'
                  }`}
                >
                  <div className="flex justify-center mb-3">
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <div className="text-sm font-medium">{category.name}</div>
                </button>
              );
            })}
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {packages[activeCategory as keyof typeof packages]?.map((pkg, index) => (
              <Card 
                key={index}
                className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl ${
                  pkg.popular 
                    ? 'border-warm-yellow shadow-lg transform scale-105' 
                    : 'border-charcoal/20 hover:border-warm-yellow/50'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-4 right-4 bg-warm-yellow text-charcoal px-3 py-1 rounded-full text-xs font-medium">
                    Most Popular
                  </div>
                )}
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-charcoal mb-4">{pkg.title}</h3>
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-charcoal">{formatPrice(pkg.price)}</span>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <div className="h-2 w-2 bg-warm-yellow rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-charcoal/80 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    onClick={() => handleBookNow(pkg.title, activeCategory)}
                    className={`w-full transition-colors ${
                      pkg.popular 
                        ? 'bg-warm-yellow hover:bg-warm-yellow/90 text-charcoal' 
                        : 'bg-charcoal hover:bg-charcoal/90 text-soft-white'
                    }`}
                  >
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Add-ons Section */}
          {addOns[activeCategory as keyof typeof addOns].length > 0 && (
            <div className="bg-charcoal/5 rounded-lg p-6 mb-12">
              <h3 className="text-lg font-bold text-charcoal mb-4">Add-ons:</h3>
              <div className="space-y-3">
                {addOns[activeCategory as keyof typeof addOns].map((addon, index) => (
                  <div key={index} className="flex items-center">
                    <div className="h-2 w-2 bg-warm-yellow rounded-full mr-3"></div>
                    <span className="text-charcoal/80 flex-1">{addon.name}</span>
                    <span className="text-charcoal font-medium ml-4">→ {formatPrice(addon.price)}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Smart Pricing Notes */}
          <div className="bg-charcoal/5 rounded-lg p-6 mb-12">
            <h3 className="text-lg font-bold text-charcoal mb-4">Smart Pricing Notes:</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="h-2 w-2 bg-warm-yellow rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-charcoal/80">At LOTS Media, we believe in fair pricing that respects creative value and client goals.</span>
              </div>
              <div className="flex items-start">
                <div className="h-2 w-2 bg-warm-yellow rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-charcoal/80">We start affordably, but never undervalue.</span>
              </div>
              <div className="flex items-start">
                <div className="h-2 w-2 bg-warm-yellow rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-charcoal/80">You get strategic design support, not just pretty visuals.</span>
              </div>
              <div className="flex items-start">
                <div className="h-2 w-2 bg-warm-yellow rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-charcoal/80">Repeat clients & bundles get exclusive discounts.</span>
              </div>
            </div>
          </div>

          {/* Contact Buttons */}
          <div className="flex justify-center gap-4">
            <Button className="bg-warm-yellow hover:bg-warm-yellow/90 text-charcoal px-8 py-3 rounded-lg flex items-center gap-2">
              <Mail size={20} />
              Mail Us
            </Button>
            <Button className="bg-warm-yellow hover:bg-warm-yellow/90 text-charcoal px-8 py-3 rounded-lg flex items-center gap-2">
              <Instagram size={20} />
              DM on Instagram
            </Button>
            <Button variant="outline" className="border-charcoal/30 text-charcoal hover:bg-charcoal/5 px-8 py-3 rounded-lg">
              Request Custom Quote
            </Button>
          </div>

          <div className="text-center mt-4">
            <p className="text-charcoal/60 text-sm">For custom requests, reach out via Instagram DM or Mail us.</p>
          </div>
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
