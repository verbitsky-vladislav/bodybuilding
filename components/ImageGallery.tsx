import Image from 'next/image';

export default function ImageGallery() {
  const images = [
    {
      src: '/image_gallary_1.jpeg',
      alt: 'Dr. Magomed Batalov',
    },
    {
      src: '/image_gallary_2.jpeg',
      alt: 'Dr. Magomed Batalov - Endocrinologist',
    },
    {
      src: '/image_gallary_3.jpeg',
      alt: 'Train with Dr. Magomed Batalov',
    },
    {
      src: '/image_gallary_4.jpeg',
      alt: 'Dr. Magomed Batalov - Medical Doctor',
    },
    {
      src: '/image_gallary_5.jpeg',
      alt: 'Dr. Magomed Batalov - Professional',
    },
  ];

  return (
    <section className="relative py-16 my-8 md:my-12">
      {/* Background overlay - slightly wider than content */}
      <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-[90rem] bg-white/70 backdrop-blur-md border border-white/20 shadow-2xl rounded-2xl"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {/* First image */}
          <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px]">
            <Image
              src={images[0].src}
              alt={images[0].alt}
              fill
              className="object-cover object-center"
              loading="lazy"
            />
          </div>

          {/* Second image */}
          <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px]">
            <Image
              src={images[1].src}
              alt={images[1].alt}
              fill
              className="object-cover object-center"
              loading="lazy"
            />
          </div>

          {/* Third image - wider, spans 2 columns on large screens */}
          <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] lg:col-span-2">
            <Image
              src={images[2].src}
              alt={images[2].alt}
              fill
              className="object-cover object-center"
              loading="lazy"
            />
          </div>

          {/* Fourth image */}
          <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px]">
            <Image
              src={images[3].src}
              alt={images[3].alt}
              fill
              className="object-cover object-center"
              loading="lazy"
            />
          </div>

          {/* Fifth image - taller */}
          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[800px] lg:col-span-3">
            <Image
              src={images[4].src}
              alt={images[4].alt}
              fill
              className="object-cover object-center"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

