import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

export default function Careers() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        {/* Breadcrumb */}
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Careers</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Page Title */}
        <h1 className="text-4xl font-bold mt-8 mb-4 text-charcoal">Join the LOTS Media Team</h1>
        <p className="text-lg text-charcoal/80 mb-10 max-w-2xl">
          We're a creative powerhouse that designs bold, meaningful experiences. If you’re passionate about storytelling, design, tech, or media — we’d love to hear from you.
        </p>

        {/* Career Opportunities Section */}
        <div className="space-y-10">
          {/* Job Opening 1 */}
          <div className="bg-charcoal/5 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-2xl font-semibold text-charcoal mb-2">Graphic Designer</h2>
            <p className="text-charcoal/70 mb-3">
              Looking for someone creative with a strong portfolio in branding, social media creatives, and marketing designs.
            </p>
            <ul className="list-disc list-inside text-charcoal/70 mb-3">
              <li>Proficient in Adobe Illustrator, Photoshop, and Figma</li>
              <li>Strong understanding of design systems & visual hierarchy</li>
              <li>Experience in motion design is a plus</li>
            </ul>
            <p className="text-sm text-charcoal/60">Location: Remote · Type: Part-time / Freelance</p>
          </div>

          {/* Job Opening 2 */}
          <div className="bg-charcoal/5 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-2xl font-semibold text-charcoal mb-2">Video Editor</h2>
            <p className="text-charcoal/70 mb-3">
              Join our storytelling team to bring ideas to life through powerful edits and motion.
            </p>
            <ul className="list-disc list-inside text-charcoal/70 mb-3">
              <li>Proficiency in Adobe Premiere Pro, After Effects</li>
              <li>Experience with cinematic editing and reels</li>
              <li>Good sense of pacing, music sync, and story arc</li>
            </ul>
            <p className="text-sm text-charcoal/60">Location: Remote · Type: Freelance / Project-based</p>
          </div>

          {/* Job Opening 3 */}
          <div className="bg-charcoal/5 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-2xl font-semibold text-charcoal mb-2">Social Media Strategist</h2>
            <p className="text-charcoal/70 mb-3">
              We’re looking for someone who understands digital trends, storytelling, and audience growth.
            </p>
            <ul className="list-disc list-inside text-charcoal/70 mb-3">
              <li>Knowledge of Instagram, LinkedIn, Twitter, YouTube</li>
              <li>Ability to craft campaigns and analyze performance</li>
              <li>Experience with content calendars & growth strategies</li>
            </ul>
            <p className="text-sm text-charcoal/60">Location: Remote · Type: Part-time / Internship</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-charcoal mb-4">Don’t see a role that fits?</h3>
          <p className="text-charcoal/70 mb-6 max-w-xl mx-auto">
            We’re always open to collaborating with passionate creators, editors, designers, and strategists.
          </p>
          <a
            href="mailto:hello@lotsmedia.co"
            className="inline-block bg-yellow text-charcoal font-medium px-6 py-3 rounded-full shadow hover:shadow-lg transition"
          >
            Send Us Your Portfolio
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
}
