import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Meridian - Premium Luxury Real Estate in Dominican Republic",
  description: "Discover the Dominican Republic's most exclusive properties with Meridian. Superior to Zillow with luxury villa listings, investment opportunities, and premium real estate services. Available in English and Spanish.",
  keywords: "Dominican Republic real estate, luxury villas, Punta Cana properties, Santo Domingo real estate, luxury real estate platform, property investment DR, Meridian real estate",
  openGraph: {
    title: "Meridian - Premium Luxury Real Estate Platform",
    description: "The Dominican Republic's #1 luxury real estate platform with over 10,000+ exclusive listings",
    url: "https://meridian.com",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Meridian Luxury Real Estate",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Meridian - Premium Luxury Real Estate",
    description: "Discover luxury properties in the Dominican Republic",
    images: ["/twitter-image.jpg"],
  },
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  alternates: {
    canonical: "https://meridian.com",
    languages: {
      'en': 'https://meridian.com/en',
      'es': 'https://meridian.com/es',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#D4AF37" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}