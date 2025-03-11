// app/components/RestaurantGallery.js
"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import "glightbox/dist/css/glightbox.css";
import dynamic from "next/dynamic";

// GLightbox nur im Browser laden
const GLightbox = dynamic(() => import("glightbox"), { ssr: false });

const RestaurantGallery = () => {
  const lightboxRef = useRef(null); // useRef für GLightbox-Instanz

  useEffect(() => {
    if (typeof window !== "undefined" && !lightboxRef.current) {
      lightboxRef.current = GLightbox({
        selector: ".glightbox",
      });
    }

    return () => {
      if (lightboxRef.current) {
        lightboxRef.current.destroy();
        lightboxRef.current = null;
      }
    };
  }, []);

  const restaurantImages = [
    { src: "/restaurant-template/images/restaurant/restaurant-1.jpg", alt: "Restaurant 1" },
    { src: "/restaurant-template/images/restaurant/restaurant-2.jpg", alt: "Restaurant 2" },
    { src: "/restaurant-template/images/restaurant/restaurant-3.jpg", alt: "Restaurant 3" },
    { src: "/restaurant-template/images/restaurant/restaurant-4.jpg", alt: "Restaurant 4" },
    { src: "/restaurant-template/images/restaurant/restaurant-5.jpg", alt: "Restaurant 5" },
    { src: "/restaurant-template/images/restaurant/restaurant-6.jpg", alt: "Restaurant 6" },
    { src: "/restaurant-template/images/restaurant/restaurant-7.jpg", alt: "Restaurant 7" },
    { src: "/restaurant-template/images/restaurant/restaurant-8.jpg", alt: "Restaurant 8" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
      {restaurantImages.map((image, index) => (
        <a key={index} href={image.src} className="glightbox group relative block overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="relative w-full h-64">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
              className="object-cover transform transition-transform duration-300 group-hover:scale-105"
            />
            {/* Overlay für schöneren Effekt */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default RestaurantGallery;
