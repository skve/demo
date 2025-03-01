import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import type { Metadata } from "next";

import "./globals.css";

import { SlideContainer } from "./components/slide/slide-container";
import { fontSuisse } from "./fonts/demo-fonts";

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
      className={`${geistSans.variable} ${geistMono.variable} ${fontSuisse.variable} antialiased `}
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
