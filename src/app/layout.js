import "./globals.css";
import "animate.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import { Toaster } from "react-hot-toast";




export const metadata = {
  title: "ScholarArchive",
  description: "Your personal digital archive for scholarly pursuits.",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Newsreader:ital,wght@0,400;0,600;1,400&family=Manrope:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
    <body>
        <Toaster position="top-center" />
        <Navbar />
        {children}
        <Footer />
      </body>
     </html>
  );
 }