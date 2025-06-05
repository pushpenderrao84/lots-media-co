import React from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Instagram, Mail, FileText } from 'lucide-react';

interface PricingProps {
  isHomePage?: boolean;
}

const Pricing = ({ isHomePage = false }: PricingProps) => {
  // Social Media Design pricing data
  const socialMediaPackages = [
    {
      title: "Basic",
      price: "₹499",
      features: [
        "3 Instagram posts (static)",
        "2 revisions included",
        "Standard delivery (48 hrs)"
      ]
    },
    {
      title: "Standard",
      price: "₹999",
      features: [
        "5 posts",
        "1 carousel (multi-slide)",
        "2 revisions included",
        "Fast delivery (36 hrs)"
      ]
    },
    {
      title: "Pro",
      price: "₹1,999",
      features: [
        "10 posts",
        "3 carousels",
        "Highlight covers",
        "Priority delivery (24 hrs)"
      ],
      popular: true
    }
  ];

  // Branding & Business pricing data
  const brandingPackages = [
    {
      title: "Logo Only",
      price: "₹1,499",
      features: [
        "2 logo concepts",
        "2 revisions included",
        "Source files provided",
        "Delivery in 3-4 days"
      ]
    },
    {
      title: "Starter",
      price: "₹2,499",
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
      price: "₹4,499",
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
  ];

  // YouTube & Creator pricing data
  const youtubePackages = [
    {
      title: "Basic",
      price: "₹499",
      features: [
        "2 thumbnails",
        "1 revision included",
        "Standard delivery (48 hrs)"
      ]
    },
    {
      title: "Standard",
      price: "₹1,499",
      features: [
        "5 thumbnails",
        "Channel art",
        "2 revisions included",
        "Delivery in 3-4 days"
      ]
    },
    {
      title: "Pro Creator",
      price: "₹2,999",
      features: [
        "10 thumbnails",
        "Channel art",
        "Reels/Shorts covers",
        "3 revisions included",
        "Priority delivery (48 hrs)"
      ],
      popular: true
    }
  ];

  // Monthly Retainer pricing data
  const retainerPackages = [
    {
      title: "Lite",
      price: "₹2,999",
      period: "/month",
      features: [
        "10 designs/month (any mix)",
        "Basic support",
        "3-day turnaround"
      ]
    },
    {
      title: "Creative",
      price: "₹5,999",
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
      price: "₹8,999",
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
  ];

  const content = (
    <section id="pricing" className="section-padding bg-soft-white pb-8">
      <div className="container-padding max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pricing & <span className="text-warm-yellow">Packages</span>
          </h2>
          <p className="text-charcoal/80 max-w-2xl mx-auto">
            Professional design solutions tailored to your unique brand needs and budget.
          </p>
        </div>

        {/* Social Media Design Packages */}
        <div className="mb-20">
          <div className="flex items-center justify-center mb-10">
            <div className="h-px bg-charcoal/10 w-full max-w-xs"></div>
            <h3 className="text-2xl font-bold mx-6 whitespace-nowrap flex items-center">
              <Instagram className="h-6 w-6 text-warm-yellow mr-2" />
              Social Media Design
            </h3>
            <div className="h-px bg-charcoal/10 w-full max-w-xs"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {socialMediaPackages.map((pkg, index) => (
              <PricingCard 
                key={`social-${index}`}
                title={pkg.title}
                price={pkg.price}
                features={pkg.features}
                popular={pkg.popular || false}
              />
            ))}
          </div>

          <div className="mt-8 bg-charcoal/5 rounded-lg p-6">
            <h4 className="font-medium mb-3">Add-ons:</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <div className="h-1.5 w-1.5 bg-warm-yellow rounded-full mr-2"></div>
                <span>Revisions beyond 2 → ₹100 each</span>
              </li>
              <li className="flex items-center">
                <div className="h-1.5 w-1.5 bg-warm-yellow rounded-full mr-2"></div>
                <span>Reels covers (per piece) → ₹100</span>
              </li>
              <li className="flex items-center">
                <div className="h-1.5 w-1.5 bg-warm-yellow rounded-full mr-2"></div>
                <span>Brand style guide → ₹499</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Branding & Business Packages */}
        <div className="mb-20">
          <div className="flex items-center justify-center mb-10">
            <div className="h-px bg-charcoal/10 w-full max-w-xs"></div>
            <h3 className="text-2xl font-bold mx-6 whitespace-nowrap flex items-center">
              <FileText className="h-6 w-6 text-warm-yellow mr-2" />
              Branding & Business
            </h3>
            <div className="h-px bg-charcoal/10 w-full max-w-xs"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {brandingPackages.map((pkg, index) => (
              <PricingCard 
                key={`branding-${index}`}
                title={pkg.title}
                price={pkg.price}
                features={pkg.features}
                popular={pkg.popular || false}
              />
            ))}
          </div>

          <div className="mt-8 bg-charcoal/5 rounded-lg p-6">
            <h4 className="font-medium mb-3">Add-ons:</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <div className="h-1.5 w-1.5 bg-warm-yellow rounded-full mr-2"></div>
                <span>Animated logo → ₹999</span>
              </li>
              <li className="flex items-center">
                <div className="h-1.5 w-1.5 bg-warm-yellow rounded-full mr-2"></div>
                <span>Flyer/poster (each) → ₹399</span>
              </li>
              <li className="flex items-center">
                <div className="h-1.5 w-1.5 bg-warm-yellow rounded-full mr-2"></div>
                <span>Menu/Brochure design → ₹799+</span>
              </li>
            </ul>
          </div>
        </div>

        {/* YouTube & Creator Packages */}
        <div className="mb-20">
          <div className="flex items-center justify-center mb-10">
            <div className="h-px bg-charcoal/10 w-full max-w-xs"></div>
            <h3 className="text-2xl font-bold mx-6 whitespace-nowrap flex items-center">
              <svg className="h-6 w-6 text-warm-yellow mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.54 6.42C22.4212 5.94541 22.1793 5.51057 21.8387 5.15941C21.4981 4.80824 21.0708 4.55318 20.6 4.42C18.88 4 12 4 12 4C12 4 5.12 4 3.4 4.46C2.92925 4.59318 2.50195 4.84824 2.16135 5.19941C1.82075 5.55057 1.57878 5.98541 1.46 6.46C1.14522 8.20556 0.991243 9.97631 1 11.75C0.988852 13.537 1.14283 15.3213 1.46 17.08C1.59096 17.5398 1.8333 17.9581 2.17322 18.2945C2.51314 18.6308 2.93894 18.8738 3.4 19C5.12 19.46 12 19.46 12 19.46C12 19.46 18.88 19.46 20.6 19C21.0708 18.8668 21.4981 18.6118 21.8387 18.2606C22.1793 17.9094 22.4212 17.4746 22.54 17C22.8524 15.2676 23.0063 13.5103 23 11.75C23.0112 9.96295 22.8572 8.1787 22.54 6.42Z" fill="currentColor" />
                <path d="M9.75 15.02L15.5 11.75L9.75 8.48001V15.02Z" fill="white" />
              </svg>
              YouTube & Creator
            </h3>
            <div className="h-px bg-charcoal/10 w-full max-w-xs"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {youtubePackages.map((pkg, index) => (
              <PricingCard 
                key={`youtube-${index}`}
                title={pkg.title}
                price={pkg.price}
                features={pkg.features}
                popular={pkg.popular || false}
              />
            ))}
          </div>

          <div className="mt-8 bg-charcoal/5 rounded-lg p-6">
            <h4 className="font-medium mb-3">Add-ons:</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <div className="h-1.5 w-1.5 bg-warm-yellow rounded-full mr-2"></div>
                <span>Intro/outro graphics (non-motion) → ₹799</span>
              </li>
              <li className="flex items-center">
                <div className="h-1.5 w-1.5 bg-warm-yellow rounded-full mr-2"></div>
                <span>Thumbnail template for reuse → ₹299</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Monthly Retainers */}
        <div className="mb-20">
          <div className="flex items-center justify-center mb-10">
            <div className="h-px bg-charcoal/10 w-full max-w-xs"></div>
            <h3 className="text-2xl font-bold mx-6 whitespace-nowrap">
              Monthly Retainers
            </h3>
            <div className="h-px bg-charcoal/10 w-full max-w-xs"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {retainerPackages.map((pkg, index) => (
              <PricingCard 
                key={`retainer-${index}`}
                title={pkg.title}
                price={pkg.price}
                period={pkg.period}
                features={pkg.features}
                popular={pkg.popular || false}
              />
            ))}
          </div>
        </div>

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
          <Button className="bg-warm-yellow text-charcoal hover:bg-charcoal hover:text-soft-white transition-colors px-6 py-6 h-auto text-base">
            <Mail className="h-5 w-5 mr-2 group-hover:warm-yellow transition-colors"/>
            Mail Us
          </Button>
          <Button className="bg-warm-yellow text-charcoal hover:bg-charcoal hover:text-soft-white transition-colors px-6 py-6 h-auto text-base">
            <Instagram className="h-5 w-5 mr-2 group-hover:warm-yellow transition-colors"/>
            DM on Instagram
          </Button>
          <Button variant="outline" className="border-charcoal bg-soft-white text-charcoal hover:text-soft-white hover:bg-charcoal transition-colors px-6 py-6 h-auto text-base">
            Request Custom Quote
          </Button>
        </div>

        {/* Custom Request Note - reduced margin-top */}
        <p className="text-center text-charcoal/70 mt-4 mb-0">
          For custom requests, reach out via Instagram DM or Mail us.
        </p>
      </div>
    </section>
  );

  if (isHomePage) {
    return content;
  }

  return (
    <>
      <Navbar />
      {content}
      <Footer />
    </>
  );
};

