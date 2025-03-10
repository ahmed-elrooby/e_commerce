import { Poppins, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import QueryProvider from "@/components/QueryProvider/QueryProvider";
import Up from "@/components/UP/Up";


const geistPoppins= Poppins({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight:["100","500"]
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body
        className={`${geistPoppins.variable}  antialiased`}

      >
        <Up />
        <QueryProvider>
        <Navbar/>
        {children}
        <Footer/>
        </QueryProvider>
      
      
      </body>
    </html>
  );
}
