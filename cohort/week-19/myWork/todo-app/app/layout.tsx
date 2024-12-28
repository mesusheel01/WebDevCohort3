import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Button from "./components/Button";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-[10vh] bg-gray-400 text-black flex items-center justify-between ">
            {/* logo */}
            <div className="ml-16 text-xl font-mono">Todo</div>
            <div className="mr-16  flex gap-1">
                <p className="font-mono  p-2 rounded-xl hover:shadow-lg hover:shadow-black transition-all duration-300">Home</p>
                <p className="font-mono  p-2 rounded-xl hover:shadow-lg hover:shadow-black transition-all duration-300">Products</p>
                <p className="font-mono  p-2 rounded-xl hover:shadow-lg hover:shadow-black transition-all duration-300">About Us</p>
            </div>
        </div>
        {children}
      </body>
    </html>
  );
}