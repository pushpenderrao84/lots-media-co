import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto px-4 py-12 flex-grow">
        <div className="mb-8">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Privacy Policy</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          <span className="text-warm-yellow">Privacy</span> Policy<br />
        </h1>
        
        <div className="prose max-w-none">
            <p className="mt-6 text-lg text-charcoal/80 max-w-lg">
              <b>Disclaimer:</b> In case of any discrepancy or difference, the English version will take precedence over any translation.
            </p>
            <p className="mt-6 text-lg text-charcoal/80 max-w-lg">
              LOTS Media Co. (“LOTS Media,” “we,” “us,” or “our”) values the trust you place in us and is committed to protecting your personal information. This Privacy Policy outlines how we collect, use, share, and safeguard your information through our website (www.lotsmedia.in), applications, services, and any other digital platforms operated by LOTS Media (hereinafter referred to as the “Platform”).
            </p>
            <p>
              By accessing or using our Platform, you agree to be bound by the terms of this Privacy Policy and our Terms of Use. If you do not agree, please refrain from using our services.
            </p>
          
          <h4 className="text-2xl font-semibold mt-8 mb-4">Collection of Your Information</h4>
          <p className="mt-6 text-lg text-charcoal/80 max-w-lg">
            We collect various types of personal and non-personal data to provide and enhance our services, including but not limited to:
          </p>
          <ul className="mt-6 text-lg text-charcoal/80 max-w-lg">
            <li><b>Basic Identifiers</b> such as your name, email address, phone number, and location.</li>
            <li><b>Technical Data</b> including IP address, browser type, device identifiers, and access times.</li>
            <li><b>Usage Information</b> including your interactions with our content, services, and features.</li>
            <li><b>Communications</b> when you contact us or respond to our surveys or forms.</li>
            <li>Social Media Data when you interact with our social handles, including likes, comments, or shares.</li>
            <li><b>Marketing Preferences</b> and response to promotional campaigns.</li>
          </ul>
          <p className="mt-6 text-lg text-charcoal/80 max-w-lg">
            In cases where you participate in contests, campaigns, collaborations, or job/internship opportunities, we may collect additional information required for such engagements.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">3. How We Use Your Personal Data</h2>
          <p className="mb-4">
            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
            <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
            <li>Where we need to comply with a legal obligation.</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Data Security</h2>
          <p className="mb-4">
            We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Data Retention</h2>
          <p className="mb-4">
            We will only retain your personal data for as long as reasonably necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, regulatory, tax, accounting or reporting requirements.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Your Legal Rights</h2>
          <p className="mb-4">
            Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to request access, correction, erasure, restriction, transfer, to object to processing, to portability of data and (where the lawful ground of processing is consent) to withdraw consent.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Contact Us</h2>
          <p className="mb-4">
            If you have any questions about this privacy policy or our privacy practices, please contact us at:
          </p>
          <p className="mb-4">
            Email: privacy@designflex.com<br />
            Phone: +1 (555) 123-4567<br />
            Address: 123 Design Street, Creativity City, DC 12345
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
