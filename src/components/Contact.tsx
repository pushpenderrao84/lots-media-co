import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Send, Instagram, Twitter, X } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-soft-white pt-8">
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
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Full Name
                    </label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email Address
                    </label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input id="subject" placeholder="Project inquiry" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project..."
                    rows={6}
                  />
                </div>
                <Button type="submit" className="w-full bg-warm-yellow text-charcoal hover:bg-warm-yellow/90">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
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
                    <Mail className="h-5 w-5 text-charcoal group-hover:text-warm-yellow transition-colors" />
                  </div>
                  <div>
                    <p className="font-medium">Email Address</p>
                    <p className="text-charcoal/70">lotsmediaco@gmail.com</p>
                  </div>
                </a>
                
                <a href="https://instagram.com/lotsmediaco" target="_blank" rel="noopener noreferrer" className="flex items-center group">
                  <div className="bg-warm-yellow p-3 rounded-full mr-4 group-hover:bg-charcoal transition-colors">
                    <Instagram className="h-5 w-5 text-charcoal group-hover:text-warm-yellow transition-colors" />
                  </div>
                  <div>
                    <p className="font-medium">Instagram</p>
                    <p className="text-charcoal/70">@lotsmediaco</p>
                  </div>
                  </a>

                <a href="https://x.com/lotsmediaco" target="_blank" rel="noopener noreferrer" className="flex items-center group">
                  <div className="bg-warm-yellow p-3 rounded-full mr-4 group-hover:bg-charcoal transition-colors">
                    <Twitter className="h-5 w-5 text-charcoal group-hover:text-warm-yellow transition-colors" />
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
};

export default Contact;
