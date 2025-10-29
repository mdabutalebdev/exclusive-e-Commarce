import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import ProvaiderComponent from "@/redux/provaider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"], 
  display: "swap",
});

export const metadata = {
  title: "Exclusive - Electronics Store in Bangladesh",
  description:
    "TechZone is Bangladesh’s trusted electronics store offering authentic laptops, desktops, mobiles, and gadgets at the best prices with fast delivery.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <ProvaiderComponent>
          <Navbar />
          {children}
          <Footer />
        </ProvaiderComponent>
      </body>
    </html>
  );
}
