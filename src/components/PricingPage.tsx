
import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import BookingDialog from './BookingDialog';
import { Instagram, Mail } from 'lucide-react';

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
    { name: 'Social Media Design', icon: '📱' },
    { name: 'Branding & Business', icon: '📄' },
    { name: 'YouTube & Creator', icon: '📹' },
    { name: 'Monthly Retainers', icon: '📅' }
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
        popular: true
      },
      {
        title: "Enterprise",
        price: 9999,
        features: ["Full brand identity", "Marketing materials", "Brand strategy", "Unlimited revisions"],
        popular: false
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
        popular: true
      },
      {
        title: "Premium",
        price: 2499,
        features: ["10 thumbnails", "Complete channel branding", "Unlimited revisions", "Priority support"],
        popular: false
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
        popular: true
      },
      {
        title: "Pro",
        price: 9999,
        features: ["Unlimited designs", "5 thumbnails", "5 posters", "Dedicated designer"],
        popular: false
      }
    ]
  };

  return (
    <>
      <Navbar />
      <section className="bg-gray-50 min-h-screen pt-24 pb-12">
        <div className="max-w-6xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Pricing & <span className="text-yellow-500">Packages</span>
            </h1>
            <p className="text-gray-600 mb-8">
              Professional design solutions tailored to your unique brand needs and budget.
            </p>
            
            {/* Currency Selector */}
            <div className="flex justify-center mb-8">
              <div className="bg-yellow-500 rounded-lg p-1 flex">
                <button 
                  onClick={() => setCurrency('INR')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    currency === 'INR' 
                      ? 'bg-yellow-600 text-white' 
                      : 'text-gray-700 hover:bg-yellow-400'
                  }`}
                >
                  ₹ INR
                </button>
                <button 
                  onClick={() => setCurrency('USD')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    currency === 'USD' 
                      ? 'bg-yellow-600 text-white' 
                      : 'text-gray-700 hover:bg-yellow-400'
                  }`}
                >
                  $ USD
                </button>
              </div>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="grid grid-cols-4 gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                className={`p-4 rounded-lg border text-center transition-all ${
                  activeCategory === category.name
                    ? 'bg-yellow-500 border-yellow-500 text-white shadow-lg'
                    : 'bg-white border-gray-200 text-gray-700 hover:border-yellow-300'
                }`}
              >
                <div className="text-2xl mb-2">{category.icon}</div>
                <div className="text-sm font-medium">{category.name}</div>
              </button>
            ))}
          </div>

          {/* Active Category Title */}
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">{activeCategory}</h2>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {packages[activeCategory as keyof typeof packages]?.map((pkg, index) => (
              <Card 
                key={index}
                className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl ${
                  pkg.popular 
                    ? 'border-yellow-500 shadow-lg transform scale-105' 
                    : 'border-gray-200 hover:border-yellow-300'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                    Most Popular
                  </div>
                )}
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{pkg.title}</h3>
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-gray-800">{formatPrice(pkg.price)}</span>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <div className="h-2 w-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    onClick={() => handleBookNow(pkg.title, activeCategory)}
                    className={`w-full transition-colors ${
                      pkg.popular 
                        ? 'bg-yellow-500 hover:bg-yellow-600 text-white' 
                        : 'bg-gray-800 hover:bg-gray-900 text-white'
                    }`}
                  >
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Add-ons Section */}
          <div className="bg-white rounded-lg p-6 mb-12">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Add-ons:</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Revisions beyond 2</span>
                <span className="text-yellow-600 font-medium">{formatPrice(200)} each</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Rush covers (per piece)</span>
                <span className="text-yellow-600 font-medium">{formatPrice(700)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Brand style guide</span>
                <span className="text-yellow-600 font-medium">{formatPrice(499)}</span>
              </div>
            </div>
          </div>

          {/* Smart Pricing Notes */}
          <div className="bg-white rounded-lg p-6 mb-12">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Smart Pricing Notes:</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <div className="h-2 w-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-600 text-sm">At LOTS Media, we believe in fair pricing that respects creative value and client goals.</span>
              </li>
              <li className="flex items-start">
                <div className="h-2 w-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-600 text-sm">We start affordable, but never under-value.</span>
              </li>
              <li className="flex items-start">
                <div className="h-2 w-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-600 text-sm">You get strategic design support, not just pretty visuals.</span>
              </li>
              <li className="flex items-start">
                <div className="h-2 w-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-600 text-sm">Repeat clients & bundles get exclusive discounts.</span>
              </li>
            </ul>
          </div>

          {/* Contact Buttons */}
          <div className="flex justify-center gap-4">
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-lg flex items-center gap-2">
              <Mail size={20} />
              Mail Us
            </Button>
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-lg flex items-center gap-2">
              <Instagram size={20} />
              DM on Instagram
            </Button>
            <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-lg">
              Request Custom Quote
            </Button>
          </div>

          <div className="text-center mt-4">
            <p className="text-gray-500 text-sm">For custom requests, reach out via Instagram DM or Mail us.</p>
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
