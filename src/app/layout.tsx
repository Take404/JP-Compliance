import type { Metadata } from "next";
import { Noto_Sans_JP, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
  variable: "--font-jp",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
  variable: "--font-en",
  display: "swap",
});

export const metadata: Metadata = {
  title: "JP Compliance | 製薬企業向けコンプライアンス支援",
  description: "製薬企業のコンプライアンス体制を、資材審査から組織設計まで包括的に支援します。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} ${inter.variable}`}>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
