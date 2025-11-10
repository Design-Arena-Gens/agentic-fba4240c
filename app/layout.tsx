import type { Metadata } from "next";
import "./globals.css";
import { Fredoka } from "next/font/google";

const fredoka = Fredoka({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "Animal Alphabet Adventure",
  description: "A playful A?Z animal rhyme for kids.",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "Animal Alphabet Adventure",
    description: "A playful A?Z animal rhyme for kids.",
    url: "https://agentic-fba4240c.vercel.app",
    siteName: "Animal Alphabet Adventure",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Animal Alphabet Adventure",
    description: "A playful A?Z animal rhyme for kids."
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={fredoka.className}>{children}</body>
    </html>
  );
}
