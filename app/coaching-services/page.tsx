import Header from '@/components/Header';
import ServiceCard from '@/components/ServiceCard';
import ComparisonTable from '@/components/ComparisonTable';
import Footer from '@/components/Footer';
import { services } from '@/data/services';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Coaching Services",
  description: "Professional coaching services from Dr. Magomed Batalov, M.D. - Competition Prep, Lifestyle Coaching, Concierge Wellness, Nutrition Planning, and Bloodwork Analysis. Payment plans available.",
  alternates: {
    canonical: "/coaching-services",
  },
  openGraph: {
    title: "Coaching Services | Dr. Magomed Batalov, M.D.",
    description: "Professional coaching services including competition prep, lifestyle coaching, and hormone optimization.",
  },
};

export default function CoachingServicesPage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
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

