// app/components/CateringGallery.js
"use client";
import Image from "next/image";
import { useEffect } from "react";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

const CateringGallery = () => {
  // Initialisiere Fancybox
  useEffect(() => {
    Fancybox.bind("[data-fancybox='catering-gallery']", {
      // Fancybox-Optionen
      closeButton: "auto", // Schließen-Button anzeigen
      Thumbs: false, // Thumbnails deaktivieren
      Toolbar: true, // Toolbar anzeigen
      Image: {
        zoom: true, // Zoom-Funktion aktivieren
      },
    });

    // Cleanup-Funktion
    return () => {
      Fancybox.destroy();
    };
  }, []);

  const cateringImages = [
    { src: "/images/catering/catering-1.jpg", alt: "Catering Event 1" },
    { src: "/images/catering/catering-2.jpg", alt: "Catering Event 2" },
    { src: "/images/catering/catering-3.jpg", alt: "Catering Event 3" },
    { src: "/images/catering/catering-4.jpg", alt: "Catering Event 4" },
    { src: "/images/catering/catering-5.jpg", alt: "Catering Event 5" },
    { src: "/images/catering/catering-6.jpg", alt: "Catering Event 6" },
    { src: "/images/catering/catering-7.jpg", alt: "Catering Event 7" },
    { src: "/images/catering/catering-8.jpg", alt: "Catering Event 8" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
      {cateringImages.map((image, index) => (
        <a
          key={index}
          href={image.src}
          data-fancybox="catering-gallery" // Eindeutiger Wert für die Catering-Galerie
          data-caption={image.alt} // Bildbeschreibung als Caption
          className="group relative block overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          {/* Container für die Größe */}
          <div className="relative w-full h-64">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
              className="object-cover transform transition-transform duration-300 group-hover:scale-105"
            />
            {/* Overlay für besseren Effekt */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default CateringGallery;
