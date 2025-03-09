// app/components/Specials.js
"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Parallax from "../components/Parallax";

const specials = [
  {
    id: 1,
    name: "Trüffel-Ravioli",
    description:
      "Hausgemachte Ravioli mit feiner Trüffel-Ricotta-Füllung, serviert in einer Butter-Salbei-Sauce.",
    image: "/images/specials/truffel-ravioli.jpg",
  },
  {
    id: 2,
    name: "Gegrillter Lachs",
    description:
      "Frischer Lachsfilet auf Zitronen-Dill-Sauce mit saisonalem Gemüse und Kartoffelpüree.",
    image: "/images/specials/grilled-salmon.jpg",
  },
  {
    id: 3,
    name: "Tomahawk-Steak",
    description:
      "Dry-aged Tomahawk-Steak mit Kräuterbutter, dazu Rosmarinkartoffeln und Grillgemüse.",
    image: "/images/specials/tomahawk-steak.jpg",
  },
  {
    id: 4,
    name: "Vegane Buddha Bowl",
    name: "Buddha Bowl",
    description:
      "Bunte Bowl mit Hähnchenbrust, Avocado, Edamame, Süßkartoffeln und hausgemachtem Tahini-Dressing.",
    image: "/images/specials/buddha-bowl.jpg",
  },
  {
    id: 5,
    name: "Schokoladenfondant",
    description:
      "Warmer Schokoladenkuchen mit flüssigem Kern, serviert mit hausgemachtem Vanilleeis.",
    image: "/images/specials/chocolate-fondant.jpg",
  },
];

export default function Specials() {
  const [activeSpecial, setActiveSpecial] = useState(specials[0]);

  useEffect(() => {
    import("aos").then((AOS) => {
      AOS.init({
        duration: 1000,
        once: false,
      });
    });
  }, []);

  return (
    <>
      {/* Parallax-Sektion */}
      <Parallax backgroundImage="/images/specials/specials-bg.jpg">
        <div className="container mx-auto px-4 py-20 relative z-10 text-center">
          <h1
            className="text-4xl sm:text-5xl font-bold text-soft-gold mb-6"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Unsere Specials
          </h1>
          <p
            className="text-lg text-foreground"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Entdecken Sie unsere exklusiven Kreationen
          </p>
        </div>
      </Parallax>

      {/* Specials-Inhalt */}
      <section id="specials" className="bg-background text-white py-16">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-4xl text-soft-gold font-semibold mb-4 text-center relative flex items-center justify-center">
              <span className="flex-1 h-px bg-soft-gold/40 max-w-[120px]"></span>
              <span className="px-4">Specials</span>
              <span className="flex-1 h-px bg-soft-gold/40 max-w-[120px]"></span>
            </h2>
            <p className="text-foreground mt-2">
              Entdecke unsere besonderen Highlights
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Tab-Navigation */}
            <div className="md:col-span-1">
              <ul className="space-y-4">
                {specials.map((special) => (
                  <li
                    key={special.id}
                    data-aos="fade-right"
                    data-aos-delay={special.id * 100}
                  >
                    <button
                      className={`w-full text-left py-3 px-4 font-semibold transition-all ${
                        activeSpecial.id === special.id
                          ? "bg-soft-gold text-gray-800"
                          : "text-foreground hover:text-soft-gold"
                      } transition-colors duration-300 cursor-pointer`}
                      onClick={() => setActiveSpecial(special)}
                    >
                      {special.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Content-Bereich */}
            <div className="md:col-span-3">
              <div
                className="bg-gray-900 p-6 flex flex-col md:flex-row items-center gap-6 shadow-lg"
                data-aos="fade-left"
              >
                <div className="relative w-full md:w-1/3 h-48 md:h-72">
                  <Image
                    src={activeSpecial.image}
                    alt={activeSpecial.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="w-full md:w-1/2 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-soft-gold">
                    {activeSpecial.name}
                  </h3>
                  <p className="text-gray-300 mt-2">
                    {activeSpecial.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
