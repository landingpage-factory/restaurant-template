// app/components/RestaurantGallery.js
"use client";
import Image from "next/image";
import { useEffect } from "react";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

const RestaurantGallery = () => {
  // Initialisiere Fancybox
  useEffect(() => {
    Fancybox.bind("[data-fancybox='restaurant-gallery']", {
      // Fancybox-Optionen
      closeButton: "auto", // Schließen-Button anzeigen
      Thumbs: false, // Thumbnails deaktivieren
      Toolbar: true, // Toolbar anzeigen
      Image: {
        zoom: false, // Zoom-Funktion deaktivieren
      },
    });

    // Cleanup-Funktion
    return () => {
      Fancybox.destroy();
    };
  }, []);

  const restaurantImages = [
    { src: "/images/restaurant/restaurant-1.jpg", alt: "Restaurant 1" },
    { src: "/images/restaurant/restaurant-2.jpg", alt: "Restaurant 2" },
    { src: "/images/restaurant/restaurant-3.jpg", alt: "Restaurant 3" },
    { src: "/images/restaurant/restaurant-4.jpg", alt: "Restaurant 4" },
    { src: "/images/restaurant/restaurant-5.jpg", alt: "Restaurant 5" },
    { src: "/images/restaurant/restaurant-6.jpg", alt: "Restaurant 6" },
    { src: "/images/restaurant/restaurant-7.jpg", alt: "Restaurant 7" },
    { src: "/images/restaurant/restaurant-8.jpg", alt: "Restaurant 8" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
      {restaurantImages.map((image, index) => (
        <a
          key={index}
          href={image.src}
          data-fancybox="restaurant-gallery" // Eindeutiger Wert für die Restaurant-Galerie
          data-caption={image.alt} // Bildbeschreibung als Caption
          className="group relative block overflow-hidden hover:shadow-lg duration-300"
        >
          {/* Container für die Größe */}
          <div className="relative w-full h-64">
            <Image
              src={image.src}
              alt={image.alt}
              priority={true}
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

export default RestaurantGallery;
