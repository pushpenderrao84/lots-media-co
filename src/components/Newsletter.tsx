
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Success!",
        description: "You've been subscribed to our newsletter.",
      });
      setEmail('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="bg-charcoal/5 p-6 rounded-lg">
      <h3 className="text-lg font-semibold mb-3 flex items-center">
        <Mail className="h-5 w-5 mr-2 text-warm-yellow" />
        Newsletter
      </h3>
      <p className="text-soft-white/70 mb-4">
        Stay updated with our latest design tips, trends & special offers.
      </p>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1"
          required
        />
        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="bg-warm-yellow text-charcoal hover:bg-charcoal hover:text-soft-white hover:border-soft-white transition-colors"
        >
          {isSubmitting ? "..." : "Subscribe"}
        </Button>
      </form>
    </div>
  );
};

export default Newsletter;
