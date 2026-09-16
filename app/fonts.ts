import localFont from "next/font/local";

export const dmSans = localFont({
  variable: "--font-dm-sans",
  display: "swap",
  src: [
    { path: "../public/assets/fonts/dm-sans-400.ttf", weight: "400", style: "normal" },
    { path: "../public/assets/fonts/dm-sans-500.ttf", weight: "500", style: "normal" },
    { path: "../public/assets/fonts/dm-sans-600.ttf", weight: "600", style: "normal" },
    { path: "../public/assets/fonts/dm-sans-700.ttf", weight: "700", style: "normal" }
  ]
});

export const raleway = localFont({
  variable: "--font-raleway",
  display: "swap",
  src: [
    { path: "../public/assets/fonts/raleway-500.ttf", weight: "500", style: "normal" },
    { path: "../public/assets/fonts/raleway-600.ttf", weight: "600", style: "normal" },
    { path: "../public/assets/fonts/raleway-700.ttf", weight: "700", style: "normal" }
  ]
});
