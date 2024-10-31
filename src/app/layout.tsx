import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import Header from "@/components/layout/Header";
import Main from "@/components/layout/Main";
import Layout from "@/components/layout/Layout";
import Footer from "@/components/layout/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 700 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 700 900",
});

export const metadata: Metadata = {
  title: {
    default: "Some company",
    template: "%s | Some company",
  },
  description: "Test case by Kopytin Igor",
  keywords: ["Awesome Site", "Content", "Blog", "Articles", "Information"],
  authors: [{ name: "Kopytin Igor", url: "https://mateeria.ru" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    // url: "https://yourwebsite.com",
    title: "Some company",
    description: "Test case by Kopytin Igor",
    siteName: "Some company",
    images: [
      {
        url: "https://mateeria.ru/opengraph-image.svg",
        width: 1200,
        height: 630,
        alt: "Some company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Some company",
    description: "Join Some company to explore high-quality content!",
    // site: "@yourTwitterHandle",
    // creator: "@yourTwitterHandle",
    images: ["https://yourwebsite.com/twitter-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Theme>
          <Layout>
            <Header />
            <Main>{children}</Main>
            <Footer />
          </Layout>
        </Theme>
      </body>
    </html>
  );
}
