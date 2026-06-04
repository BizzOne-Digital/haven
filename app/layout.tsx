import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/shared/Footer";
import ClientWrapper from "@/components/ui/ClientWrapper";

export const metadata: Metadata = {
  title: { default:"Haven Tire & Wheel — Performance Redefined", template:"%s | Haven Tire & Wheel" },
  description: "Premium tires, expert wheel installation, and performance upgrades. Built for the road ahead.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Rajdhani:wght@300;400;500;600;700&family=Orbitron:wght@400;500;700;900&display=swap" rel="stylesheet"/>
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
<link rel="shortcut icon" href="/favicon.ico" />
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
<link rel="manifest" href="/site.webmanifest" />
      </head>
      <body>
        <ClientWrapper/>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
