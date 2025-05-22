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
            <li><b>Social Media Data</b> when you interact with our social handles, including likes, comments, or shares.</li>
            <li><b>Marketing Preferences</b> and response to promotional campaigns.</li>
          </ul>
          <p className="mt-6 text-lg text-charcoal/80 max-w-lg">
            In cases where you participate in contests, campaigns, collaborations, or job/internship opportunities, we may collect additional information required for such engagements.
          </p>

          <h4 className="text-2xl font-semibold mt-8 mb-4">Use of Your Information</h4>
          <p className="mt-6 text-lg text-charcoal/80 max-w-lg">
            The data we collect is used for purposes including but not limited to:
          </p>
          <ul className="mt-6 text-lg text-charcoal/80 max-w-lg">
            <li>Operating and maintaining our services and content platforms.</li>
            <li>Personalizing your experience and content delivery.</li>
            <li>Improving and analyzing user engagement, trends, and performance.</li>
            <li>Sending service-related notifications, announcements, or support information.</li>
            <li>Delivering newsletters, offers, event invites, or promotional content (with opt-out available).</li>
            <li>Fulfilling our legal, compliance, or security obligations.</li>
          </ul>
          <p className="mt-6 text-lg text-charcoal/80 max-w-lg">
            We may also use aggregated or anonymized data for research, performance metrics, and business development.
          </p>
          
          <h4 className="text-2xl font-semibold mt-8 mb-4">Sharing of Your Information</h4>
          <p className="mt-6 text-lg text-charcoal/80 max-w-lg">
            We do not sell or rent your personal information. However, we may share it with:
          </p>
          <ul className="mt-6 text-lg text-charcoal/80 max-w-lg">
            <li><b>Internal Teams and Affiliates</b> within LOTS Media Co. for operations and insights.</li>
            <li><b>Service Providers and Partners</b> (e.g., hosting providers, analytics platforms, email marketing services) who assist in delivering our services.</li>
            <li><b>Legal and Regulatory Authorities</b> if required by law or to protect our rights, users, and services.</li>
            <li><b>Communications</b> when you contact us or respond to our surveys or forms.</li>
            <li><b>Potential Acquirers or Partners</b> in case of a merger, acquisition, or reorganization.</li>
          </ul>
          <p className="mt-6 text-lg text-charcoal/80 max-w-lg">
            All such disclosures are made with appropriate data protection and confidentiality agreements in place.
          </p>

          <h4 className="text-2xl font-semibold mt-8 mb-4">Cookies and Tracking Technologies</h4>
          <p className="mt-6 text-lg text-charcoal/80 max-w-lg">
            We use cookies, pixels, and similar tools to:
          </p>
          <ul className="mt-6 text-lg text-charcoal/80 max-w-lg">
            <li>Operating and maintaining our services and content platforms.</li>
            <li>Personalizing your experience and content delivery.</li>
            <li>Improving and analyzing user engagement, trends, and performance.</li>
            <li>Sending service-related notifications, announcements, or support information.</li>
            <li>Delivering newsletters, offers, event invites, or promotional content (with opt-out available).</li>
            <li>Fulfilling our legal, compliance, or security obligations.</li>
          </ul>
          <p className="mt-6 text-lg text-charcoal/80 max-w-lg">
            We may also use aggregated or anonymized data for research, performance metrics, and business development.
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
