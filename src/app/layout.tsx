import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localfont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const euclidCircularB = localfont({
  src: [
    {
      path: "../fonts/EuclidCircularB-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/EuclidCircularB-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/EuclidCircularB-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-euclid-circular-b",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dawa Mkononi · Pharmaceuticals At Your Fingertips",
  description:
    "Dawa Mkononi, Pharmaceuticals At Your Fingertips buy medicine online, mobile app, medicine delivery, oda",
  keywords:
    "buy order delivery online medicines,dawa nunua bei kuagiza kuletewa oda Dawa Mkononi Pharmaceuticals madawa",
  authors: [{ name: "churchycodes" }],
  openGraph: {
    title: "Dawa Mkononi · Pharmaceuticals At Your Fingertips",
    siteName: "www.dawamkononi.co.tz",
    description:
      "Dawa Mkononi (DM) is a registered company that mainly focuses on innovations to improve pharmaceutical supply chain. The app is run by DM Pharmacy located at Kariakoo in Dar es Salaam. The app currently serves for wholesale business only to pharmacies, ADDOs, and health facilities such as Hospitals and Clinics.",
  },
  alternates: {
    // android: "https://play.google.com/store/apps/details?id=com.dawamkononi.buyers",
    // ios: "https://apps.apple.com/tz/app/dawa-mkononi/id1625919956",
  },
  other: {
    "al:android:app_name": "dawa mkononi",
    "al:ios:app_name": "dawa mkononi",
    "al:ios:app_store_id": "id1625919956",
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
        className={`${geistSans.variable} ${geistMono.variable} ${euclidCircularB.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
