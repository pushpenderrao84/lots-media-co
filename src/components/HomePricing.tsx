
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import BookingDialog from './BookingDialog';

const HomePricing = () => {
  const [selectedPackage, setSelectedPackage] = useState<{name: string, category: string} | null>(null);

  const recommendedPackages = [
    {
      title: "Social Media Standard",
      price: "₹999",
      category: "Social Media",
      features: [
        "5 posts",
        "1 carousel (multi-slide)",
        "2 revisions included",
        "Fast delivery (36 hrs)"
      ]
    },
    {
      title: "Branding Starter",
      price: "₹2,499",
      category: "Branding",
      features: [
        "Logo package",
        "Business card",
        "Letterhead design",
        "3 revisions included",
        "Delivery in 5-7 days"
      ]
    },
    {
      title: "YouTube Standard",
      price: "₹1,499",
      category: "YouTube",
      features: [
        "5 thumbnails",
        "Channel art",
        "2 revisions included",
        "Delivery in 3-4 days"
      ]
    },
    {
      title: "Creative Retainer",
      price: "₹5,999",
      period: "/month",
      category: "Monthly",
      features: [
        "20 designs/month",
        "2 thumbnails",
        "2 posters",
        "Priority support",
        "2-day turnaround"
      ],
      popular: true
    }
  ];

  const handleBookNow = (packageTitle: string, category: string) => {
    setSelectedPackage({ name: packageTitle, category });
  };

  return (
    <>
      <section id="pricing" className="section-padding bg-soft-white">
        <div className="container-padding max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-warm-yellow">Packages</span>
            </h2>
            <p className="text-charcoal/80 max-w-2xl mx-auto">
              Professional design solutions tailored to your unique brand needs and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {recommendedPackages.map((pkg, index) => (
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
                    Recommended
                  </div>
                )}
                
                <CardHeader className={`pb-0 ${pkg.popular ? 'bg-warm-yellow/10' : ''}`}>
                  <div className="text-xs text-charcoal/60 mb-2">{pkg.category}</div>
                  <CardTitle className="text-lg">{pkg.title}</CardTitle>
                  <div className="mt-3 mb-2">
                    <span className="text-2xl font-bold">{pkg.price}</span>
                    <span className="text-sm text-charcoal/60">{pkg.period || ""}</span>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-4 flex flex-col flex-grow">
                  <ul className="space-y-2 mb-6 flex-grow">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-sm">
                        <div className="h-1.5 w-1.5 bg-warm-yellow rounded-full mt-2 mr-2"></div>
                        <span className="text-charcoal/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    onClick={() => handleBookNow(pkg.title, pkg.category)}
                    className={`w-full text-sm mt-auto transition-colors ${
                      pkg.popular 
                        ? 'bg-warm-yellow text-charcoal hover:bg-charcoal hover:text-soft-white' 
                        : 'bg-charcoal text-soft-white hover:bg-warm-yellow hover:text-charcoal'
                    }`}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link to="/pricing">
              <Button variant="outline" className="border-charcoal bg-soft-white text-charcoal hover:text-soft-white hover:bg-charcoal transition-colors px-8 py-6 h-auto text-base">
                Explore All Packages
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <BookingDialog 
        isOpen={!!selectedPackage}
        onClose={() => setSelectedPackage(null)}
        packageName={selectedPackage?.name || ''}
        packageCategory={selectedPackage?.category || ''}
      />
    </>
  );
};

export default HomePricing;
