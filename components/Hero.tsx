import Link from 'next/link';
import Logo from './Logo';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-start md:items-center justify-center">
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-0 sm:py-4 md:py-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left side - Text content */}
          <div className="text-center md:text-left" style={{ color: '#0a0a0a' }}>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 leading-tight">
              Dr. Magomed Batalov | Endocrinology & Hormones
            </h1>
            <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 text-gray-700">
              Medical Doctor — Endocrinologist — Hormone Specialist
            </p>
            <Link
              href="/coaching-services"
              className="inline-block bg-black text-white px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              COACHING SERVICES
            </Link>
          </div>

          {/* Right side - Logo */}
          <div className="relative order-first md:order-last flex items-center justify-center">
            <div className="w-full max-w-2xl">
              <Logo size="xlarge" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

