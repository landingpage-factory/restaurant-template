// app/components/SwiperComponent.js
"use client";
import { useEffect, useRef } from "react";
import Glide from "@glidejs/glide";
import Image from "next/image";

// Deine Events-Daten
const events = [
  {
    id: 1,
    title: "Geburtstagsfeiern",
    image: "/images/events/birthday.jpg",
    description: "Feiern Sie Ihren besonderen Tag mit uns!",
    details: [
      "Persönliche Menüauswahl",
      "Dekoration nach Wunsch",
      "Professionelle Betreuung",
    ],
  },
  {
    id: 2,
    title: "Private Feiern",
    image: "/images/events/private.jpg",
    description: "Exklusive Veranstaltungen für Ihre Gäste.",
    details: [
      "Individuelle Raumgestaltung",
      "Gourmet-Menüs",
      "Musik und Unterhaltung",
    ],
  },
  {
    id: 3,
    title: "Firmenevents",
    image: "/images/events/corporate.jpg",
    description: "Professionelle Veranstaltungen für Ihr Unternehmen.",
    details: [
      "Moderne Räumlichkeiten",
      "Catering-Service",
      "Technische Ausstattung",
    ],
  },
];

export default function SwiperComponent() {
  const glideRef = useRef(null);

  useEffect(() => {
    // Glide.js-Initialisierung
    const glide = new Glide(glideRef.current, {
      type: 'carousel',
      perView: 1,
      autoplay: 3000,
      hoverpause: true,
      focusAt: 'center',
      gap: 30,
      breakpoints: {
        640: {
          perView: 1,
          gap: 10,
        },
        768: {
          perView: 1,
          gap: 20,
        },
        1024: {
          perView: 1,
          gap: 30,
        },
      },
    });

    glide.mount();

    // Bereinige den Glide-Instanz bei der Komponenten-Demontage
    return () => glide.destroy();
  }, []);

  return (
    <div className="container mx-auto px-4 max-w-full overflow-hidden">
      <div className="glide" ref={glideRef}>
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            {events.map((event) => (
              <li key={event.id} className="glide__slide">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative w-full h-64 md:h-96">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      priority={true}
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-soft-gold mb-4">
                      {event.title}
                    </h3>
                    <p className="italic text-gray-300 mb-4">
                      {event.description}
                    </p>
                    <ul className="space-y-2 mb-4">
                      {event.details.map((detail, index) => (
                        <li key={index} className="flex items-center">
                          <span className="text-soft-gold mr-2">✓</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                    <p className="text-gray-300 mb-9 md:mb-32 lg:mb-40">
                      Wir kümmern uns um jedes Detail, um Ihre Veranstaltung unvergesslich zu machen.
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Pagination-Dots */}
        <div className="glide__bullets" data-glide-el="controls[nav]" style={{ position: 'relative', marginTop: '16px', textAlign: 'center' }}>
          {events.map((_, index) => (
            <button key={index} className="glide__bullet" data-glide-dir={`=${index}`} />
          ))}
        </div>
      </div>
    </div>
  );
}
