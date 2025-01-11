import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Sikkhon's Instructors Contest 1.0 - Win £1,000",
  description:
    "Join Sikkhon's Instructors Contest 1.0 and turn your expertise into impactful online courses. Compete for the £1,000 grand prize and reach millions of learners worldwide.",
  metadataBase: new URL("https://campaign.sikkhon.com"),
  openGraph: {
    title: "Sikkhon's Instructors Contest 1.0 - Win £1,000",
    description:
      "Join Sikkhon's Instructors Contest 1.0 and turn your expertise into impactful online courses. Compete for the £1,000 grand prize and reach millions of learners worldwide.",
    url: "https://campaign.sikkhon.com",
    siteName: "Sikkhon's Instructors Contest",
    images: [
      {
        url: "https://media.dizishore.com/sikkhon.com/2024/12/20241221_Sikkhon_Landing%20Page%20Hero%20Section%20Image.png",
        width: 1200,
        height: 630,
        alt: "Sikkhon's Instructors Contest 1.0",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sikkhon's Instructors Contest 1.0 - Win £1,000",
    description:
      "Join Sikkhon's Instructors Contest 1.0 and turn your expertise into impactful online courses. Compete for the £1,000 grand prize and reach millions of learners worldwide.",
    images: [
      "https://media.dizishore.com/sikkhon.com/2024/12/20241221_Sikkhon_Landing%20Page%20Hero%20Section%20Image.png",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <GoogleAnalytics />
      </head>
      <body className="antialiased font-sans">{children}</body>
    </html>
  );
}
