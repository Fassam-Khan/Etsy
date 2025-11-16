import "./globals.css";
import Navbar from "@/components/mycomponent/Header";
import Footer from "@/components/mycomponent/Footer";
import { Poppins } from 'next/font/google'; // 1. Import Poppins
import Header from "@/components/mycomponent/Header";
import { ClerkProvider } from "@clerk/nextjs";


// 2. Configure the font instance
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '600', '700', '900'], // Select the weights you need
  variable: '--font-poppins', // Assign a CSS variable name
});


export const metadata = {
  title: "WeImagine Handmade Jewelry | Unique, Elegant & Timeless Designs",
  description: "Shop handmade jewelry by WeImagine. Discover elegant earrings, necklaces & bracelets crafted with passion and care.",
};

export default function Layout({ children }) {
  return (

    <ClerkProvider>
      <html lang="en" className={poppins.variable}>
        <body>
          {children}
        </body>
      </html>
    </ClerkProvider>

  );
}
