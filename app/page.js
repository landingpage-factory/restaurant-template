// app/page.js
'use client'
import { Link as ScrollLink } from "react-scroll";
import PageTopButton from './components/PageTopButton';
import About from "./about/page";
import Menu from "./menu/page";
import Events from "./events/page";
import Reservierung from "./reservations/page";
import ContactPage from "./contact/page";
import CateringPage from "./catering/page";
import GalleryPage from "./gallery/page";

export default function Home() {
  
  return (
    <div className="overflow-hidden">
    <section
        id="home"
        className="h-screen flex items-center bg-background relative overflow-hidden"
      >
      <div className="container mx-auto px-4 py-20 relative z-10">


        <div
          className="max-w-6xl mx-auto text-center lg:text-left"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <div className="space-y-8">
            <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-6xl font-bold mb-6">
              <span className="block text-foreground mb-4">Willkommen bei</span>
              <span className="text-soft-gold font-cursive text-4xl sm:text-4xl md:text-5xl lg:text-8xl border-b-4 border-soft-gold pb-2 tracking-wide">
                Dein Restaurant
              </span>
            </h1>

            <h2 className="text-xl md:text-2xl text-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed mt-12">
              Frische und Leidenschaft, die seit Jahren begeistern!
            </h2>

            <div className="flex flex-col md:flex-row gap-6 justify-center lg:justify-start mt-12">
              <ScrollLink
                to="menu"
                smooth={true}
                duration={800}
                className="border-2 border-[var(--beige-gray)] text-[var(--foreground)] px-8 py-4 
             font-bold uppercase tracking-wider hover:bg-[var(--beige-gray)]/75 hover:border-[var(--foreground)]
             transition-all duration-300 shadow-lg bg-gray-800/30 hover:cursor-pointer"
              >
                Unsere Speisekarte
              </ScrollLink>

              <ScrollLink
                to="reservations"
                smooth={true}
                duration={800}
                className="border-2 border-[var(--beige-gray)] text-[var(--foreground)] px-8 py-4  
             font-bold uppercase tracking-wider hover:bg-[var(--beige-gray)]/75 hover:border-[var(--foreground)]
             transition-all duration-300 shadow-lg bg-gray-800/30 hover:cursor-pointer"
              >
                Tisch reservieren
              </ScrollLink>
            </div>
          </div>
        </div>
      </div>

      {/* Hintergrundbild mit Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/bg-home.jpg')",  // Richtige Schließung der Anführungszeichen
          transform: "scaleX(-1)",
         }}
        
        data-aos="fade"
        data-aos-delay="300"
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-30"></div>{" "}
        {/* Das Overlay ist hier */}
      </div>
    </section>
    <CateringPage/>
    <Events/>
    <Reservierung/>
    <Menu /> 
    <GalleryPage/>
    <About/>
    <ContactPage/>
    {/* PageTop-Button */}
    <PageTopButton />
    </div>
  );
}
