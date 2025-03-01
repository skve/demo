import localFont from "next/font/local";
import { Inter } from "next/font/google";

export const fontSuisse = localFont({
  src: [
    {
      path: "./suisse/SuisseIntl-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./suisse/SuisseIntl-Book.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-suisse",
});

export const fontInter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
