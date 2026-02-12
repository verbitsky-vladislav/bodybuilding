import Link from 'next/link';
import { FaInstagram, FaWhatsapp, FaTelegram } from 'react-icons/fa';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {/* Logo and copyright */}
          <div>
            <div className="h-12 mb-4">
              <Logo invert />
            </div>
            <p className="text-sm text-gray-400 mb-2">
              © 2025 Website Powered by Inspired Pineapple.
            </p>
            <Link href="/privacy-policy" className="text-sm text-gray-400 hover:text-white">
              Privacy Policy
            </Link>
          </div>

          {/* Navigation links */}
          <div>
            <h6 className="font-semibold mb-4">Quick Links</h6>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">
                  About Dr. Magomed Batalov, M.D.
                </Link>
              </li>
              <li>
                <Link href="/coaching-services" className="text-gray-400 hover:text-white">
                  Coaching Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Social media and payment info */}
          <div>
            <h6 className="font-semibold mb-4">Follow Us</h6>
            <div className="flex space-x-4 mb-6">
              <a href="https://www.instagram.com/battlemagomed/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FaInstagram className="h-6 w-6" />
              </a>
              <a href="https://wa.me/79252408645" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FaWhatsapp className="h-6 w-6" />
              </a>
              <a href="https://t.me/dr_batalovm" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FaTelegram className="h-6 w-6" />
              </a>
            </div>
            <p className="text-sm text-gray-400">
              Payment plans available through <strong>Affirm</strong>, <strong>Klarna</strong>, and <strong>Afterpay</strong>. Due to the nature of our services, all sales are final and non-refundable.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

