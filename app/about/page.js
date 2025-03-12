// app/about/page.js
"use client";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";
import Parallax from "../components/Parallax";

export default function About() {
  
  return (
    <section id="about">
      {/* Parallax Sektion mit benutzerdefiniertem Stil */}
      <Parallax
        backgroundImage="/images/about-bg.jpg"
        priority="true"
        className="relative h-[500px] flex justify-center items-center text-center"
      >
        <div className="container mx-auto px-4 py-20 relative z-10 text-center">
          <h1
            className="text-4xl sm:text-5xl font-bold text-soft-gold mb-6 mt-12"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Unsere Geschichte
          </h1>
          <p
            className="text-lg mb-6 text-foreground"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Lernen Sie die Menschen hinter unserem Restaurant kennen.
          </p>
          <div data-aos="fade-up" data-aos-delay="300" className="p-6">
            <ScrollLink
              to="our-story"
              smooth={true}
              duration={500}
              offset={-50}
              className="border-2 border-[var(--beige-gray)] text-[var(--foreground)] px-8 py-4 
             font-bold uppercase tracking-wider hover:bg-[var(--beige-gray)]/75 hover:border-[var(--foreground)]
             transition-all duration-300 shadow-lg bg-gray-800/30 z-50 hover:cursor-pointer"
            >
              Mehr erfahren
            </ScrollLink>
          </div>
        </div>
      </Parallax>

      {/* Abschnitt mit Informationen über das Restaurant */}
      <div id="our-story" className="py-16 bg-background">
        <div className="max-w-6xl mx-auto leading-relaxed text-justify container px-4 py-20 relative z-10">
          <h2 className="text-3xl text-soft-gold font-semibold mb-4 text-center relative flex items-center justify-center">
            <span className="flex-1 h-px bg-soft-gold/40 max-w-[120px]"></span>
            <span className="px-4">Unsere Philosophie</span>
            <span className="flex-1 h-px bg-soft-gold/40 max-w-[120px]"></span>
          </h2>
          <p className="text-lg mb-6">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet.
          </p>
          <p className="text-lg mb-6">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>

      {/* Weitere Parallax Sektion mit einer anderen Bildunterschrift */}
      <Parallax
        backgroundImage="/images/chef-cooking.jpg"
        className="relative min-h-[500px] flex justify-center items-center text-center"
      >
        <div className="container mx-auto px-4 py-20 relative z-10 text-center">
          <div className="max-w-6xl mx-auto leading-relaxed text-justify">
            <h2
              className="text-3xl text-soft-gold font-semibold mb-4 text-center relative flex items-center justify-center"
              data-aos="fade-up"
            >
              <span className="flex-1 h-px bg-soft-gold/40 max-w-[120px]"></span>
              <span className="px-4">Unsere Werte</span>
              <span className="flex-1 h-px bg-soft-gold/40 max-w-[120px]"></span>
            </h2>
            <p
              className="text-lg mt-4 mb-6 text-foreground"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet.
            </p>
            <p
              className="text-lg mt-4 text-foreground"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
      </Parallax>

      {/* Ein weiterer Abschnitt für kulinarische Einblicke oder Mitarbeiter */}
      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          {/* Überschrift mit dekorativen Linien */}
          <h2 className="text-3xl font-semibold text-soft-gold mb-12 text-center relative flex items-center justify-center">
            <span className="flex-1 h-px bg-soft-gold/40 max-w-[120px]"></span>
            <span className="px-4">Unser Team</span>
            <span className="flex-1 h-px bg-soft-gold/40 max-w-[120px]"></span>
          </h2>

          {/* Beschreibung */}
          <div className="max-w-6xl leading-relaxed text-justify mx-auto mb-16">
            <p className="text-lg mb-6">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum.
            </p>
          </div>

          {/* Team Section */}
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Marco Rossi",
                  role: "Chefkoch",
                  image: "/images/team/chef1.jpg",
                },
                {
                  name: "Luca Moretti",
                  role: "Koch",
                  image: "/images/team/chef2.jpg",
                },
                {
                  name: "Sophie Laurent",
                  role: "Serviceleitung",
                  image: "/images/team/service1.jpg",
                },
              ].map((member, index) => (
                <div
                  key={index}
                  className="relative h-[400px] overflow-hidden shadow-lg"
                >
                  {/* Hintergrundbild */}
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority="true"
                  />

                  {/* Overlay mit Farbverlauf und sichtbarem Text */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col items-center justify-end p-6 text-center">
                    <h3 className="text-2xl font-bold text-soft-gold">
                      {member.name}
                    </h3>
                    <p className="text-light-yellow text-sm italic">
                      {member.role}
                    </p>
                    <p className="text-gray-400 text-sm mt-2">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
