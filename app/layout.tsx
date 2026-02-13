import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://drbatalov.com'),
  title: {
    default: "Dr. Magomed Batalov — Endocrinologist & Hormone Specialist | Elite Performance Optimization",
    template: "%s | Dr. Batalov",
  },
  description: "Transform your health with Dr. Magomed Batalov, M.D. - Board-certified endocrinologist offering expert hormone optimization, TRT guidance, bloodwork analysis, competition prep coaching, and metabolic health solutions. Evidence-based approach for peak performance.",
  keywords: [
    "endocrinologist",
    "hormone optimization",
    "TRT specialist",
    "testosterone replacement therapy",
    "hormone coaching",
    "bloodwork analysis",
    "competition prep",
    "bodybuilding coaching",
    "medical doctor",
    "endocrinology specialist",
    "hormone specialist",
    "Dr. Magomed Batalov",
    "metabolic health",
    "diabetes remission",
    "male fertility",
    "performance enhancement",
    "AAS guidance",
    "steroid coaching",
    "peptide therapy",
    "hormone therapy",
    "anti-aging medicine",
    "sports endocrinology",
    "evidence-based coaching",
    "online hormone doctor",
  ],
  authors: [{ name: "Dr. Magomed Batalov, M.D." }],
  creator: "Dr. Magomed Batalov, M.D.",
  publisher: "Dr. Magomed Batalov, M.D.",
  category: "Health & Medical",
  applicationName: "Dr. Batalov - Endocrinology Services",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://drbatalov.com",
    siteName: "Dr. Batalov — Elite Endocrinologist",
    title: "Dr. Magomed Batalov — Endocrinologist & Hormone Specialist | Transform Your Performance",
    description: "Expert medical guidance for hormone optimization, TRT, competition prep, and metabolic health from board-certified endocrinologist Dr. Magomed Batalov, M.D. Evidence-based protocols for elite results.",
    images: [
      {
        url: "/main_photo.jpeg",
        width: 1200,
        height: 630,
        alt: "Dr. Magomed Batalov - Board Certified Endocrinologist & Hormone Optimization Specialist",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Magomed Batalov — Elite Endocrinologist & Hormone Specialist",
    description: "Transform your health with expert hormone optimization, TRT guidance, and competition prep coaching from board-certified endocrinologist Dr. Batalov, M.D.",
    images: ["/main_photo.jpeg"],
    creator: "@doc_batalov",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://drbatalov.com",
  },
  verification: {
    // Add verification codes here when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://drbatalov.com" />
        <meta name="theme-color" content="#0a0a0a" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Dr. Batalov - Elite Endocrinologist" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
