
import React from 'react';
import { CheckCircle } from 'lucide-react';

const ContactSuccess = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-6 text-center">
      <div className="bg-warm-yellow rounded-full p-4 mb-6">
        <CheckCircle className="h-12 w-12 text-charcoal" />
      </div>
      <h3 className="text-2xl font-bold text-charcoal mb-4">Message Sent!</h3>
      <p className="text-charcoal/80 max-w-md">
        Thank you for reaching out. We'll respond to your message as soon as possible.
      </p>
    </div>
  );
};

export default ContactSuccess;
