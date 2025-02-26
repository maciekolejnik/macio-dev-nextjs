import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/ui/globals.css";
import NavBar from "@/app/ui/navbar";
import Logo from "./ui/logo";
import Footer from "./ui/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Macio dev",
  description: "Fairly random collection of posts, articles, tools, advice etc",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white flex flex-col min-h-screen">
        <div className="container mx-auto max-w-5xl px-4 flex flex-col flex-grow">
          <NavBar/>
          <main className="flex-grow">{children}</main>
          <Footer/>
        </div>
      </body>
    </html>
  );
}
