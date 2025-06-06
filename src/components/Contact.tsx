import React, { useState } from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Send, Instagram, Twitter, Phone } from 'lucide-react';
import { cn } from "@/lib/utils";
import ContactSuccess from './ContactSuccess';
import { useToast } from "@/hooks/use-toast";
import { sendEmailJS, formatContactEmail } from '../utils/emailService';

interface ContactProps {
  isHomePage?: boolean;
}

const Contact = ({ isHomePage = false }: ContactProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const emailData = formatContactEmail(formData);
      const emailSent = await sendEmailJS(emailData, 'contact');
      
      if (emailSent) {
        setIsSubmitting(false);
        setShowSuccess(true);
        
        toast({
          title: "Success!",
          description: "Your message has been sent. We'll get back to you soon!",
        });
        
        // Reset form and hide success message after 5 seconds
        setTimeout(() => {
          setShowSuccess(false);
          setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
          });
        }, 5000);
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      setIsSubmitting(false);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive"
      });
    }
  };

  const content = (
    <section 
      id="contact" 
      className={cn(
        "section-padding bg-soft-white",
        isHomePage ? "pt-8" : "pt-24"
      )}
    >
      <div className="container-padding max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get in <span className="text-warm-yellow">Touch</span>
          </h2>
          <p className="text-charcoal/80 max-w-2xl mx-auto">
            Let's work together. Reach out to start your project and bring your vision to life.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact form */}
          <Card className="shadow-lg border-none">
            <CardContent className="pt-8">
              {showSuccess ? (
                <ContactSuccess />
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <Input 
                        id="name" 
                        placeholder="Your name" 
                        value={formData.name}
                        onChange={handleInputChange}
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="your@email.com" 
                        value={formData.email}
                        onChange={handleInputChange}
                        required 
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Phone Number (Optional)
                    </label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      placeholder="+1 (555) 123-4567" 
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <Input 
                      id="subject" 
                      placeholder="Project inquiry" 
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project..."
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-warm-yellow text-charcoal hover:bg-charcoal hover:text-soft-white transition-colors px-6 py-6 h-auto text-base"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
          
          {/* Contact info */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <p className="mb-8 text-charcoal/80">
                Feel free to reach out through any of these contacts. We're always eager to discuss new projects and opportunities.
              </p>
              
              <div className="space-y-6">
                <a href="mailto:lotsmediaco@gmail.com" className="flex items-center group">
                  <div className="bg-warm-yellow p-3 rounded-full mr-4 group-hover:bg-charcoal transition-colors">
                    <Mail className="h-5 w-5 text-charcoal group-hover:text-soft-white transition-colors" />
                  </div>
                  <div>
                    <p className="font-medium">Email Address</p>
                    <p className="text-charcoal/70">lotsmediaco@gmail.com</p>
                  </div>
                </a>
                
                <a href="https://instagram.com/lotsmediaco" target="_blank" rel="noopener noreferrer" className="flex items-center group">
                  <div className="bg-warm-yellow p-3 rounded-full mr-4 group-hover:bg-charcoal transition-colors">
                    <Instagram className="h-5 w-5 text-charcoal group-hover:text-soft-white transition-colors" />
                  </div>
                  <div>
                    <p className="font-medium">Instagram</p>
                    <p className="text-charcoal/70">@lotsmediaco</p>
                  </div>
                </a>

                <a href="https://x.com/lotsmediaco" target="_blank" rel="noopener noreferrer" className="flex items-center group">
                  <div className="bg-warm-yellow p-3 rounded-full mr-4 group-hover:bg-charcoal transition-colors">
                    <Twitter className="h-5 w-5 text-charcoal group-hover:text-soft-white transition-colors" />
                  </div>
                  <div>
                    <p className="font-medium">Twitter</p>
                    <p className="text-charcoal/70">@lotsmediaco</p>
                  </div>
                </a>
              </div>
            </div>
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

export default Contact;
