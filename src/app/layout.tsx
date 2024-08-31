import type { Metadata } from "next";

import "./globals.css";
import "./assets/main.scss";

import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main> {children}</main>
        <Footer />
      </body>
    </html>
  );
}
