'use client';

import { FaWhatsapp, FaTelegram, FaInstagram } from 'react-icons/fa';

export default function NewsletterSection() {
  return (
    <section className="relative py-12 sm:py-16 my-8 md:my-12">
      {/* Background overlay - slightly wider than content */}
      <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[calc(100%-1rem)] sm:w-[calc(100%-2rem)] max-w-[90rem] bg-white/70 backdrop-blur-md border border-white/20 shadow-2xl rounded-2xl"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 sm:mb-3 md:mb-4 leading-tight" style={{ color: '#0a0a0a' }}>
            READY TO <span className="text-red-500">TRANSFORM</span>?
          </h2>
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold leading-tight mb-4 sm:mb-6" style={{ color: '#0a0a0a' }}>
            Get In Touch Today
          </h3>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Contact Dr. Magomed Batalov directly for personalized guidance on hormone optimization, performance enhancement, and competition preparation.
          </p>
        </div>

        {/* Contact Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
          <a
            href="https://wa.me/79252408645"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full sm:w-auto text-white px-8 py-4 text-base font-semibold transition-colors rounded-lg shadow-lg"
            style={{ backgroundColor: '#25D366' }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#20BA5A'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#25D366'}
          >
            <FaWhatsapp className="h-6 w-6" />
            <span>WhatsApp</span>
          </a>
          <a
            href="https://t.me/dr_batalovm"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full sm:w-auto text-white px-8 py-4 text-base font-semibold transition-colors rounded-lg shadow-lg"
            style={{ backgroundColor: '#0088cc' }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0077b5'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#0088cc'}
          >
            <FaTelegram className="h-6 w-6" />
            <span>Telegram</span>
          </a>
          <a
            href="https://www.instagram.com/doc_batalov/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full sm:w-auto text-white px-8 py-4 text-base font-semibold transition-colors rounded-lg shadow-lg"
            style={{
              background: 'linear-gradient(to right, #a855f7, #ec4899, #ef4444)'
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = 'linear-gradient(to right, #9333ea, #db2777, #dc2626)'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'linear-gradient(to right, #a855f7, #ec4899, #ef4444)'}
          >
            <FaInstagram className="h-6 w-6" />
            <span>Instagram</span>
          </a>
        </div>
      </div>
    </section>
  );
}

