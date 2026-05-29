import type { Metadata, Viewport } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ScrollReveal from "@/components/ScrollReveal";
import { businessInfo, targetKeywords } from "@/data/site";
import "./globals.css";

export const runtime = "edge";

export const metadata: Metadata = {
  metadataBase: new URL(businessInfo.baseUrl),
  title: {
    default: `${businessInfo.name} | Ordu Ağda | Ordu Güzellik Merkezi`,
    template: `%s | ${businessInfo.name}`,
  },
  description: businessInfo.description,
  keywords: targetKeywords,
  manifest: "/assets/icons/site.webmanifest",
  icons: {
    icon: [
      { url: "/assets/icons/favicon.ico" },
      { url: "/assets/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/assets/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/assets/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: `${businessInfo.name} | Ordu Ağda | Ordu Güzellik Merkezi`,
    description: businessInfo.description,
    url: businessInfo.baseUrl,
    siteName: businessInfo.name,
    images: [
      {
        url: businessInfo.defaultOgImage,
        alt: businessInfo.name,
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${businessInfo.name} | Ordu Ağda | Ordu Güzellik Merkezi`,
    description: businessInfo.description,
    images: [businessInfo.defaultOgImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#E8C9B2",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>
        <ScrollReveal />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
