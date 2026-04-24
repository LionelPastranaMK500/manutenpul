import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsappButton from "@/components/ui/WhatsappButton";
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Manutenpul | Facility Management",
  description: "Gestione Integrata del Patrimonio Immobiliare",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <html lang={lang} className={`${geistSans.variable} ${geistMono.variable} h-full antialiased `} data-scroll-behavior="smooth">
      <body className="flex flex-col bg-white dark:bg-navy-950 min-h-full">
        <Navbar lang={lang as "it" | "es"} />
        <main>{children}</main>
        <WhatsappButton lang={lang as "it" | "es"} />
        <Footer lang={lang as "it" | "es"} />
      </body>
    </html>
  );
}