import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';
import Link from 'next/link';
import Image from 'next/image';
import { HiArrowRight } from 'react-icons/hi';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Dr. Magomed Batalov, M.D.",
  description: "Learn about Dr. Magomed Batalov, M.D. - Medical doctor and endocrinologist specializing in hormone health, metabolic disorders, TRT, and performance optimization. 100+ clients per month.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Dr. Magomed Batalov, M.D. - Endocrinologist",
    description: "Medical doctor specializing in endocrinology, hormone health, metabolic disorders, and performance optimization.",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Structured Data */}
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Dr. Magomed Batalov",
          "jobTitle": "Medical Doctor, Endocrinologist",
          "description": "Medical doctor specializing in endocrinology, hormone health, metabolic disorders, and performance optimization",
          "alumniOf": {
            "@type": "EducationalOrganization",
            "name": "Sechenov University"
          },
          "knowsAbout": [
            "Endocrinology",
            "Hormone Optimization",
            "Testosterone Replacement Therapy",
            "Metabolic Health",
            "Type 2 Diabetes",
            "Male Fertility",
            "Competition Prep",
            "Bodybuilding"
          ],
          "hasCredential": {
            "@type": "EducationalOccupationalCredential",
            "credentialCategory": "Medical Degree"
          }
        }}
      />

      <Header />
      
      <main className="pt-16 md:pt-20">
        {/* Hero Section with Background */}
        <section className="relative bg-gray-900 py-12 md:py-24 min-h-[400px] md:min-h-[600px] flex items-center">
          <div className="absolute inset-0 bg-gray-800 opacity-50"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Photo */}
              <div className="relative order-2 md:order-1">
                <div className="relative w-full max-w-sm mx-auto md:max-w-none md:w-80 aspect-[2/3] rounded-lg overflow-hidden">
                  <Image
                    src="/main_photo.jpeg"
                    alt="Dr. Magomed Batalov"
                    fill
                    className="object-contain object-center"
                    priority
                  />
                </div>
              </div>
              
              {/* Mission */}
              <div className="text-white text-center md:text-left order-1 md:order-2">
                <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                  My mission is simple: to help you build a stronger body, sharper mind, and unstoppable drive—so you can live at your highest level.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="bg-white py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2" style={{ color: '#0a0a0a' }}>
              TRUST / ABOUT
            </h2>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 md:mb-6" style={{ color: '#0a0a0a' }}>
              Dr. Mohamed, MD — Endocrinologist
            </h3>
            
            <div className="prose prose-sm sm:prose-base md:prose-lg max-w-none space-y-4 md:space-y-6 mb-6 md:mb-8" style={{ color: '#0a0a0a' }}>
              <p>
                I am a medical doctor specializing in endocrinology, with a focus on hormone health, metabolic disorders, and performance optimization.
              </p>
              
              <p>
                I graduated from Sechenov University (2017–2023) and completed formal postgraduate training in endocrinology (2024–2026). My medical background is combined with over 8 years of personal experience in powerlifting and bodybuilding, allowing me to work at the intersection of clinical medicine and real-world performance.
              </p>
              
              <div>
                <h4 className="text-xl font-bold mb-3" style={{ color: '#0a0a0a' }}>What I specialize in</h4>
                <p>I work primarily with:</p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                  <li>Men on TRT or considering TRT</li>
                  <li>AAS users seeking risk reduction and long-term health</li>
                  <li>Male fertility issues, including recovery after hormone use</li>
                  <li>Metabolic health, with a strong focus on type 2 diabetes and insulin resistance</li>
                </ul>
                <p className="mt-4">
                  One of the outcomes I'm most proud of is helping patients achieve type 2 diabetes remission through structured, evidence-based interventions.
                </p>
              </div>
              
              <div>
                <h4 className="text-xl font-bold mb-3" style={{ color: '#0a0a0a' }}>Experience</h4>
                <p>
                  I began working with patients and clients while still a medical student, both in clinical settings and directly in the gym environment. This allowed me to see early on where theory fails — and where it must be adapted to real people, real habits, and real physiology.
                </p>
                <p className="mt-4">
                  Today, I work with 100+ clients per month.
                </p>
                <p className="mt-2">
                  My work is fully lab-driven and data-based. I do not guess. I analyze, explain, and adjust.
                </p>
              </div>
              
              <div>
                <h4 className="text-xl font-bold mb-3" style={{ color: '#0a0a0a' }}>My approach</h4>
                <p className="font-semibold">Health always comes first.</p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                  <li>No blind protocols.</li>
                  <li>No "bro science."</li>
                  <li>No hormone decisions without bloodwork.</li>
                </ul>
                <p className="mt-4">
                  I provide clear medical reasoning and concrete solutions. My role is to design the strategy — your role is to execute it. This model works only with motivated, responsible adults.
                </p>
              </div>
              
              <div>
                <h4 className="text-xl font-bold mb-3" style={{ color: '#0a0a0a' }}>Boundaries</h4>
                <p>I do not work with:</p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                  <li>Clients who refuse blood tests</li>
                  <li>People looking for constant emotional supervision</li>
                  <li>Anyone attempting to negotiate medical decisions</li>
                </ul>
                <p className="mt-4">
                  I am not a babysitter. I am a doctor who delivers solutions.
                </p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-400">
                <p className="font-semibold" style={{ color: '#0a0a0a' }}>Important note</p>
                <p className="mt-2">
                  All services are educational and consultative. I do not prescribe medications or replace care from a local physician.
                </p>
              </div>
            </div>
            
            <Link 
              href="/coaching-services" 
              className="inline-flex items-center bg-black text-white px-8 py-3 font-semibold hover:bg-gray-800 transition-colors"
            >
              COACHING SERVICES
              <HiArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

