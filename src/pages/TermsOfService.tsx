import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto px-4 py-20 flex-grow">
               <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
          Terms of <span className="text-warm-yellow">Service</span><br />
        </h1>
          <p className="mt-6 text-charcoal/80 ">
            Last updated: {new Date().toLocaleDateString('en-GB')}
          </p>
        
        <div className="max-w-none">
            <p className="mt-6 text-charcoal/80">
              This is an agreement between you (“you” or “Client”) and LOTS Media (“we,” “us,” or “LOTS Media”). Please read these Terms of Use carefully before using our graphic design services. By placing an order or using any of our services, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our services.
            </p>
          
          <h2 className="font-semibold mt-8 mb-4">Services Provided</h2>
          <p className="mt-6 text-charcoal/80 ">
            LOTS Media specializes in creating custom graphic designs for social media, content creators, and businesses. Our services include designing digital graphics, social media posts, banners, logos, and other creative visual content based on your requirements. You acknowledge that these services are provided for a fee, payable according to the agreed terms at the time of ordering.
          </p>

          <h2 className="font-semibold mt-8 mb-4">Use of Services</h2>
          <p className="mt-6 text-charcoal/80 ">
            <strong>a. Account and Payments:</strong> To use LOTS Media’s services, you may be required to provide accurate billing information. Payments for design projects must be completed as per the payment schedule agreed upon. Failure to pay may result in suspension or termination of services.
          </p>
          <p className="mt-6 text-charcoal/80 ">
            <strong>b. Design Ownership:</strong> Upon full payment, you will receive the rights to use the delivered graphic designs for your intended purpose. LOTS Media retains the right to display the work in our portfolio or marketing materials unless you explicitly request otherwise.
          </p>
          <p className="mt-6 text-charcoal/80 ">
            <strong>c. Revisions:</strong> We offer design revisions as agreed in the project scope. Additional revisions beyond the agreed number may incur extra charges.
          </p>
          
          <h2 className="font-semibold mt-8 mb-4">Client Responsibilities</h2>
          <p className="mt-6 text-charcoal/80 ">
            You agree to provide all necessary materials, information, and approvals promptly to enable us to complete your project. You warrant that all materials you provide do not infringe any third-party rights and comply with applicable laws.
          </p>

          <h2 className="font-semibold mt-8 mb-4">Availability and Modifications</h2>
          <p className="mt-6 text-charcoal/80 ">
            LOTS Media may update, modify, or discontinue any service or feature at any time without prior notice. We reserve the right to amend these Terms by posting the updated version on our website. Continued use of our services after changes constitutes acceptance of the revised Terms.
          </p>

          <h2 className="font-semibold mt-8 mb-4">Intellectual Property and Content</h2>
          <p className="mt-6 text-charcoal/80 ">
            a. You represent and warrant that any content or materials you submit to LOTS Media do not violate any copyrights, trademarks, or other intellectual property rights of third parties.
          </p>
          <p className="mt-6 text-charcoal/80 ">
            b. LOTS Media retains ownership of all preliminary concepts, source files, and unused designs unless otherwise agreed in writing.
          </p>

          <h2 className="font-semibold mt-8 mb-4">Termination</h2>
          <p className="mt-6 text-charcoal/80 ">
            We may terminate or suspend your access to our services immediately if you breach these Terms. Upon termination, all unpaid fees shall become immediately due.
          </p>

          <h2 className="font-semibold mt-8 mb-4">Disclaimers and Limitation of Liability</h2>
          <p className="mt-6 text-charcoal/80 ">
            a. LOTS Media provides services “as is” and makes no warranties, express or implied, regarding the quality or suitability of our designs for your particular needs.
          </p>
          <p className="mt-6 text-charcoal/80 ">
            b. Except where prohibited by law, our liability arising from or related to the services shall be limited to the amount paid by you for the specific design project.
          </p>

          <h2 className="font-semibold mt-8 mb-4">Governing Laws and Disputes</h2>
          <p className="mt-6 text-charcoal/80 ">
            These Terms are governed by the laws of India. Any disputes arising from these Terms or the use of our services will be resolved through amicable negotiations or, if necessary, through binding arbitration.
          </p>
          
          <h2 className="font-semibold mt-8 mb-4">Contact Us</h2>
          <p className="mt-6 text-charcoal/80 ">
            For any questions, concerns, or grievances related to these Terms of Service, please contact:
          </p>
          <p className="mt-6 text-charcoal/80 ">
            <strong>LOTS Media Co.</strong> <br/>
            Email: lotsmediaco@gmail.com<br/>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsOfService;
