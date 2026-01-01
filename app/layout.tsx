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
    default: "Dr. Magomed Batalov | Endocrinology & Hormones - Coaching Services",
    template: "%s | Dr. Magomed Batalov, M.D.",
  },
  description: "Medically-backed endocrinology and hormone coaching services from Dr. Magomed Batalov, M.D. Expert hormone optimization, TRT guidance, bloodwork analysis, and competition prep coaching.",
  keywords: [
    "endocrinologist",
    "hormone optimization",
    "TRT",
    "testosterone replacement therapy",
    "hormone coaching",
    "bloodwork analysis",
    "competition prep",
    "bodybuilding coaching",
    "medical doctor",
    "endocrinology",
    "hormone specialist",
    "Dr. Magomed Batalov",
    "metabolic health",
    "diabetes remission",
    "male fertility",
    "AAS guidance",
  ],
  authors: [{ name: "Dr. Magomed Batalov, M.D." }],
  creator: "Dr. Magomed Batalov, M.D.",
  publisher: "Dr. Magomed Batalov, M.D.",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Dr. Magomed Batalov | Endocrinology & Hormones",
    title: "Dr. Magomed Batalov | Endocrinology & Hormones - Coaching Services",
    description: "Medically-backed endocrinology and hormone coaching services from Dr. Magomed Batalov, M.D. Expert hormone optimization, TRT guidance, and competition prep coaching.",
    images: [
      {
        url: "/background.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Magomed Batalov - Endocrinologist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Magomed Batalov | Endocrinology & Hormones",
    description: "Medically-backed endocrinology and hormone coaching services from Dr. Magomed Batalov, M.D.",
    images: ["/background.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
