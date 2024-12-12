import type { Metadata } from "next";
import { Kumbh_Sans } from "next/font/google";

import { Menu } from "@/components/Menu";
import { Footer } from "@/components/Footer";

import { Providers } from "./providers";

import "./globals.css";

const font = Kumbh_Sans({
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "IMTG",
  description: "Igreja Ministerial Tempo da Graça",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="light">
      <body className={font.className}>
        <Providers>
          <main>
            <Menu />
            {children}
            <Footer />
          </main>
        </Providers>
      </body>
    </html>
  );
}
