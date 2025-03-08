import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const montserrat = Montserrat({
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Lexiscript",
  description: "Introduction page of lexiscript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat} antialiased`}>
        <Providers> {/* added - heroui */}
          {children}
        </Providers> 
      </body>
    </html>
  );
}
