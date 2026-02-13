import Header from '@/components/Header';
import ServiceCard from '@/components/ServiceCard';
import ComparisonTable from '@/components/ComparisonTable';
import Footer from '@/components/Footer';
import BreadcrumbStructuredData from '@/components/BreadcrumbStructuredData';
import { services } from '@/data/services';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Elite Coaching Services - Competition Prep, TRT & Hormone Optimization",
  description: "Professional medical coaching services from board-certified endocrinologist Dr. Magomed Batalov, M.D. - Competition Prep, Lifestyle Coaching, Concierge Wellness, Hormone Optimization, Nutrition Planning, and Bloodwork Analysis. Payment plans available through Affirm, Klarna, and Afterpay.",
  alternates: {
    canonical: "https://drbatalov.com/coaching-services",
  },
  openGraph: {
    title: "Elite Coaching Services | Dr. Magomed Batalov, M.D.",
    description: "Professional medical coaching: Competition Prep, Lifestyle Coaching, Hormone Optimization, Nutrition Planning, and Bloodwork Analysis from board-certified endocrinologist.",
    images: [
      {
        url: "/main_photo.jpeg",
        width: 1200,
        height: 630,
        alt: "Dr. Magomed Batalov - Elite Coaching Services",
      },
    ],
    url: "https://drbatalov.com/coaching-services",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elite Coaching Services | Dr. Batalov",
    description: "Competition prep, hormone optimization, and lifestyle coaching from board-certified endocrinologist Dr. Magomed Batalov, M.D.",
    images: ["/main_photo.jpeg"],
  },
};

export default function CoachingServicesPage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Breadcrumb Structured Data */}
      <BreadcrumbStructuredData
        items={[
          { name: "Home", url: "https://drbatalov.com" },
          { name: "Coaching Services", url: "https://drbatalov.com/coaching-services" },
        ]}
      />

      <Header />
      
      <main className="pt-16 md:pt-20">
        {/* Services Section */}
        <section id="services" className="bg-white py-12 md:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  title={service.title}
                  monthlyPrice={service.monthlyPrice}
                  totalPrice={service.totalPrice}
                  description={service.description}
                  imageUrl={service.imageUrl}
                />
              ))}
            </div>
          </div>
        </section>

        <ComparisonTable />
      </main>

      <Footer />
    </div>
  );
}

