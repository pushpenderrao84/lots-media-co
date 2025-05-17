
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

// Portfolio data
const portfolioItems = [
  {
    id: 1,
    title: "Instagram Post Series",
    category: "Social Media",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8d2ViLWRlc2lnbnx8fHx8fDE2ODQxNTA1NTc&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=600",
    description: "A series of Instagram posts designed for a lifestyle brand focusing on minimalist aesthetics and engaging content."
  },
  {
    id: 2,
    title: "Business Logo Design",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8d2ViLWRlc2lnbnx8fHx8fDE2ODQxNTA1MDc&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=600",
    description: "Modern logo design for a tech startup, focusing on simplicity, memorability, and brand values."
  },
  {
    id: 3,
    title: "YouTube Thumbnail Series",
    category: "Content Creator",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8cHJvZ3JhbW1pbmcgZGVzaWdufHx8fHx8MTY4NDE1MDU5NQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=600",
    description: "Eye-catching YouTube thumbnails that drive clicks and maintain consistent branding across a creator's channel."
  },
  {
    id: 4,
    title: "Product Promotion Carousel",
    category: "Social Media",
    image: "https://images.unsplash.com/photo-1541462608143-67571c6738dd?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8c29jaWFsIG1lZGlhIGRlc2lnbnx8fHx8fDE2ODQxNTA2Mzc&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=600",
    description: "Multi-slide Instagram carousel designed to showcase product features and benefits with engaging visuals."
  },
  {
    id: 5,
    title: "Brand Identity Package",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8YnJhbmQgZGVzaWdufHx8fHx8MTY4NDE1MDY4OQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=600",
    description: "Complete branding package including logo, business cards, letterheads, and brand guidelines."
  },
  {
    id: 6,
    title: "Channel Graphics Pack",
    category: "Content Creator",
    image: "https://images.unsplash.com/photo-1579412690850-bd41cd0af397?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8eW91dHViZSB0aHVtYm5haWx8fHx8fHwxNjg0MTUwNzM4&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=600",
    description: "Comprehensive graphics package for YouTube channels including banner, thumbnails, and lower thirds."
  },
  {
    id: 7,
    title: "Event Promotion Material",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1506097425191-7ad538b29cef?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8ZXZlbnQgZmx5ZXJ8fHx8fHwxNjg0MTUwNzg2&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=600",
    description: "Promotional materials for a corporate event including digital invitations, banners, and printed collateral."
  },
  {
    id: 8,
    title: "Story Template Collection",
    category: "Social Media",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8aW5zdGFncmFtIHN0b3J5fHx8fHx8MTY4NDE1MDgyMw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=600",
    description: "Collection of customizable Instagram story templates designed for consistent brand storytelling."
  },
  {
    id: 9,
    title: "App UI Design",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8dWkgZGVzaWdufHx8fHx8MTY4NDE1MDg2OA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=600",
    description: "Clean, intuitive UI design for a mobile application, focusing on user experience and accessibility."
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
