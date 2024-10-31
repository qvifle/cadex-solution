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

const domain = process.env.VERCEL_URL ?? "localhost";
export const metadata: Metadata = {
  title: {
    default: "Some company",
    template: "%s | Some company",
  },
  description: "Test case by Kopytin Igor",
  keywords: ["Awesome Site", "Content", "Blog", "Articles", "Information"],
  authors: [{ name: "Kopytin Igor", url: domain }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: domain,
    title: "Some company",
    description: "Test case by Kopytin Igor",
    siteName: "Some company",
    images: [
      {
        url: domain + "/opengraph-image.png",
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
    site: domain,
    images: [domain + "/opengraph-image.png"],
  },
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