interface PricingCardProps {
  title: string;
  price: string;
  period?: string;
  features: string[];
  popular?: boolean;
}

const PricingCard = ({ title, price, period = "", features, popular = false }: PricingCardProps) => {
  return (
    <Card 
      className={`overflow-hidden transition-all duration-300 hover:shadow-xl ${
        popular 
          ? 'border-warm-yellow shadow-lg transform hover:-translate-y-1' 
          : 'border-soft-white/20 shadow hover:border-warm-yellow/50'
      }`}
    >
      {popular && (
        <div className="bg-warm-yellow text-charcoal py-1 px-3 text-xs font-medium absolute right-0 top-4 rounded-l-md">
          Most Popular
        </div>
      )}
      
      <CardHeader className={`pb-0 ${popular ? 'bg-warm-yellow/10' : ''}`}>
        <CardTitle className="text-xl">{title}</CardTitle>
        <div className="mt-4 mb-2">
          <span className="text-3xl font-bold">{price}</span>
          <span className="text-sm text-charcoal/60">{period}</span>
        </div>
      </CardHeader>
      
      <CardContent className="pt-6">
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <div className="h-2 w-2 bg-warm-yellow rounded-full mt-2 mr-2"></div>
              <span className="text-charcoal/80">{feature}</span>
            </li>
          ))}
        </ul>
        
        <Button 
          className={`w-full ${
            popular 
              ? 'bg-warm-yellow text-charcoal hover:bg-warm-yellow/90' 
              : 'bg-charcoal/90 text-soft-white hover:bg-charcoal'
          }`}
        >
          Book Now
        </Button>
      </CardContent>
    </Card>
  );
};

export default Pricing;
