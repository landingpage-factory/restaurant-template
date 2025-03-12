// app/catering/page.js
"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Parallax from "../components/Parallax";
import { PiFlowerLotusThin } from "react-icons/pi";
import { Link as ScrollLink } from "react-scroll";

export default function CateringPage() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Parallax Hero Section */}
      <Parallax
        backgroundImage="/images/bg-catering.jpg"
        priority={true}
      >
        <div className="absolute inset-0 bg-black/50"></div> {/* Overlay */}
        <div
          id="catering"
          className="relative z-10 h-[400px] flex items-center justify-center"
        >
          <div className="text-center" data-aos="fade-up" data-aos-delay="200">
            <h1 className="text-5xl md:text-6xl font-bold text-soft-gold mb-4">
              Catering
            </h1>
            <p className="text-xl text-foreground max-w-2xl mx-auto">
              Catering für jeden Geschmack – Wir bringen Genuss zu Ihnen!
            </p>
          </div>
        </div>
      </Parallax>

      {/* Catering Services Section */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6" data-aos="fade-right" data-aos-delay="300">
            <h2 className="text-4xl font-bold text-soft-gold">
              Unser Catering-Service
            </h2>
            <p className="text-lg text-beige-gray">
              Ob Firmenfeier, Hochzeit oder privates Event – unser
              Catering-Service verwöhnt Sie und Ihre Gäste mit kulinarischen
              Highlights. Wir bieten maßgeschneiderte Menüs, die jeden Anlass
              unvergesslich machen.
            </p>
            <ul className="list-inside text-beige-gray space-y-2">
              <li className="flex items-center">
                <PiFlowerLotusThin className="mr-2" /> Individuelle Menüplanung
              </li>
              <li className="flex items-center">
                <PiFlowerLotusThin className="mr-2" /> Frische Zutaten aus der
                Region
              </li>
              <li className="flex items-center">
                <PiFlowerLotusThin className="mr-2" /> Professioneller Service
              </li>
              <li className="flex items-center">
                <PiFlowerLotusThin className="mr-2" /> Flexible Standorte
              </li>
            </ul>
          </div>

          {/* Image */}
          <div
            className="bg-dark-taupe p-6 shadow-xl"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <Image
              src="/images/catering/catering-service.jpg"
              alt="Catering Service"
              width={600}
              height={400}
              priority={true}
              className="w-full h-80 object-cover"
            />
          </div>
        </div>
      </div>

      {/* Menu Options Section */}
      <div className="bg-dark-taupe py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl font-semibold mb-12 text-center relative flex items-center justify-center text-soft-gold">
              <span className="flex-1 h-px bg-soft-gold/40 max-w-[120px]"></span>
              <span className="px-4">Unsere Menüoptionen</span>
              <span className="flex-1 h-px bg-soft-gold/40 max-w-[120px]"></span>
            </h2>
            <p className="text-foreground text-center mt-6 mb-6">
              Entdecken Sie unsere Catering-Angebote
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Option 1 */}
            <div
              className="bg-background p-6 shadow-lg"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h3 className="text-2xl font-bold text-soft-gold mb-4">
                Klassisches Buffet
              </h3>
              <p className="text-beige-gray">
                Eine Auswahl unserer beliebtesten Gerichte, perfekt für große
                Veranstaltungen.
              </p>
            </div>

            {/* Option 2 */}
            <div
              className="bg-background p-6 shadow-lg"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <h3 className="text-2xl font-bold text-soft-gold mb-4">
                Fine Dining
              </h3>
              <p className="text-beige-gray">
                Exquisite Menüs mit mehreren Gängen für anspruchsvolle
                Feinschmecker.
              </p>
            </div>

            {/* Option 3 */}
            <div
              className="bg-background p-6 shadow-lg"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <h3 className="text-2xl font-bold text-soft-gold mb-4">
                Street Food
              </h3>
              <p className="text-beige-gray">
                Leckere Snacks und Fingerfood für lockere Events und Partys.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div
          className=" p-8 text-center"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h2 className="text-4xl font-bold text-soft-gold mb-4">
            Jetzt Catering anfragen!
          </h2>
          <p className="text-lg text-beige-gray mb-6">
            Kontaktieren Sie uns für ein unverbindliches Angebot und lassen Sie
            uns gemeinsam Ihr Event planen.
          </p>

          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            className="px-8 py-3 bg-soft-gold text-foreground hover:text-gray-900 font-semibold hover:bg-beige-gray hover:cursor-pointer transition-all duration-300"
          >
            Anfrage senden
          </ScrollLink>
        </div>
      </div>
    </div>
  );
}
