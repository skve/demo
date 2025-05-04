import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import type { Metadata } from "next";

import "./globals.css";

import { fontSuisse, fontInter } from "./fonts/demo-fonts";

import { SlideContainer } from "./components/slide/slide-container";
import { lukas } from "./fonts/lukas/lukas";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Luke Shiels | Selected Works",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`bg-gray-3 ${geistSans.variable} ${geistMono.variable} ${fontSuisse.variable} ${fontInter.variable} ${lukas.variable} antialiased dark`}
      suppressHydrationWarning
    >

      <body className="h-dvh">
        <ThemeProvider attribute="class" forcedTheme="dark">
          <SlideContainer>{children}</SlideContainer>
        </ThemeProvider>
      </body>
    </html>
  );
}
