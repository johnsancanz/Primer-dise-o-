
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="max-w-xl mx-auto px-6">
      <div className="bg-gray-900 border border-white/10 rounded-[2.5rem] p-10 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary opacity-50" />
        
        <h3 className="text-3xl font-bold mb-4 text-center">Get Started Today</h3>
        <p className="text-white/50 text-center mb-10">Have questions? We'll respond within 24 hours.</p>

        {submitted ? (
          <div className="py-12 text-center animate-pulse">
            <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-xl font-bold text-white">Message Sent!</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-1">
              <label className="text-xs font-bold text-white/40 uppercase tracking-widest ml-1">Full Name</label>
              <input 
                required
                type="text" 
                placeholder="John Doe"
                className="w-full bg-white/5 border border-white/10 focus:border-primary/50 focus:bg-white/10 transition-all rounded-2xl px-6 py-4 outline-none"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold text-white/40 uppercase tracking-widest ml-1">Email Address</label>
              <input 
                required
                type="email" 
                placeholder="john@example.com"
                className="w-full bg-white/5 border border-white/10 focus:border-primary/50 focus:bg-white/10 transition-all rounded-2xl px-6 py-4 outline-none"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold text-white/40 uppercase tracking-widest ml-1">Message</label>
              <textarea 
                required
                rows={4}
                placeholder="Tell us about your creator journey..."
                className="w-full bg-white/5 border border-white/10 focus:border-primary/50 focus:bg-white/10 transition-all rounded-2xl px-6 py-4 outline-none resize-none"
              />
            </div>
            <button className="w-full py-5 bg-white text-black font-bold rounded-2xl hover:bg-gray-200 transition-all active:scale-95 shadow-[0_10px_20px_rgba(0,0,0,0.3)]">
              Send Message
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
