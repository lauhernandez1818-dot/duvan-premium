import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  themeColor: "#18181b",
};

export const metadata: Metadata = {
  title: "Inversiones Duvan | Almuerzos Corporativos en Caracas",
  description: "Líderes en alimentación corporativa en la Gran Caracas. Servimos de 3,000 a 6,000 comidas diarias con 15+ años de experiencia. Calidad, frescura y puntualidad garantizada.",
  keywords: ["almuerzos corporativos", "catering empresarial", "comida corporativa Caracas", "servicio de almuerzos", "inversiones duvan", "alimentación empresarial"],
  authors: [{ name: "Inversiones Duvan" }],
  openGraph: {
    title: "Inversiones Duvan | Almuerzos Corporativos en Caracas",
    description: "Líderes en alimentación corporativa con 15+ años de experiencia en la Gran Caracas",
    type: "website",
    locale: "es_VE",
  },
  icons: {
    icon: "/imagenes/logo-duvan.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Inversiones Duvan",
    "description": "Líderes en alimentación corporativa en la Gran Caracas. Servimos de 3,000 a 6,000 comidas diarias con 15+ años de experiencia.",
    "telephone": "+584241520170",
    "areaServed": { "@type": "Place", "name": "Gran Caracas, Venezuela" },
    "url": "https://duvan-premium.vercel.app",
  };

  return (
    <html lang="es" className="overflow-x-hidden">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden w-full min-w-0`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
