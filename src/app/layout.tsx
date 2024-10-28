import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import { Providers } from "./providers";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DigiTech Edge",
  description: "Official website of DigiTech Edge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Toaster position="top-center" />
          <main className="flex flex-col min-h-screen max-w-screen-2xl mx-auto">
            <NavBar />
            <section className="flex-grow">{children}</section>
            <Footer />
          </main>
        </Providers>
      </body>
    </html>
  );
}
