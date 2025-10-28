import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import ProvaiderComponent from "@/redux/provaider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Exclusive - Electronics Store in Bangladesh",
  description:
    "TechZone is Bangladesh’s trusted electronics store offering authentic laptops, desktops, mobiles, and gadgets at the best prices with fast delivery.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ProvaiderComponent>
          <Navbar />
          {children}
          <Footer />
        </ProvaiderComponent>
      </body>
    </html>
  );
}
