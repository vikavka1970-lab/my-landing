import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-syne",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Виктория Полтавченко — создаю сайты и внедряю AI-автоматизацию",
  description:
    "Личный сайт эксперта по AI и цифровым технологиям. Сайты под ключ и ИИ-агенты для бизнеса.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body
        className={`${syne.variable} ${dmSans.variable} font-body bg-bg text-text-primary antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
