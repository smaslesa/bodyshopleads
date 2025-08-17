import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ConditionalLayout from "@/components/layout/ConditionalLayout";
import { ModalProvider } from "@/contexts/ModalContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "BodyShopLeads - Get 30+ More Cars in Your Shop Every Month",
  description: "We help independent body shops dominate Google and fill their bays with quality collision repair work. Get your free digital audit today.",
  keywords: "body shop marketing, collision repair leads, auto body shop SEO, Google Ads for body shops",
  authors: [{ name: "BodyShopLeads" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "BodyShopLeads - Get 30+ More Cars in Your Shop Every Month",
    description: "We help independent body shops dominate Google and fill their bays with quality collision repair work.",
    type: "website",
    locale: "en_US",
    siteName: "BodyShopLeads",
  },
  twitter: {
    card: "summary_large_image",
    title: "BodyShopLeads - Get 30+ More Cars in Your Shop Every Month",
    description: "We help independent body shops dominate Google and fill their bays with quality collision repair work.",
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
        <meta name="theme-color" content="#0066CC" />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <ModalProvider>
          <ConditionalLayout>
            {children}
          </ConditionalLayout>
        </ModalProvider>
      </body>
    </html>
  );
}
