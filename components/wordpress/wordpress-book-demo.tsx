'use client';

import { useState, FormEvent } from 'react';

export function WordPressBookDemo() {
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="demo" className="bg-[#082615] relative py-16 lg:py-24 text-white">
      <div className="relative z-10 container mx-auto px-siteContainer">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4 tracking-tight">
            Ready to see Rocket.net in action?
          </h2>
          <p className="text-sm sm:text-base text-gray-300 mb-10 leading-relaxed">
            Book a personalized demo with our enterprise WordPress specialists and discover why thousands of high-traffic sites trust our platform.
          </p>

          <div className="bg-white text-[#0A1616] rounded-3xl p-8 sm:p-10 shadow-2xl text-left">
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-[#46FDAE]/20 text-[#114B27] flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold font-display text-[#0A1616] mb-2">Thank you!</h3>
                <p className="text-sm text-[#455A58]">Our enterprise WordPress team will reach out within 1 business hour.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#0A1616] mb-1.5 uppercase tracking-wider">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Faisal Ahmed"
                      className="w-full px-4 py-3 rounded-xl border border-[#E4E4DC] focus:border-[#082615] focus:outline-none text-sm bg-[#F7F7F4]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#0A1616] mb-1.5 uppercase tracking-wider">
                      Work Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      className="w-full px-4 py-3 rounded-xl border border-[#E4E4DC] focus:border-[#082615] focus:outline-none text-sm bg-[#F7F7F4]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#0A1616] mb-1.5 uppercase tracking-wider">
                      Website URL
                    </label>
                    <input
                      type="url"
                      placeholder="https://example.com"
                      className="w-full px-4 py-3 rounded-xl border border-[#E4E4DC] focus:border-[#082615] focus:outline-none text-sm bg-[#F7F7F4]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#0A1616] mb-1.5 uppercase tracking-wider">
                      Monthly Visitors
                    </label>
                    <select className="w-full px-4 py-3 rounded-xl border border-[#E4E4DC] focus:border-[#082615] focus:outline-none text-sm bg-[#F7F7F4]">
                      <option value="under25k">&lt; 25,000 / mo</option>
                      <option value="25k-100k">25,000 – 100,000 / mo</option>
                      <option value="100k-500k">100,000 – 500,000 / mo</option>
                      <option value="500k-plus">500,000+ / mo</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full mt-4 py-3.5 px-6 rounded-full font-semibold text-sm bg-[#082615] text-white hover:bg-[#0d3b21] transition-colors"
                >
                  Request a Demo
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
