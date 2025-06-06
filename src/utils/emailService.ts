
import emailjs from '@emailjs/browser';

interface EmailData {
  to: string;
  subject: string;
  body: string;
}

// EmailJS configuration - you'll need to set these up in EmailJS dashboard
const EMAILJS_SERVICE_ID = 'service_lotsmedia'; // Replace with your EmailJS service ID
const EMAILJS_PUBLIC_KEY = '8yo6AtiVXRPHPSQQd'; // Replace with your EmailJS public key

// Since you're using a single template, we'll use the same template ID for all forms
const EMAILJS_TEMPLATE_ID = 'template_lotsmedia'; // Replace with your universal template ID

export const sendEmailJS = async (templateParams: any, templateType: 'contact' | 'feedback' | 'newsletter' | 'booking'): Promise<boolean> => {
  try {
    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID, // Using single template for all
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
    phone: formData.phone || '',
    subject: formData.subject,
    message: formData.message,
    time: new Date().toLocaleString(),
    template_type: 'Contact'
  };
};

export const formatFeedbackEmail = (formData: any) => {
  return {
    to_name: 'LOTS Media',
    to_email: 'lotsmediaco@gmail.com',
    from_name: formData.name,
    from_email: formData.email,
    phone: formData.phone || '',
    service: formData.service,
    rating: formData.rating,
    experience: formData.experience || '',
    how_found: formData.howFound || '',
    recommend_probability: formData.recommendProbability || '',
    best_aspect: formData.bestAspect || '',
    worst_aspect: formData.worstAspect || '',
    improvements: formData.improvements || '',
    additional_feedback: formData.additionalFeedback || '',
    time: new Date().toLocaleString(),
    template_type: 'Feedback'
  };
};

export const formatNewsletterEmail = (email: string) => {
  return {
    to_name: 'LOTS Media',
    to_email: 'lotsmediaco@gmail.com',
    from_email: email, // Changed from subscriber_email to from_email to match template
    time: new Date().toLocaleString(),
    template_type: 'Newsletter'
  };
};

export const formatBookingEmail = (formData: any) => {
  return {
    to_name: 'LOTS Media',
    to_email: 'lotsmediaco@gmail.com',
    from_name: formData.name,
    from_email: formData.email,
    phone: formData.phone || '',
    package_category: formData.packageCategory,
    package_name: formData.packageName,
    custom_message: formData.customMessage || '',
    time: new Date().toLocaleString(),
    template_type: 'Booking'
  };
};
