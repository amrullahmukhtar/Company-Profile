import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./_component/navbar";
import Footer from "./_component/footer";



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AM Consultant",
  description: "Konsulutan Terpercaya",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
         

      <body className={inter.className}>
      
      <Navbar></Navbar>

        {children}
      <Footer></Footer>
        </body>
    </html>
  );
}
