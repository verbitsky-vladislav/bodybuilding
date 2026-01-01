import Image from 'next/image';
import { services } from '@/data/services';

export default function ServicesGrid() {
  return (
    <section className="relative py-16 my-8 md:my-12">
      {/* Background overlay - slightly wider than content */}
      <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-[90rem] bg-white/70 backdrop-blur-md border border-white/20 shadow-2xl rounded-2xl"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-12 md:mb-16" style={{ color: '#0a0a0a' }}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Dr. Magomed Batalov | Endocrinology & Hormones
          </h1>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
            COACHING SERVICES
          </h2>
          <div className="max-w-3xl mx-auto space-y-4 text-lg md:text-xl leading-relaxed" style={{ color: '#0a0a0a' }}>
            <p>
              Unlock advanced, science-backed strategies to safely push the limits of human performance—and evolve into a jacked, shredded, and legendary physique.
            </p>
            <p className="font-bold">
              * Payment Plans Available
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
            >
              {/* Image */}
              <div className="relative w-full aspect-[4/3]">
                {service.imageUrl && (
                  <Image
                    src={service.imageUrl}
                    alt={service.title}
                    fill
                    className="object-contain object-center"
                  />
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Price */}
                <div className="mb-4">
                  <h5 className="text-2xl font-bold" style={{ color: '#0a0a0a' }}>
                    {service.monthlyPrice}
                  </h5>
                </div>

                {/* Title */}
                <h2 className="text-xl md:text-2xl font-bold mb-6" style={{ color: '#0a0a0a' }}>
                  {service.title}
                </h2>

                {/* Button */}
                <button className="w-full bg-black text-white py-3 px-6 font-semibold hover:bg-gray-800 transition-colors">
                  BUY NOW
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

