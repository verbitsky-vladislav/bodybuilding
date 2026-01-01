import Link from 'next/link';
import Image from 'next/image';

export default function ResultsSection() {
  return (
    <section className="relative py-16 my-8 md:my-12">
      {/* Background overlay - slightly wider than content */}
      <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-[90rem] bg-white/70 backdrop-blur-md border border-white/20 shadow-2xl rounded-2xl"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12 items-center">
          {/* Left Column - Doctor Image */}
          <div className="relative order-2 md:order-1">
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[800px]">
              <Image
                src="/main_photo.jpeg"
                alt="Dr. Magomed Batalov"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>

          {/* Center Column - 100% Results Driven */}
          <div className="text-center order-1 md:order-2">
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4" style={{ color: '#0a0a0a' }}>
              100%
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl font-semibold mb-6 md:mb-8" style={{ color: '#0a0a0a' }}>
              RESULTS DRIVEN.
            </p>
            <Link
              href="/coaching-services"
              className="inline-block bg-black text-white px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              START TODAY
            </Link>
          </div>

          {/* Right Column - Text */}
          <div className="order-3 md:order-3">
            <div className="space-y-3 md:space-y-4 text-sm sm:text-base md:text-lg leading-relaxed" style={{ color: '#0a0a0a' }}>
              <p>
                Work directly with Dr. Magomed Batalov, M.D. — a Medical Doctor and Endocrinologist specializing in hormone optimization.
              </p>
              <p>
                This is ELITE performance backed by REAL science — not guesswork, not theory, and not trends.
              </p>
              <p>
                Dr. Batalov coaches high-performers who demand precision, mastery, and a body that matches the discipline they live by.
              </p>
              <p>
                This isn't about looking good. It's about being UNSTOPPABLE.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

