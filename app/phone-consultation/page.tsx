import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ComparisonTable from '@/components/ComparisonTable';
import ServiceCard from '@/components/ServiceCard';
import BreadcrumbStructuredData from '@/components/BreadcrumbStructuredData';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "30-Minute Phone Consultation - Expert Medical Guidance",
  description: "Book a 30-minute phone consultation with board-certified endocrinologist Dr. Magomed Batalov, M.D. Discuss hormone optimization, TRT options, bloodwork analysis, and performance goals. $249 consultation fee. Take the first step to elite health.",
  alternates: {
    canonical: "https://drbatalov.com/phone-consultation",
  },
  openGraph: {
    title: "30-Minute Phone Consultation with Dr. Magomed Batalov, M.D.",
    description: "Expert medical consultation with board-certified endocrinologist. Discuss hormone optimization, TRT, bloodwork analysis, and performance enhancement strategies.",
    images: [
      {
        url: "/main_photo.jpeg",
        width: 1200,
        height: 630,
        alt: "Dr. Magomed Batalov - Phone Consultation",
      },
    ],
    url: "https://drbatalov.com/phone-consultation",
  },
  twitter: {
    card: "summary_large_image",
    title: "Phone Consultation | Dr. Batalov, M.D.",
    description: "30-minute expert consultation with board-certified endocrinologist. Hormone optimization, TRT, and performance guidance.",
    images: ["/main_photo.jpeg"],
  },
};

export default function PhoneConsultationPage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Breadcrumb Structured Data */}
      <BreadcrumbStructuredData
        items={[
          { name: "Home", url: "https://drbatalov.com" },
          { name: "Phone Consultation", url: "https://drbatalov.com/phone-consultation" },
        ]}
      />

      <Header />
      
      <main className="pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="bg-white py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4" style={{ color: '#0a0a0a' }}>
              Dr. Magomed Batalov | Endocrinology & Hormones
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold" style={{ color: '#0a0a0a' }}>
              30-Minute Phone Consultation
            </h2>
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
                imageUrl="/phone_consultation.jpg"
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

