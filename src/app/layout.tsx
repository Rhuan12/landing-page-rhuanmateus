import type { Metadata } from "next";
import { Space_Grotesk, Archivo } from "next/font/google";
import { MotionConfig } from "framer-motion";
import "./globals.css";
import SmoothScrollProvider from "@/components/layout/SmoothScrollProvider";
import Navbar from "@/components/layout/Navbar";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rhuan Mateus — Desenvolvedor Front-end & Full-stack",
  description:
    "Portfólio de Rhuan Mateus, desenvolvedor front-end/full-stack apaixonado por criar soluções que resolvem problemas reais. React, Next.js, TypeScript, Python e Supabase.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${spaceGrotesk.variable} ${archivo.variable} h-full dark`}>
      <body className="min-h-full bg-bg text-fg antialiased">
        <MotionConfig reducedMotion="user">
          <SmoothScrollProvider>
            <Navbar />
            {children}
          </SmoothScrollProvider>
        </MotionConfig>
      </body>
    </html>
  );
}
