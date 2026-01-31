import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar"; // Import Navbar yang baru dibuat

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portofolio | Mahasiswa Teknik Informatika",
  description: "Portofolio Fullstack Web Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Navbar /> {/* Letakkan Navbar di sini */}
        {children}
      </body>
    </html>
  );
}