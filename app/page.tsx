import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ResultsSection from '@/components/ResultsSection';
import ServicesGrid from '@/components/ServicesGrid';
import ComparisonTable from '@/components/ComparisonTable';
import ImageGallery from '@/components/ImageGallery';
import MarqueeSection from '@/components/MarqueeSection';
import NewsletterSection from '@/components/NewsletterSection';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Fixed Background Image - stays in place while content scrolls */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 0,
          overflow: 'hidden'
        }}
      >
        <Image
          src="/background.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
          quality={90}
          style={{
            objectFit: 'cover',
            objectPosition: 'center'
          }}
        />
        {/* Light overlay for subtle contrast */}
        <div className="absolute inset-0 bg-white/10"></div>
      </div>
      
      {/* Content that scrolls */}
      <div className="relative z-10 overflow-x-hidden">
        <Header />
        
        <main className="pt-16 md:pt-20">
          <Hero />
          <ResultsSection />
          <ServicesGrid />
          <ComparisonTable />
          <ImageGallery />
          <MarqueeSection />
          <NewsletterSection />
        </main>

        <Footer />
      </div>
    </div>
  );
}

