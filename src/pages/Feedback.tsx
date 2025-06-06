import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Star } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { sendEmailJS, formatFeedbackEmail } from '../utils/emailService';

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    experience: '',
    rating: 0,
    improvements: '',
    howFound: '',
    recommendProbability: '',
    bestAspect: '',
    worstAspect: '',
    additionalFeedback: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSelectChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleRatingClick = (rating: number) => {
    setFormData(prev => ({
      ...prev,
      rating
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.service || !formData.rating) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const emailData = formatFeedbackEmail(formData);
      const emailSent = await sendEmailJS(emailData, 'feedback');
      
      if (emailSent) {
        toast({
          title: "Success!",
          description: "Thank you for your feedback. We appreciate your input!",
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          experience: '',
          rating: 0,
          improvements: '',
          howFound: '',
          recommendProbability: '',
          bestAspect: '',
          worstAspect: '',
          additionalFeedback: ''
        });
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit feedback. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />
      <section className="section-padding bg-soft-white pt-24">
        <div className="container-padding max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Your <span className="text-warm-yellow">Feedback</span> Matters
            </h1>
            <p className="text-charcoal/80 max-w-2xl mx-auto">
              Help us improve our services by sharing your experience. Your insights are valuable to us and help us serve you better.
            </p>
          </div>

          <Card className="shadow-lg border-none">
            <CardHeader>
              <CardTitle className="text-2xl">Feedback Form</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

                {/* Service Information */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    Which service did you use? <span className="text-red-500">*</span>
                  </label>
                  <Select onValueChange={(value) => handleSelectChange('service', value)} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="social-media">Social Media Design</SelectItem>
                      <SelectItem value="branding">Branding & Business</SelectItem>
                      <SelectItem value="youtube">YouTube & Creator</SelectItem>
                      <SelectItem value="retainer">Monthly Retainer</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Rating */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    Overall Rating <span className="text-red-500">*</span>
                  </label>
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => handleRatingClick(star)}
                        className={`p-1 transition-colors ${
                          star <= formData.rating ? 'text-warm-yellow' : 'text-gray-300'
                        }`}
                      >
                        <Star className="h-8 w-8 fill-current" />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Experience */}
                <div className="space-y-2">
                  <label htmlFor="experience" className="text-sm font-medium">
                    How was your experience with our service?
                  </label>
                  <Textarea
                    id="experience"
                    placeholder="Tell us about your experience..."
                    rows={4}
                    value={formData.experience}
                    onChange={handleInputChange}
                  />
                </div>

                {/* How they found us */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    How did you get to know about us?
                  </label>
                  <Select onValueChange={(value) => handleSelectChange('howFound', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="social-media">Social Media</SelectItem>
                      <SelectItem value="search-engine">Search Engine</SelectItem>
                      <SelectItem value="referral">Friend/Colleague Referral</SelectItem>
                      <SelectItem value="website">Website</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Recommendation probability */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    How likely are you to recommend us to others?
                  </label>
                  <Select onValueChange={(value) => handleSelectChange('recommendProbability', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select probability" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="very-likely">Very Likely</SelectItem>
                      <SelectItem value="likely">Likely</SelectItem>
                      <SelectItem value="neutral">Neutral</SelectItem>
                      <SelectItem value="unlikely">Unlikely</SelectItem>
                      <SelectItem value="very-unlikely">Very Unlikely</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Best and worst aspects */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="bestAspect" className="text-sm font-medium">
                      What do we do best?
                    </label>
                    <Textarea
                      id="bestAspect"
                      placeholder="Tell us what you liked most..."
                      rows={3}
                      value={formData.bestAspect}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="worstAspect" className="text-sm font-medium">
                      What could we improve?
                    </label>
                    <Textarea
                      id="worstAspect"
                      placeholder="Tell us what needs improvement..."
                      rows={3}
                      value={formData.worstAspect}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                {/* Improvements */}
                <div className="space-y-2">
                  <label htmlFor="improvements" className="text-sm font-medium">
                    How can we improve our services?
                  </label>
                  <Textarea
                    id="improvements"
                    placeholder="Your suggestions for improvement..."
                    rows={4}
                    value={formData.improvements}
                    onChange={handleInputChange}
                  />
                </div>

                {/* Additional feedback */}
                <div className="space-y-2">
                  <label htmlFor="additionalFeedback" className="text-sm font-medium">
                    Any other feedback?
                  </label>
                  <Textarea
                    id="additionalFeedback"
                    placeholder="Share any additional thoughts..."
                    rows={4}
                    value={formData.additionalFeedback}
                    onChange={handleInputChange}
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-warm-yellow text-charcoal hover:bg-charcoal hover:text-soft-white transition-colors px-6 py-6 h-auto text-base"
                >
                  {isSubmitting ? "Submitting..." : "Submit Feedback"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Feedback;
