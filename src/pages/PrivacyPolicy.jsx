import React, { useEffect } from 'react';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#f8f9fa] min-h-screen font-sans selection:bg-[#FFB703] selection:text-dark">


      {/* Hero Header */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-dark overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#0a0a0a]/90 z-10"></div>
          <div className="absolute inset-0 bg-[url('/about-hero-bg.png')] bg-cover bg-center grayscale opacity-20"></div>
        </div>
        <div className="max-w-[1320px] mx-auto px-6 lg:px-16 relative z-20 text-center">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-black font-heading tracking-tight mb-4 uppercase">
            Privacy <span className="text-primary">Policy</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Last updated: March 2026. Learn about how we collect, use, and protect your data.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-[900px] mx-auto px-6 lg:px-16">
          <div className="bg-white p-8 md:p-12 shadow-xl border border-gray-100 prose prose-lg prose-slate max-w-none">
            
            <h2 className="text-2xl font-bold text-dark font-heading uppercase mb-4 mt-0">1. Introduction</h2>
            <p className="text-gray-600 mb-8">
              Hope Construction ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how your personal information is collected, used, and disclosed by Hope Construction.
            </p>

            <h2 className="text-2xl font-bold text-dark font-heading uppercase mb-4 mt-8">2. Information We Collect</h2>
            <p className="text-gray-600 mb-4">
              We collect information from you when you visit our website, register on our site, place an order, subscribe to our newsletter, respond to a survey, or fill out a form.
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-8 space-y-2">
              <li><strong>Personal Information:</strong> Includes your name, email address, mailing address, phone number, and any other details you provide directly to us through forms or inquiries.</li>
              <li><strong>Usage Data:</strong> We automatically collect details of your visits to our Website, including traffic data, location data, logs, and other communication data.</li>
            </ul>

            <h2 className="text-2xl font-bold text-dark font-heading uppercase mb-4 mt-8">3. How We Use Your Information</h2>
            <p className="text-gray-600 mb-4">
              Any of the information we collect from you may be used in one of the following ways:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-8 space-y-2">
              <li>To personalize your experience (your information helps us to better respond to your individual needs)</li>
              <li>To improve our website (we continually strive to improve our website offerings based on the information and feedback we receive from you)</li>
              <li>To improve customer service (your information helps us to more effectively respond to your customer service requests and support needs)</li>
              <li>To process transactions and project inquiries</li>
              <li>To send periodic emails regarding your project or other products and services.</li>
            </ul>

            <h2 className="text-2xl font-bold text-dark font-heading uppercase mb-4 mt-8">4. Data Security</h2>
            <p className="text-gray-600 mb-8">
              We implement a variety of security measures to maintain the safety of your personal information when you enter, submit, or access your personal information. However, no method of transmission over the Internet, or method of electronic storage, is 100% secure.
            </p>

            <h2 className="text-2xl font-bold text-dark font-heading uppercase mb-4 mt-8">5. Cookies</h2>
            <p className="text-gray-600 mb-8">
              We use cookies (small files that a site or its service provider transfers to your computer's hard drive through your Web browser) to understand and save your preferences for future visits and compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future.
            </p>

            <h2 className="text-2xl font-bold text-dark font-heading uppercase mb-4 mt-8">6. Contact Us</h2>
            <p className="text-gray-600 mb-4">
              If there are any questions regarding this privacy policy, you may contact us using the information below:
            </p>
            <div className="bg-gray-50 p-6 border-l-4 border-primary mt-6">
              <p className="font-bold text-dark mb-1">Hope Construction</p>
              <p className="text-gray-600 mb-1">349/B1 Vallam New Colony, Brindha Nagar</p>
              <p className="text-gray-600 mb-1">Chengalpattu, Tamil Nadu, India, 603001</p>
              <p className="text-gray-600 mt-3 font-medium">Email: Hopeconstruction81@gmail.com</p>
              <p className="text-gray-600 font-medium">Phone: +91 7418828814, +91 9025787074</p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
