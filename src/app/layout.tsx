import type { Metadata } from "next";
import { Rouge_Script, Narnoor } from "next/font/google";
import "./globals.css";

const rougeScript = Rouge_Script({
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[var(--background)]">
        {children}
      </body>
    </html>
  );
}
