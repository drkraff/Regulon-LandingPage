import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AccessibilityWidget } from "@/components/AccessibilityWidget";
import { MaterialIconsLoader } from "@/components/MaterialIconsLoader";
import { siteConfig } from "@/lib/site-config";

const heebo = Heebo({
  variable: "--font-heebo",
  subsets: ["latin", "hebrew"],
  display: "swap",
});

const { meta, locale } = siteConfig;

export const metadata: Metadata = {
  title: meta.defaultTitle,
  description: meta.defaultDescription,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={locale.lang} dir={locale.dir}>
      <body className={`${heebo.variable} font-sans antialiased`}>
        <MaterialIconsLoader />
        <a
          href="/#main"
          className="sr-only focus:absolute focus:top-4 focus:right-4 focus:rounded focus:bg-primary focus:px-4 focus:py-2 focus:text-white focus:outline-none focus:ring-2 focus:ring-white"
        >
          {siteConfig.skipLinkText}
        </a>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main id="main" className="flex-1">{children}</main>
          <Footer />
        </div>
        <AccessibilityWidget />
      </body>
    </html>
  );
}
