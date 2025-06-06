
import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import BookingDialog from './BookingDialog';

const PricingPage = () => {
  const [currency, setCurrency] = useState('INR');
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

  const packages = {
    "Social Media": [
      {
        title: "Basic",
        price: 799,
        features: ["3 posts", "1 revision", "24-48 hr delivery"],
        popular: false
      },
      {
        title: "Standard",
        price: 999,
        features: ["5 posts", "1 carousel", "2 revisions", "24-36 hr delivery"],
        popular: true
      },
      {
        title: "Premium",
        price: 1499,
        features: ["8 posts", "2 carousels", "3 revisions", "Priority support"],
        popular: false
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
    "Monthly Retainer": [
      {
        title: "Starter",
        price: 3999,
        features: ["10 designs/month", "1 thumbnail", "Basic support"],
        popular: false,
        period: "/month"
      },
      {
        title: "Creative Retainer",
        price: 5999,
        features: ["20 designs/month", "2 thumbnails", "2 posters", "Priority support"],
        popular: true,
        period: "/month"
      },
      {
        title: "Pro",
        price: 9999,
        features: ["Unlimited designs", "5 thumbnails", "5 posters", "Dedicated designer"],
        popular: false,
        period: "/month"
      }
    ]
  };

  const addOns = [
    { title: "Extra Revision", price: 199 },
    { title: "Rush Delivery (12 hrs)", price: 499 },
    { title: "Source Files", price: 299 },
    { title: "Additional Format", price: 199 },
    { title: "Commercial License", price: 799 }
  ];

  return (
    <>
      <Navbar />
      <section className="section-padding bg-soft-white pt-24">
        <div className="container-padding max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Choose Your Perfect <span className="text-warm-yellow">Package</span>
            </h1>
            <p className="text-charcoal/80 max-w-2xl mx-auto mb-8">
              Professional design solutions tailored to your unique brand needs and budget.
            </p>
            
            <div className="flex justify-center">
              <Select value={currency} onValueChange={setCurrency}>
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="INR">₹ INR</SelectItem>
                  <SelectItem value="USD">$ USD</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {Object.entries(packages).map(([category, categoryPackages]) => (
            <div key={category} className="mb-16">
              <h2 className="text-2xl font-bold mb-8 text-center">{category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {categoryPackages.map((pkg, index) => (
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
                    
                    <CardHeader className={`pb-4 ${pkg.popular ? 'bg-warm-yellow/10' : ''}`}>
                      <CardTitle className="text-xl">{pkg.title}</CardTitle>
                      <div className="mt-4">
                        <span className="text-3xl font-bold">{formatPrice(pkg.price)}</span>
                        <span className="text-sm text-charcoal/60">{pkg.period || ""}</span>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="pt-0 flex flex-col flex-grow">
                      <ul className="space-y-3 mb-6 flex-grow">
                        {pkg.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <div className="h-2 w-2 bg-warm-yellow rounded-full mt-2 mr-3"></div>
                            <span className="text-charcoal/80">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <Button 
                        onClick={() => handleBookNow(pkg.title, category)}
                        className={`w-full mt-auto transition-colors ${
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
            </div>
          ))}

          {/* Add-ons Section */}
          <div className="mt-20">
            <h2 className="text-2xl font-bold mb-8 text-center">Add-ons & Extras</h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {addOns.map((addon, index) => (
                <Card key={index} className="text-center p-4 hover:shadow-md transition-shadow">
                  <h3 className="font-medium mb-2">{addon.title}</h3>
                  <p className="text-warm-yellow font-bold">{formatPrice(addon.price)}</p>
                </Card>
              ))}
            </div>
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
