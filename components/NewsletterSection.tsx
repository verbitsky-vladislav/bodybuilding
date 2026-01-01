'use client';

import { useState } from 'react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Здесь можно добавить логику отправки на сервер
    // Например, через API route или внешний сервис
    
    setTimeout(() => {
      setIsSubmitting(false);
      setEmail('');
      // Можно показать сообщение об успехе
    }, 1000);
  };

  return (
    <section className="relative py-16 my-8 md:my-12">
      {/* Background overlay - slightly wider than content */}
      <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-[90rem] bg-white/70 backdrop-blur-md border border-white/20 shadow-2xl rounded-2xl"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4" style={{ color: '#0a0a0a' }}>
            PRO LEVEL <span className="text-red-500">INSIGHT</span>
          </h2>
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold" style={{ color: '#0a0a0a' }}>
            Straight to Your Inbox.
          </h3>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="flex-1">
              <label htmlFor="email" className="block text-sm font-semibold mb-2" style={{ color: '#0a0a0a' }}>
                Email <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black text-gray-900"
                placeholder="Enter your email"
              />
            </div>
            <div className="flex items-end">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto bg-black text-white px-8 py-3 font-semibold hover:bg-gray-800 transition-colors rounded-md disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
              </button>
            </div>
          </div>

          {/* Checkbox */}
          <div className="flex items-start">
            <input
              type="checkbox"
              id="newsletter-consent"
              checked={isSubscribed}
              onChange={(e) => setIsSubscribed(e.target.checked)}
              className="mt-1 mr-3 w-4 h-4 text-black border-gray-300 rounded focus:ring-black"
            />
            <label htmlFor="newsletter-consent" className="text-sm" style={{ color: '#0a0a0a' }}>
              Yes, subscribe me to your newsletter. (If you don't do this I can't help you!)
            </label>
          </div>
        </form>
      </div>
    </section>
  );
}

