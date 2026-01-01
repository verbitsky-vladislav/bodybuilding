import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ComparisonTable from '@/components/ComparisonTable';
import ServiceCard from '@/components/ServiceCard';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "30-Minute Phone Consultation",
  description: "Book a 30-minute phone consultation with Dr. Magomed Batalov, M.D. to discuss your hormone health, TRT options, and performance goals. $249 consultation fee.",
  alternates: {
    canonical: "/phone-consultation",
  },
  openGraph: {
    title: "30-Minute Phone Consultation | Dr. Magomed Batalov, M.D.",
    description: "Speak with Dr. Magomed Batalov, M.D. about your hormone health and performance goals.",
  },
};

export default function PhoneConsultationPage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      
      <main className="pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="bg-white py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Text Content */}
              <div className="text-center md:text-left">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4" style={{ color: '#0a0a0a' }}>
                  Dr. Magomed Batalov | Endocrinology & Hormones
                </h1>
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold" style={{ color: '#0a0a0a' }}>
                  30-Minute Phone Consultation
                </h2>
              </div>
              
              {/* Photo */}
              <div className="relative order-first md:order-last">
                <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-lg overflow-hidden">
                  <Image
                    src="/main_photo.jpeg"
                    alt="Dr. Magomed Batalov"
                    fill
                    className="object-cover object-center"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Card Section */}
        <section className="bg-white py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto">
              <ServiceCard
                title="30-Minute Phone Consultation"
                monthlyPrice="Talk to Dr. Batalov"
                totalPrice="249"
                description="Speak with Dr. Magomed Batalov, M.D. to take your first step toward elite, physician-led transformation with a 30-Minute Phone Consultation."
              />
            </div>
          </div>
        </section>

        <ComparisonTable />
      </main>

      <Footer />
    </div>
  );
}

