
interface EmailData {
  to: string;
  subject: string;
  body: string;
}

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
  const subject = `Contact Form Submission: ${formData.subject}`;
  const body = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}
Subject: ${formData.subject}

Message:
${formData.message}
  `;
  
  return {
    to: 'lotsmediaco@gmail.com',
    subject,
    body
  };
};

export const formatFeedbackEmail = (formData: any) => {
  const subject = `Feedback Submission from ${formData.name}`;
  const body = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}
Service Used: ${formData.service}
Rating: ${formData.rating}/5 stars

Experience:
${formData.experience || 'Not provided'}

How they found us: ${formData.howFound || 'Not provided'}
Recommendation Probability: ${formData.recommendProbability || 'Not provided'}

What we do best:
${formData.bestAspect || 'Not provided'}

What we could improve:
${formData.worstAspect || 'Not provided'}

Improvement Suggestions:
${formData.improvements || 'Not provided'}

Additional Feedback:
${formData.additionalFeedback || 'Not provided'}
  `;
  
  return {
    to: 'lotsmediaco@gmail.com',
    subject,
    body
  };
};

export const formatNewsletterEmail = (email: string) => {
  const subject = `Newsletter Subscription Request`;
  const body = `
New newsletter subscription request:

Email: ${email}
Date: ${new Date().toLocaleDateString()}
  `;
  
  return {
    to: 'lotsmediaco@gmail.com',
    subject,
    body
  };
};
