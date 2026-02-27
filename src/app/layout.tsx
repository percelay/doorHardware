import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Door Hardware | Commercial Doors & Architectural Hardware — Since 1909",
  description:
    "The East Coast's premier source for commercial hollow metal doors, architectural hardware, and wood doors. Serving contractors and building owners from Middlesex County, NJ since 1909.",
  keywords:
    "commercial doors, architectural hardware, hollow metal doors, wood doors, locksmith, Division 8, AHC, New Jersey",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-[var(--font-inter)] bg-bg text-text-main antialiased">
        {children}
      </body>
    </html>
  );
}
