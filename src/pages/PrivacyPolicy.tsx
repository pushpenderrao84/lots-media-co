import React from 'react'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const PrivacyPolicy = () => {
  return (
    <>
      {/* ✅ Navbar from original website */}
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-4 py-16 text-gray-800">
        <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>

        <p className="mb-6">
          At Lots Media Visions, we value your privacy and are committed to
          protecting your personal information. This Privacy Policy explains how
          we collect, use, and protect your data when you use our website and services.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">1. Information We Collect</h2>
        <p className="mb-4">
          We may collect personal information that you voluntarily provide to us,
          such as your name, email address, and message when you contact us or
          subscribe to our services.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">2. How We Use Your Information</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>To respond to inquiries and provide customer support.</li>
          <li>To improve our website and user experience.</li>
          <li>To send you important updates or promotional materials (only with your consent).</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">3. Sharing Your Information</h2>
        <p className="mb-4">
          We do not sell, rent, or share your personal information with third parties,
          except as required by law or to fulfill our services (e.g., third-party
          tools used for analytics or hosting).
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">4. Cookies and Tracking</h2>
        <p className="mb-4">
          Our website may use cookies and similar technologies to enhance your
          experience. You can control cookies through your browser settings.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">5. Data Security</h2>
        <p className="mb-4">
          We implement appropriate technical and organizational measures to protect
          your data from unauthorized access, disclosure, or misuse.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">6. Your Rights</h2>
        <p className="mb-4">
          You have the right to access, correct, or delete your personal information
          at any time. To exercise these rights, please contact us.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">7. Changes to This Policy</h2>
        <p className="mb-4">
          We may update this Privacy Policy occasionally. Any changes will be posted
          on this page with the updated revision date.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">8. Contact Us</h2>
        <p className="mb-4">
          If you have any questions or concerns about this Privacy Policy,
          feel free to reach out to us through our contact page.
        </p>

        <p className="mt-10 text-sm text-gray-500">
          Last updated: May 17, 2025
        </p>
      </main>

      {/* ✅ Footer from original website */}
      <Footer />
    </>
  )
}

export default PrivacyPolicy
