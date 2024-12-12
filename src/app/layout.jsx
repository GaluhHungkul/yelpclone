"use client"

import { usePathname } from "next/navigation";
import Navbar from "./Components/Navbar";

import "./globals.css";


export default function RootLayout({ children }) {

  const disableNavbar = ['/login','/register']
  const pathname = usePathname()

  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        {!disableNavbar.includes(pathname) && <Navbar />}
        {children}
      </body>
    </html>
  );
}
