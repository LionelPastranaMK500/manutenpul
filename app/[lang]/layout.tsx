import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/layout/Navbar";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Manutenpul | Facility Management",
  description: "Gestione Integrata del Patrimonio Immobiliare",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const lang = 'it';

  return (
    <html lang={lang} className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}>
      <body className="flex flex-col bg-white dark:bg-navy-950 min-h-full">
        <Navbar lang={lang} />
        <main>{children}</main>
        {/* Footer */}
      </body>
    </html>
  );
}