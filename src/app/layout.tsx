import type { Metadata, Viewport } from "next";
import "./globals.css";
import { fontDisplay, fontSans } from "@/lib/fonts";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Vakantievilla op Curaçao voor groepen tot 11`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  keywords: [
    "Villa Sandemarie",
    "vakantievilla Curaçao",
    "vakantiehuis Curaçao",
    "villa Jan Thiel",
    "villa Spaanse Water",
    "groepsaccommodatie Curaçao",
    "familievilla Curaçao",
    "duikvakantie Curaçao",
  ],
  alternates: {
    canonical: "/",
    languages: {
      "nl-NL": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: site.url,
    siteName: site.name,
    title: `${site.name} · Vakantievilla op Curaçao`,
    description: site.description,
    images: [
      {
        url: "/media/villa/villa-drone-1.webp",
        width: 1600,
        height: 1067,
        alt: "Villa Sandemarie luchtfoto met zwembad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} · Vakantievilla op Curaçao`,
    description: site.description,
    images: ["/media/villa/villa-drone-1.webp"],
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
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f2f0eb" },
    { media: "(prefers-color-scheme: dark)", color: "#0d1410" },
  ],
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="nl"
      className={`${fontDisplay.variable} ${fontSans.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background font-sans text-primary">
        {children}
      </body>
    </html>
  );
}
