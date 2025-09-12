import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import "./brand.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({ 
  subsets: ["latin"], 
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins"
});

export const metadata: Metadata = {
  title: "Website Eksklusif untuk Bisnis Anda: Desain Premium yang Memikat",
  description: "Berikan kesan mendalam kepada pengunjung dengan desain website eksklusif yang memukau. Dibuat khusus untuk bisnis Anda, dengan fokus pada kecepatan, kustomisasi, dan SEO terbaik.",
  keywords: "website eksklusif, desain website premium, jasa website profesional, website custom, website bisnis",
  authors: [{ name: "Website Eksklusif" }],
  creator: "Website Eksklusif",
  openGraph: {
    title: "Website Eksklusif untuk Bisnis Anda",
    description: "Dapatkan situs web yang dirancang khusus untuk menciptakan kesan profesional dan meningkatkan kredibilitas bisnis Anda.",
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Eksklusif untuk Bisnis Anda",
    description: "Desain website premium yang memikat untuk bisnis eksklusif Anda.",
  },
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#1E40AF" />
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-inter antialiased bg-white text-gray-900 overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}