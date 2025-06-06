
import emailjs from '@emailjs/browser';

interface EmailData {
  to: string;
  subject: string;
  body: string;
}

// EmailJS configuration - you'll need to set these up in EmailJS dashboard
const EMAILJS_SERVICE_ID = 'service_lotsmedia'; // Replace with your EmailJS service ID
const EMAILJS_TEMPLATE_ID = 'template_lotsmedia'; // Replace with your EmailJS template ID
const EMAILJS_PUBLIC_KEY = 'your_public_key'; // Replace with your EmailJS public key

export const sendEmailJS = async (templateParams: any): Promise<boolean> => {
  try {
    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    );
    return true;
  } catch (error) {
    console.error('Failed to send email:', error);
    return false;
  }
};

export const sendEmail = async (data: EmailData): Promise<boolean> => {
  try {
    // Create mailto link with pre-filled data
    const mailtoLink = `mailto:${data.to}?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(data.body)}`;
    
    // Open default email client
    window.open(mailtoLink);
    
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
};

export const formatContactEmail = (formData: any) => {
  return {
    to_name: 'LOTS Media',
    to_email: 'lotsmediaco@gmail.com',
    from_name: formData.name,
    from_email: formData.email,
    phone: formData.phone || 'Not provided',
    subject: formData.subject,
    message: formData.message,
    time: new Date().toLocaleString()
    template_type: 'contact'
  };
};

export const formatFeedbackEmail = (formData: any) => {
  return {
    to_name: 'LOTS Media',
    to_email: 'lotsmediaco@gmail.com',
    from_name: formData.name,
    from_email: formData.email,
    phone: formData.phone || 'Not provided',
    service: formData.service,
    rating: formData.rating,
    experience: formData.experience || 'Not provided',
    how_found: formData.howFound || 'Not provided',
    recommend_probability: formData.recommendProbability || 'Not provided',
    best_aspect: formData.bestAspect || 'Not provided',
    worst_aspect: formData.worstAspect || 'Not provided',
    improvements: formData.improvements || 'Not provided',
    additional_feedback: formData.additionalFeedback || 'Not provided',
    template_type: 'feedback'
  };
};

export const formatNewsletterEmail = (email: string) => {
  return {
    to_name: 'LOTS Media',
    to_email: 'lotsmediaco@gmail.com',
    subscriber_email: email,
    date: new Date().toLocaleDateString(),
    template_type: 'newsletter'
  };
};

export const formatBookingEmail = (formData: any) => {
  return {
    to_name: 'LOTS Media',
    to_email: 'lotsmediaco@gmail.com',
    from_name: formData.name,
    from_email: formData.email,
    phone: formData.phone || 'Not provided',
    package_category: formData.packageCategory,
    package_name: formData.packageName,
    custom_message: formData.customMessage || 'No additional message',
    template_type: 'booking'
  };
};
