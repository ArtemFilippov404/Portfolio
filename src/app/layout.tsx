import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

//components
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Filippov Artem",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={poppins.className + ' ' +'App'}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
