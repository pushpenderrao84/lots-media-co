import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto px-4 py-20 flex-grow">
               <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
          <span className="text-warm-yellow">Cookie</span> Policy<br />
        </h1>
          <p className="mt-6 text-charcoal/80 ">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        
        <div className="max-w-none">
            <p className="mt-6 text-charcoal/80">
              LOTS Media Co. ("LOTS Media", "we", "us", or "our") is committed to protecting your privacy and ensuring transparency about how we use cookies and similar technologies when you visit our website or engage with our digital platforms (collectively referred to as the "Platform").
            </p>
            <p className="mt-6 text-charcoal/80 ">
              This Cookie Policy explains what cookies are, how we use them, and the choices you have in managing them.
            </p>
          
          <h2 className="font-semibold mt-8 mb-4">What Are Cookies?</h2>
          <p className="mt-6 text-charcoal/80 ">
            Cookies are small text files that are stored on your browser or device when you visit a website. They help websites remember your preferences, enhance user experience, and provide relevant content or advertising. Cookies can be session-based (deleted when you close the browser) or persistent (remain until they expire or are deleted).
          </p>
          <p className="mt-6 text-charcoal/80 ">
            We also use similar tracking technologies such as pixels, web beacons, local storage, and scripts which function similarly.
          </p>

          <h2 className="font-semibold mt-8 mb-4">Types of Cookies We Use</h2>
          <p className="mt-6 text-charcoal/80 ">
            We use the following categories of cookies on our Platform:
          </p>
          <h3 className="font-semibold mt-8 mb-4">a. Strictly Necessary Cookies</h3>
          <p className="mt-6 text-charcoal/80 ">
            These cookies are essential for the basic functioning of our website. They enable features like page navigation, access to secure areas, and protection against fraudulent activities. These cookies do not store any personally identifiable information.
          </p>
          <p className="mt-6 text-charcoal/80 ">
            Example: Remembering login sessions, language preferences, form submissions.
          </p>
          <h3 className="font-semibold mt-8 mb-4">b. Performance and Analytics Cookies</h3>
          <p className="mt-6 text-charcoal/80 ">
            These cookies help us understand how users interact with our Platform. They collect information such as page visits, bounce rates, traffic sources, and loading times to improve website performance and user experience.
          </p>
          <p className="mt-6 text-charcoal/80 ">
            Example: Google Analytics, Hotjar.
          </p>
          <h3 className="font-semibold mt-8 mb-4">c. Functionality Cookies</h3>
          <p className="mt-6 text-charcoal/80 ">
            These cookies allow us to remember your preferences and choices (like your username or region) to personalize your experience.
          </p>
          <p className="mt-6 text-charcoal/80 ">
            Example: Saving your preferred theme (light/dark), autoplay settings, or saved filters.
          </p>
          <h3 className="font-semibold mt-8 mb-4">d. Targeting and Advertising Cookies</h3>
          <p className="mt-6 text-charcoal/80 ">
            We use these cookies to deliver relevant advertisements and measure the effectiveness of our marketing campaigns. They may be set through our site by us or third-party partners (e.g., Meta, Google Ads).
          </p>
          <p className="mt-6 text-charcoal/80 ">
            Example: Showing you LOTS Media campaigns or offers on other platforms based on your interaction with us.
          </p>

          <h2 className="font-semibold mt-8 mb-4">Third-Party Cookies</h2>
          <p className="mt-6 text-charcoal/80 ">
            Some cookies may be set by trusted third-party services that appear on our website, such as embedded videos, social media sharing buttons, or analytics tools. These third parties have their own privacy policies, which we recommend you review.
          </p>
          <p className="mt-6 text-charcoal/80 ">
            Examples include: YouTube (for embedded video playback), Instagram (for feeds), Google Tag Manager, and Facebook Pixel.
          </p>

          <h2 className="font-semibold mt-8 mb-4">Managing Your Cookie Preferences</h2>
          <p className="mt-6 text-charcoal/80 ">
            You have full control over how cookies are used:
          </p>
          <ul className="list-disc pl-6 mt-6  text-charcoal/80 ">
            <li><b>Browser Settings:</b> Most browsers allow you to view, delete, and block cookies. You can modify your settings to notify you when cookies are being set or disable them entirely.</li>
            <li><b>Consent Banner:</b> When you first visit our site, you'll see a cookie consent banner. You can accept all cookies, reject non-essential ones, or customize your preferences.</li>
            <li><b>Opt-Out Tools:</b> You may opt out of targeted advertising through tools such as the Digital Advertising Alliance, Your Online Choices, or Google Ads Settings.</li>
          </ul>
          <p className="mt-6 text-charcoal/80 ">
            <b>Note:</b> Disabling certain cookies may affect the functionality and user experience of our Platform.
          </p>

          <h2 className="font-semibold mt-8 mb-4">Changes to This Policy</h2>
          <p className="mt-6 text-charcoal/80 ">
            We may update this Cookie Policy periodically to reflect changes in our practices or legal obligations. When we do, we will update the "Last Updated" date at the top of the page. We encourage you to review this policy regularly.
          </p>
          
          <h2 className="font-semibold mt-8 mb-4">Contact Us</h2>
          <p className="mt-6 text-charcoal/80 ">
            For any questions, concerns, or grievances related to this Cookie Policy or your data, please contact:
          </p>
          <p className="mt-6 text-charcoal/80 ">
            <b>LOTS Media Co.</b> <br/>
            Email: lotsmediaco@gmail.com<br/>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CookiePolicy;
