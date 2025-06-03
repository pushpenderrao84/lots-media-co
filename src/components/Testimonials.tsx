
import React, { useState, useEffect } from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    id: 1,
    quote: "LOTS Media completely transformed my content! Their expert SEO and thumbnail strategies boosted my CTR by 50%, ranked my videos on the first page, and significantly increased engagement. Highly recommended for any creator or brand looking to grow!",
    author: "Sanjay",
    company: "Physics Pulse",
    rating: 5
  },
  {
    id: 2,
    quote: "Working with LOTS Media was a game-changer! Their creativity, detail, and grasp of my vision brought my music to life visually. Every design was unique and striking. Highly professional and seamless—perfect for any artist looking to elevate their brand!",
    author: "PRNC",
    company: "Musician",
    rating: 4.5
  }
];

interface TestimonialsProps {
  isHomePage?: boolean;
}

const Testimonials = ({ isHomePage = false }: TestimonialsProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg key={i} className="w-6 h-6 text-warm-yellow" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <svg key="half" className="w-6 h-6 text-warm-yellow" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="half-star">
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="#e5e7eb" />
            </linearGradient>
          </defs>
          <path fill="url(#half-star)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
      );
    }

    // Fill remaining with empty stars
    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <svg key={`empty-${i}`} className="w-6 h-6 text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
      );
    }

    return stars;
  };

  const content = (
    <section id="testimonials" className="section-padding bg-charcoal">
      <div className="container-padding max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-soft-white">
            Client <span className="text-warm-yellow">Testimonials</span>
          </h2>
          <p className="text-soft-white/70 max-w-2xl mx-auto">
            Here's what our clients have to say about their experience working with us.
          </p>
        </div>
        
        <div className="relative max-w-3xl mx-auto overflow-hidden">
          <div 
            className="testimonial-slider flex"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                <Card className="bg-soft-white shadow-lg border-none">
                  <CardContent className="pt-8">
                    <div className="flex justify-center mb-6">
                      {renderStars(testimonial.rating)}
                    </div>
                    <blockquote className="text-xl text-center italic text-charcoal mb-6">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="text-center">
                      <p className="font-semibold text-charcoal">{testimonial.author}</p>
                      <p className="text-charcoal/70">{testimonial.company}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
          
          {/* Navigation dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`h-3 w-3 rounded-full ${
                  index === activeIndex ? 'bg-warm-yellow' : 'bg-soft-white/30'
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
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

export default Testimonials;
