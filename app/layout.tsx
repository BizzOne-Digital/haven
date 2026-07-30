import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/shared/Footer";
import ClientWrapper from "@/components/ui/ClientWrapper";
import Script from "next/script";

export const metadata: Metadata = {
  title: {
    default: "Haven Customs Tire & Wheel — Performance Redefined",
    template: "%s | Haven Tire & Wheel",
  },
  description:
    "Premium tires, expert wheel installation, and performance upgrades. Built for the road ahead.",

  icons: {
    icon: "/fav2.png",
    shortcut: "/fav2.png",
    apple: "/fav2.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-6Y7K30PSS0"
          strategy="afterInteractive"
        />
        <Script id="google-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-6Y7K30PSS0');
          `}
        </Script>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Rajdhani:wght@300;400;500;600;700&family=Orbitron:wght@400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </head>

      <body>
        <ClientWrapper />
        <Navbar />
        {children}
        <Footer />

        {/* Google Ads Conversion Tracking */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17488289197"
          strategy="afterInteractive"
        />

        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17488289197');
          `}
        </Script>
      </body>
    </html>
  );
}