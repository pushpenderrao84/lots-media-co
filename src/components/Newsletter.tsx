
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail, CheckCircle } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { sendEmailJS, formatNewsletterEmail } from '../utils/emailService';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    
    try {
      const emailData = formatNewsletterEmail(email);
      const emailSent = await sendEmailJS(emailData, 'newsletter');
      
      if (emailSent) {
        setShowSuccess(true);
        toast({
          title: "Success!",
          description: "You've been subscribed to our newsletter.",
        });
        
        // Reset form and hide success message after 3 seconds
        setTimeout(() => {
          setShowSuccess(false);
          setEmail('');
        }, 3000);
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to subscribe. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (showSuccess) {
    return (
      <div className="bg-charcoal/5 p-6 rounded-lg text-center">
        <div className="bg-warm-yellow rounded-full p-3 mx-auto mb-3 w-fit">
          <CheckCircle className="h-5 w-5 text-charcoal" />
        </div>
        <h3 className="text-lg font-semibold mb-2">Subscribed!</h3>
        <p className="text-soft-white/70 text-sm">
          Thank you for subscribing to our newsletter.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-charcoal/5 p-6 rounded-lg">
      <h3 className="text-lg font-semibold mb-3 flex items-center">
        <Mail className="h-5 w-5 mr-2 text-warm-yellow" />
        Newsletter
      </h3>
      <p className="text-soft-white/70 mb-4 text-sm">
        Subscribe to our newsletter for latest design tips, trends & special offers.
      </p>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 text-charcoal/80 placeholder:text-charcoal/50"
          required
        />
        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="bg-warm-yellow text-charcoal hover:bg-charcoal hover:text-soft-white hover:border-soft-white border border-transparent transition-all duration-300"
        >
          {isSubmitting ? "..." : "Subscribe"}
        </Button>
      </form>
    </div>
  );
};

export default Newsletter;
