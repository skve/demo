import localFont from "next/font/local";

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
