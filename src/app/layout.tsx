import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import { ThemeProvider } from "@/components/ui/theme/provider";

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: "100",
});

export const metadata: Metadata = {
  title: "",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lato.variable} bg-background text`}>
        <ThemeProvider>
          <section className="layout">
            <Header />
            {children}
            <Footer />
          </section>
        </ThemeProvider>
      </body>
    </html>
  );
}
