// app/components/Events.js
import Parallax from "../components/Parallax";
import dynamic from "next/dynamic";

const SwiperComponent = dynamic(() => import("../components/SwiperComponent"), {
  ssr: false,
});

export default function Events() {

  return (
    <>
      {/* Parallax-Sektion */}
      <Parallax backgroundImage="/images/events/events-bg.jpg">
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

          {/* Glide mit Autoplay */}
          <div
            className="container mx-auto max-w-6xl overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div>
              {/* Glide Lazy-Loaded */}
              <SwiperComponent />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
