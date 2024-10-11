import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import {Roboto} from '@next/font/google';
import {Press_Start_2P} from '@next/font/google';

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
  title: "Create Next App",
  description: "Generated by create next app",
};

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ["latin"],
})

const pressStart2P = Press_Start_2P({
  weight: ['400'],
  subsets: ["latin"],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pressStart2P.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
