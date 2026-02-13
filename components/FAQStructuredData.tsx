import StructuredData from './StructuredData';

export default function FAQStructuredData() {
  return (
    <StructuredData
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is Dr. Magomed Batalov's specialization?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Dr. Magomed Batalov, M.D. is a board-certified endocrinologist specializing in hormone optimization, testosterone replacement therapy (TRT), metabolic health, competition prep coaching, and performance enhancement. He works with 100+ clients per month worldwide."
            }
          },
          {
            "@type": "Question",
            "name": "What services does Dr. Batalov offer?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Dr. Batalov offers comprehensive endocrinology services including: TRT management and optimization, hormone coaching, bloodwork analysis and interpretation, competition prep coaching, nutrition planning, metabolic health optimization, diabetes remission programs, male fertility support, and AAS (anabolic-androgenic steroid) guidance with risk reduction strategies."
            }
          },
          {
            "@type": "Question",
            "name": "Does Dr. Batalov work with clients worldwide?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, Dr. Batalov provides online consultations and coaching services to clients worldwide. All services are educational and consultative in nature, delivered remotely through phone, video calls, and messaging platforms."
            }
          },
          {
            "@type": "Question",
            "name": "What is Dr. Batalov's approach to hormone optimization?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Dr. Batalov follows an evidence-based, data-driven approach. All hormone decisions are made based on comprehensive bloodwork analysis. He emphasizes health first, provides clear medical reasoning, and designs personalized strategies. No blind protocols or 'bro science' - only medically sound, individualized solutions."
            }
          },
          {
            "@type": "Question",
            "name": "Are payment plans available for Dr. Batalov's services?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, payment plans are available through Affirm, Klarna, and Afterpay. This makes Dr. Batalov's elite medical coaching services accessible with flexible payment options. Due to the nature of the services, all sales are final and non-refundable."
            }
          },
          {
            "@type": "Question",
            "name": "What qualifications does Dr. Magomed Batalov have?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Dr. Batalov is a medical doctor who graduated from Sechenov University (2017-2023) and completed formal postgraduate training in endocrinology (2024-2026). He combines clinical medical expertise with over 8 years of personal experience in powerlifting and bodybuilding, working at the intersection of clinical medicine and real-world performance optimization."
            }
          }
        ]
      }}
    />
  );
}
