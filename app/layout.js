import { Poppins  } from "next/font/google";
import "./globals.css";
import 'aos/dist/aos.css';
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";

// Definiere Poppins als benutzerdefinierte Schriftart
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],          
  weight: ["400", "500", "600"], 
});

export const metadata = {
  title: "Restaurant Template",
  description: "Modern und anpassbares Template für Restaurant-Websites, entwickelt mit Next.js und Tailwind CSS. Perfekt für Restaurants, Cafés und mehr.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body className={poppins.className}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
