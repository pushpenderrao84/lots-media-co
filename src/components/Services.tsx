
import React from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Instagram, Briefcase, Image } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const serviceData = [
  {
    icon: <Instagram className="h-12 w-12 text-warm-yellow" />,
    title: "Social Media Design",
    description: "Eye-catching Instagram posts, carousels and story templates that drive engagement and reinforce brand identity."
  },
  {
    icon: <Briefcase className="h-12 w-12 text-warm-yellow" />,
    title: "Business Branding",
    description: "Comprehensive branding packages including logo design, business cards, flyers, posters, and brand guidelines to establish your visual presence."
  },
  {
    icon: <Image className="h-12 w-12 text-warm-yellow" />,
    title: "Content Creator Design",
    description: "Custom YouTube banners, reel covers, thumbnails, and consistent visual assets to help content creators build a recognizable brand."
  }
];

interface ServicesProps {
  isHomePage?: boolean;
}

const Services = ({ isHomePage = false }: ServicesProps) => {
  const content = (
    <section id="services" className="section-padding bg-charcoal text-soft-white">
      <div className="container-padding max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-warm-yellow">Services</span>
          </h2>
          <p className="text-soft-white/80 max-w-2xl mx-auto">
            We offer specialized design services tailored to make your brand stand out in today's competitive digital landscape.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {serviceData.map((service, index) => (
            <Card key={index} className="bg-charcoal border border-soft-white/10 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl text-warm-yellow">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-soft-white/70 text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
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

export default Services;
