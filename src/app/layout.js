import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Foteer from "@/components/Foteer";
import Authprovider from "@/services/Authprovider";

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CarDoctor Pro",
  description: "A car repare shop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="mytheme">
            <Authprovider>
     

      <body className={inter.className}>
      <ToastContainer></ToastContainer>
        <Navbar></Navbar>
        {children}
        <Foteer></Foteer>
        
 
        </body>
      
        </Authprovider>
    </html>
  );
}
