import 'bootstrap/dist/css/bootstrap.css';
import { Children } from 'react';
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"


const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "600", "700"],
  variable: "--font-poppins"
});

export const metadata: Metadata = {
  title: "Alice Moradiya - Web Developer",
  description: "Created by Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}
      <SpeedInsights/>
      </body>
    </html>
  );
}
