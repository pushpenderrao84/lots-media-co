import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

const CookiePolicy = () => {
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
                <BreadcrumbPage>Cookie Policy</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        
        <h1 className="text-3xl font-bold mb-8">Cookie Policy</h1>
        
        <div className="prose max-w-none">
          <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">1. What Are Cookies</h2>
          <p className="mb-4">
            Cookies are small pieces of text sent by your web browser by a website you visit. A cookie file is stored in your web browser and allows the service or a third-party to recognize you and make your next visit easier and more useful to you.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">2. How We Use Cookies</h2>
          <p className="mb-4">
            We use cookies for a variety of reasons detailed below:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>Essential cookies:</strong> These cookies are essential to provide you with services available through our website and to enable you to use some of its features.</li>
            <li><strong>Analytics cookies:</strong> These cookies allow us to collect information about how you use our website, which pages you visited and which links you clicked on. This helps us to improve our website and tailor it to user needs.</li>
            <li><strong>Preference cookies:</strong> These cookies allow our website to remember choices you have made in the past, like what language you prefer or what your user name and password are so you can automatically log in.</li>
            <li><strong>Marketing cookies:</strong> These cookies are used to track visitors across websites. The intention is to display ads that are relevant and engaging for the individual user.</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Types of Cookies We Use</h2>
          <p className="mb-4">
            <strong>Session Cookies:</strong> These cookies are temporary and expire once you close your browser (or once your session ends).
          </p>
          <p className="mb-4">
            <strong>Persistent Cookies:</strong> These cookies remain on your hard drive until you erase them or they expire.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">4. How to Control Cookies</h2>
          <p className="mb-4">
            Most web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer. This may prevent you from taking full advantage of the website.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Third-Party Cookies</h2>
          <p className="mb-4">
            In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the website, deliver advertisements on and through the website, and so on.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">6. More Information</h2>
          <p className="mb-4">
            If you are looking for more information about cookies and how they impact your online activities, you may visit:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>All About Cookies: <a href="https://www.allaboutcookies.org/" className="text-agency-blue hover:underline">https://www.allaboutcookies.org/</a></li>
            <li>Network Advertising Initiative: <a href="https://www.networkadvertising.org/" className="text-agency-blue hover:underline">https://www.networkadvertising.org/</a></li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Contact Us</h2>
          <p className="mb-4">
            If you have any questions about our Cookie Policy, please contact us at:
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

export default CookiePolicy;
