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
          <Toaster
            position="top-center"
            toastOptions={{
              style: {
                padding: "16px",
                borderRadius: "12px",
                fontSize: "16px",
                maxWidth: "500px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              },
              success: {
                style: {
                  background: "#E7F9F1",
                  color: "#1B4739",
                  border: "1px solid #A5E7CD",
                },
                iconTheme: {
                  primary: "#2F9461",
                  secondary: "#E7F9F1",
                },
              },
              error: {
                style: {
                  background: "#FEF3F2",
                  color: "#7A271A",
                  border: "1px solid #FEE4E2",
                },
                iconTheme: {
                  primary: "#D92D20",
                  secondary: "#FEF3F2",
                },
              },
              loading: {
                style: {
                  background: "#FFFAEB",
                  color: "#7A4510",
                  border: "1px solid #FEDF89",
                },
                iconTheme: {
                  primary: "#F79009",
                  secondary: "#FFFAEB",
                },
              },

              duration: 4000,
            }}
          />
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
