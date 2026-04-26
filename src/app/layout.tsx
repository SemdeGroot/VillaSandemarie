import type { Metadata, Viewport } from "next";
import "./globals.css";
import { fontDisplay, fontSans } from "@/lib/fonts";
import { site } from "@/lib/site";
import { LocaleProvider } from "@/lib/i18n/LocaleProvider";
import { getServerLocale } from "@/lib/i18n/server";

export const metadata: Metadata = {
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
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
      "en-US": "/",
      "de-DE": "/",
      "es-ES": "/",
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
  icons: {
    icon: [{ url: "/favicon-96x96.png", type: "image/png", sizes: "96x96" }],
    apple: [{ url: "/favicon-96x96.png", sizes: "96x96" }],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf8f3" },
    { media: "(prefers-color-scheme: dark)", color: "#faf8f3" },
  ],
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getServerLocale();
  return (
    <html
      lang={locale}
      data-scroll-behavior="smooth"
      className={`${fontDisplay.variable} ${fontSans.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-paper font-sans text-primary">
        <LocaleProvider initialLocale={locale}>{children}</LocaleProvider>
        <form
          name="inquiry"
          data-netlify="true"
          netlify-honeypot="bot-field"
          hidden
          aria-hidden="true"
        >
          <input type="text" name="name" />
          <input type="email" name="email" />
          <input type="tel" name="phone" />
          <input type="number" name="guests" />
          <input type="text" name="checkin" />
          <input type="text" name="checkout" />
          <input type="number" name="nights" />
          <input type="text" name="locale" />
          <textarea name="message" />
          <input type="text" name="bot-field" />
        </form>
      </body>
    </html>
  );
}
