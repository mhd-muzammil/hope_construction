import React, { useEffect } from 'react';
import SEO from '../components/SEO';

const TermsConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#f8f9fa] min-h-screen font-sans selection:bg-[#FFB703] selection:text-dark">
      <SEO 
        title="Terms & Conditions | Hope Construction" 
        description="Read our terms and conditions before using our construction services." 
        canonical="/terms-conditions" 
        noindex={true} 
      />

      {/* Hero Header */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-dark overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#0a0a0a]/90 z-10"></div>
          <div className="absolute inset-0 bg-[url('/lg/about_hero_bg.webp')] bg-cover bg-center grayscale opacity-20"></div>
        </div>
        <div className="max-w-[1320px] mx-auto px-6 lg:px-16 relative z-20 text-center">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-black font-heading tracking-tight mb-4 uppercase">
            Terms & <span className="text-primary">Conditions</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Last updated: March 2026. Please read these terms carefully before using our website or services.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-[900px] mx-auto px-6 lg:px-16">
          <div className="bg-white p-8 md:p-12 shadow-xl border border-gray-100 prose prose-lg prose-slate max-w-none">
            
            <h2 className="text-2xl font-bold text-dark font-heading uppercase mb-4 mt-0">1. Acceptance of Terms</h2>
            <p className="text-gray-600 mb-8">
              By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using this website's particular services, you shall be subject to any posted guidelines or rules applicable to such services.
            </p>

            <h2 className="text-2xl font-bold text-dark font-heading uppercase mb-4 mt-8">2. Intellectual Property Rights</h2>
            <p className="text-gray-600 mb-8">
              Under these Terms, Hope Construction and/or its licensors own all the intellectual property rights and materials contained in this Website. You are granted limited license only for purposes of viewing the material contained on this Website. This includes, but is not limited to, the design, layout, look, appearance, structural plans, and graphics.
            </p>

            <h2 className="text-2xl font-bold text-dark font-heading uppercase mb-4 mt-8">3. Services and Project Quotations</h2>
            <p className="text-gray-600 mb-4">
              All services provided by Hope Construction are subject to formal written contracts.
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-8 space-y-2">
              <li>Information provided on this website regarding pricing or project timelines is for informational purposes only and does not constitute a binding offer.</li>
              <li>A formal consultation and signed agreement are required before the commencement of any architectural or construction work.</li>
              <li>We reserve the right to modify or discontinue any service with or without notice.</li>
            </ul>

            <h2 className="text-2xl font-bold text-dark font-heading uppercase mb-4 mt-8">4. User Content</h2>
            <p className="text-gray-600 mb-8">
              In these Website Standard Terms and Conditions, "Your Content" shall mean any audio, video text, images or other material you choose to display on this Website or submit through our forms. By displaying Your Content, you grant Hope Construction a non-exclusive, worldwide irrevocable, sub licensable license to use, reproduce, adapt, publish, translate and distribute it in any and all media.
            </p>

            <h2 className="text-2xl font-bold text-dark font-heading uppercase mb-4 mt-8">5. Limitation of Liability</h2>
            <p className="text-gray-600 mb-8">
              In no event shall Hope Construction, nor any of its officers, directors and employees, shall be held liable for anything arising out of or in any way connected with your use of this Website whether such liability is under contract. Hope Construction, including its officers, directors and employees shall not be held liable for any indirect, consequential or special liability arising out of or in any way related to your use of this Website or construction delays caused by force majeure events.
            </p>

            <h2 className="text-2xl font-bold text-dark font-heading uppercase mb-4 mt-8">6. Governing Law & Jurisdiction</h2>
            <p className="text-gray-600 mb-8">
              These Terms will be governed by and interpreted in accordance with the laws of Tamil Nadu, India, and you submit to the non-exclusive jurisdiction of the state and federal courts located in India for the resolution of any disputes.
            </p>

          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsConditions;
