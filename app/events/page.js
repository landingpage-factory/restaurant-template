// app/components/Events.js
"use client";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import Parallax from "../components/Parallax";

const events = [
  {
    id: 1,
    title: "Geburtstagsfeiern",
    image: "/restaurant-template/images/events/birthday.jpg",
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
    image: "/restaurant-template/images/events/private.jpg",
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
    image: "/restaurant-template/images/events/corporate.jpg",
    description: "Professionelle Veranstaltungen für Ihr Unternehmen.",
    details: [
      "Moderne Räumlichkeiten",
      "Catering-Service",
      "Technische Ausstattung",
    ],
  },
];

export default function Events() {
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
      <Parallax backgroundImage="/restaurant-template/images/events/events-bg.jpg">
        <div
          id="events"
          className="container mx-auto px-4 py-20 relative z-10 text-center"
        >
          <h1
            className="text-4xl sm:text-5xl font-bold text-soft-gold mb-6"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Unsere Events
          </h1>
          <p
            className="text-lg text-foreground"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Unvergessliche Veranstaltungen für jeden Anlass
          </p>
        </div>
      </Parallax>

      {/* Events-Inhalt */}
      <section className="bg-background py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl font-semibold mb-12 text-center relative flex items-center justify-center">
              <span className="flex-1 h-px bg-white/40 max-w-[120px]"></span>
              <span className="px-4">Veranstaltungen</span>
              <span className="flex-1 h-px bg-white/40 max-w-[120px]"></span>
            </h2>
            <p className="text-foreground">
              Entdecken Sie unsere Event-Angebote
            </p>
          </div>

          {/* Swiper mit Autoplay */}
          <div
            className="container mx-auto px-4 max-w-6xl overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true }}
              autoplay={{
                delay: 4000, // 3 Sekunden pro Slide
                disableOnInteraction: false, // Autoplay wird nach Interaktion fortgesetzt
              }}
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{
                768: {
                  slidesPerView: 1,
                },
                1024: {
                  slidesPerView: 1,
                },
              }}
              className="events-slider"
            >
              {events.map((event) => (
                <SwiperSlide key={event.id}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Bildbereich */}
                    <div className="relative h-64 md:h-96">
                      <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>

                    {/* Textbereich */}
                    <div className="flex flex-col justify-center">
                      <h3 className="text-2xl font-bold text-soft-gold mb-4">
                        {event.title}
                      </h3>
                      <div className="text-lg font-semibold text-light-yellow mb-4">
                      </div>
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
                        Wir kümmern uns um jedes Detail, um Ihre Veranstaltung
                        unvergesslich zu machen.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}
