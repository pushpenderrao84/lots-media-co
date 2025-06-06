
import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { sendEmailJS, formatBookingEmail } from '../utils/emailService';
import { CheckCircle } from 'lucide-react';

interface BookingDialogProps {
  isOpen: boolean;
  onClose: () => void;
  packageName: string;
  packageCategory: string;
}

const BookingDialog = ({ isOpen, onClose, packageName, packageCategory }: BookingDialogProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    customMessage: ''
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
    if (!formData.name || !formData.email) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const emailData = formatBookingEmail({
        ...formData,
        packageName,
        packageCategory
      });
      
      const emailSent = await sendEmailJS(emailData, 'booking');
      
      if (emailSent) {
        setShowSuccess(true);
        toast({
          title: "Booking Request Sent!",
          description: "We'll contact you soon. Thanks for choosing our service!",
        });
        
        // Reset form and close dialog after 3 seconds
        setTimeout(() => {
          setShowSuccess(false);
          setFormData({
            name: '',
            email: '',
            phone: '',
            customMessage: ''
          });
          onClose();
        }, 3000);
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send booking request. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Book Package</DialogTitle>
        </DialogHeader>
        
        {showSuccess ? (
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <div className="bg-warm-yellow rounded-full p-3 mb-4">
              <CheckCircle className="h-8 w-8 text-charcoal" />
            </div>
            <h3 className="text-lg font-semibold text-charcoal mb-2">Booking Request Sent!</h3>
            <p className="text-charcoal/80 text-sm">
              We'll contact you soon. Thanks for choosing our service!
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="bg-charcoal/5 p-3 rounded-md">
              <p className="text-sm font-medium text-charcoal">
                Package: {packageCategory} - {packageName}
              </p>
            </div>
            
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
              <label htmlFor="customMessage" className="text-sm font-medium">
                Custom Message (Optional)
              </label>
              <Textarea
                id="customMessage"
                placeholder="Any specific requirements or questions..."
                rows={3}
                value={formData.customMessage}
                onChange={handleInputChange}
              />
            </div>
            
            <div className="flex gap-2 pt-2">
              <Button 
                type="button" 
                variant="outline" 
                onClick={onClose}
                className="flex-1 hover:bg-charcoal hover:text-soft-white"
              >
                Cancel
              </Button>
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="flex-1 bg-warm-yellow text-charcoal hover:bg-charcoal hover:text-soft-white transition-colors"
              >
                {isSubmitting ? "Sending..." : "Send Request"}
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default BookingDialog;
