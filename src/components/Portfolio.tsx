
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

// Portfolio data
const portfolioItems = [
  {
    id: 1,
    title: "Instagram Sports Post",
    category: "Social Media",
    image: "./public/assets/Post.jpg",
    description: "A series of Instagram posts designed for a sports brand focusing on minimalist aesthetics and engaging content."
  },
  {
    id: 2,
    title: "EdTech Logo Design",
    category: "Branding",
    image: "./public/assets/Logo.jpg",
    description: "Modern logo design for a edtech startup, focusing on simplicity, memorability, and brand values."
  },
  {
    id: 3,
    title: "YouTube Thumbnail",
    category: "Content Creator",
    image: "./public/assets/Thumbnail.jpg",
    description: "Eye-catching YouTube thumbnail that drive clicks and maintain consistent branding across a creator's channel."
  }
];

const Portfolio = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Social Media', 'Branding', 'Content Creator'];
  
  const filteredItems = filter === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  return (
    <section id="portfolio" className="section-padding bg-soft-white">
      <div className="container-padding max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-warm-yellow">Portfolio</span>
          </h2>
          <p className="text-charcoal/80 max-w-2xl mx-auto">
            Explore a selection of my recent design work across various categories.
          </p>
        </div>
        
        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full transition-colors ${
                filter === category 
                  ? 'bg-warm-yellow text-charcoal' 
                  : 'bg-charcoal/5 text-charcoal/70 hover:bg-charcoal/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Portfolio grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map(item => (
            <PortfolioItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface PortfolioItemProps {
  item: {
    id: number;
    title: string;
    category: string;
    image: string;
    description: string;
  };
}

const PortfolioItem = ({ item }: PortfolioItemProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="portfolio-item group cursor-pointer">
          <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <div className="relative aspect-square">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-soft-white">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm text-soft-white/80">{item.category}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-3xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-lg overflow-hidden">
            <img 
              src={item.image} 
              alt={item.title} 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
            <p className="text-sm text-charcoal/70 mb-4">Category: {item.category}</p>
            <p className="text-charcoal/80">{item.description}</p>
            
            <div className="mt-6">
              <h4 className="font-semibold mb-2">Project Details</h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-charcoal/70">Client</p>
                  <p>Sample Client</p>
                </div>
                <div>
                  <p className="text-sm text-charcoal/70">Date</p>
                  <p>April 2025</p>
                </div>
                <div>
                  <p className="text-sm text-charcoal/70">Skills</p>
                  <p>Design, Branding</p>
                </div>
                <div>
                  <p className="text-sm text-charcoal/70">Tools</p>
                  <p>Photoshop, Figma</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Portfolio;
