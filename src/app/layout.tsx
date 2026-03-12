import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Deep Cleaning Services Dubai | Professional Cleaning Company",
    template: "%s | DeepClean Dubai"
  },
  description: "Dubai's leading deep cleaning company. Professional carpet cleaning, sofa cleaning, mattress cleaning, curtains cleaning & house deep cleaning services. Eco-friendly products, same-day service available. Book now!",
  keywords: [
    "cleaning services Dubai",
    "deep cleaning Dubai",
    "carpet cleaning Dubai",
    "sofa cleaning Dubai",
    "mattress cleaning Dubai",
    "curtains cleaning Dubai",
    "house cleaning Dubai",
    "professional cleaning company Dubai",
    "home deep cleaning Dubai",
    "upholstery cleaning Dubai"
  ],
  authors: [{ name: "DeepClean Dubai" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "Deep Cleaning Services Dubai | DeepClean Dubai",
    description: "Professional deep cleaning services in Dubai. Carpet, sofa, mattress, curtains & house cleaning. Eco-friendly, same-day service available.",
    url: "https://deepcleandubai.ae",
    siteName: "DeepClean Dubai",
    type: "website",
    locale: "en_AE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deep Cleaning Services Dubai | DeepClean Dubai",
    description: "Professional deep cleaning services in Dubai. Carpet, sofa, mattress, curtains & house cleaning.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://deepcleandubai.ae",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="geo.region" content="AE-DU" />
        <meta name="geo.placename" content="Dubai" />
        <meta name="geo.position" content="25.2048;55.2708" />
        <meta name="ICBM" content="25.2048, 55.2708" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
