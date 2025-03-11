"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Parallax from "../components/Parallax";
import { FaFileDownload } from "react-icons/fa";
import Specials from "../components/Specials";

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("Vorspeisen");

  const menuItems = [
    // 1. Eintrag: Vorspeisen
    {
      id: 1,
      name: "Bruschetta",
      category: "Vorspeisen",
      price: "7,50 €",
      image: "/images/menu/bruschetta.jpg",
      ingredients: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.",
    },
    {
      id: 2,
      name: "Caprese",
      category: "Vorspeisen",
      price: "8,00 €",
      image: "/images/menu/caprese.jpg",
      ingredients: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.",
    },
    {
      id: 3,
      name: "Carpaccio",
      category: "Vorspeisen",
      price: "9,00 €",
      image: "/images/menu/carpaccio.jpg",
      ingredients: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.",
    },
    {
      id: 4,
      name: "Frittierte Calamari",
      category: "Vorspeisen",
      price: "10,50 €",
      image: "/images/menu/calamari.jpg",
      ingredients: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.",
    },
    {
      id: 5,
      name: "Antipasto Platter",
      category: "Vorspeisen",
      price: "12,00 €",
      image: "/images/menu/antipasto.jpg",
      ingredients: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.",
    },

    // 2. Eintrag: Fleisch und Fisch
    {
      id: 6,
      name: "Spare Ribs",
      category: "Fleisch und Fisch",
      price: "14,00 €",
      image: "/images/menu/spare-ribs.jpg",
      ingredients: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.",
    },
    {
      id: 7,
      name: "Lachsfilet",
      category: "Fleisch und Fisch",
      price: "16,00 €",
      image: "/images/menu/lachs.jpg",
      ingredients: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.",
    },
    {
      id: 8,
      name: "Steak",
      category: "Fleisch und Fisch",
      price: "18,50 €",
      image: "/images/menu/steak.jpg",
      ingredients: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.",
    },
    {
      id: 9,
      name: "Thunfischsteak",
      category: "Fleisch und Fisch",
      price: "19,00 €",
      image: "/images/menu/thunfischsteak.jpg",
      ingredients: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.",
    },
    {
      id: 10,
      name: "Fisch und Chips",
      category: "Fleisch und Fisch",
      price: "13,50 €",
      image: "/images/menu/fisch-und-chips.jpg",
      ingredients: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.",
    },

    // 3. Eintrag: Saucen und Suppen
    {
      id: 11,
      name: "Tomatensuppe",
      category: "Saucen und Suppen",
      price: "5,00 €",
      image: "/images/menu/tomatensuppe.jpg",
      ingredients: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.",
    },
    {
      id: 12,
      name: "Lauchsuppe",
      category: "Saucen und Suppen",
      price: "7,50 €",
      image: "/images/menu/lauchsuppe.jpg",
      ingredients: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.",
    },
    {
      id: 13,
      name: "Kürbiscremesuppe",
      category: "Saucen und Suppen",
      price: "6,00 €",
      image: "/images/menu/kuerbiscremesuppe.jpg",
      ingredients: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.",
    },
    {
      id: 14,
      name: "Pilzrahmsuppe",
      category: "Saucen und Suppen",
      price: "6,50 €",
      image: "/images/menu/pilzrahmsuppe.jpg",
      ingredients: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.",
    },
    {
      id: 15,
      name: "Zwiebelsuppe",
      category: "Saucen und Suppen",
      price: "6,50 €",
      image: "/images/menu/zwiebelsuppe.jpg",
      ingredients: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.",
    },

    // 4. Eintrag: Salate
    {
      id: 16,
      name: "Caesar Salad",
      category: "Salate",
      price: "8,00 €",
      image: "/images/menu/caesar-salad.jpg",
      ingredients: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.",
    },
    {
      id: 17,
      name: "Griechischer Salat",
      category: "Salate",
      price: "7,50 €",
      image: "/images/menu/griechischer-salat.jpg",
      ingredients: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.",
    },
    {
      id: 18,
      name: "Bunter Salat",
      category: "Salate",
      price: "6,00 €",
      image: "/images/menu/bunter-salat.jpg",
      ingredients: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.",
    },
    {
      id: 19,
      name: "Feldsalat",
      category: "Salate",
      price: "6,50 €",
      image: "/images/menu/feldsalat.jpg",
      ingredients: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.",
    },
    {
      id: 20,
      name: "Tomaten Mozzarella Salat",
      category: "Salate",
      price: "7,00 €",
      image: "/images/menu/tomaten-mozzarella-salat.jpg",
      ingredients: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.",
    },
    // 5. Eintrag: Hähnchen
    {
      id: 21,
      name: "Gegrilltes Hähnchen",
      category: "Hähnchen",
      price: "12,50 €",
      image: "/images/menu/gegrilltes-haehnchen.jpg",
      ingredients: "Gegrilltes Hähnchen mit Kräutern und Gewürzen.",
      description:
        "Zartes Hähnchen, perfekt gewürzt und gegrillt. Ideal für alle, die den authentischen Geschmack lieben.",
    },
    {
      id: 22,
      name: "Hähnchen Schnitzel",
      category: "Hähnchen",
      price: "14,00 €",
      image: "/images/menu/haehnchen-schnitzel.jpg",
      ingredients: "Hähnchenbrust paniert und knusprig gebraten.",
      description:
        "Ein klassisches Hähnchenschnitzel, goldbraun und perfekt serviert mit einer Beilage nach Wahl.",
    },
    {
      id: 23,
      name: "Hähnchen Curry",
      category: "Hähnchen",
      price: "13,50 €",
      image: "/images/menu/haehnchen-curry.jpg",
      ingredients: "Hähnchen in einer cremigen Currysauce.",
      description:
        "Hähnchenstücke in einer aromatischen Currysauce, serviert mit Reis oder Brot.",
    },
    {
      id: 24,
      name: "Hähnchen Caesar Salad",
      category: "Hähnchen",
      price: "11,00 €",
      image: "/images/menu/caesar-salad-haehnchen.jpg",
      ingredients: "Caesar Salad mit gegrilltem Hähnchen.",
      description:
        "Frische Salatblätter, Croûtons, Parmesan und gegrilltes Hähnchen, serviert mit klassischem Caesar-Dressing.",
    },
    {
      id: 25,
      name: "Hähnchen Fajitas",
      category: "Hähnchen",
      price: "15,00 €",
      image: "/images/menu/haehnchen-fajitas.jpg",
      ingredients:
        "Hähnchenstreifen, Paprika und Zwiebeln in einer Fajita-Wrap.",
      description:
        "Würzige Hähnchenstreifen, Paprika und Zwiebeln, alles verpackt in einer weichen Tortilla-Wrap, serviert mit Salsa und Guacamole.",
    },
  ];

  const categories = [
    "alle",
    "Vorspeisen",
    "Fleisch und Fisch",
    "Saucen und Suppen",
    "Salate",
    "Hähnchen",
  ];

  const filteredItems =
    activeCategory === "alle"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  useEffect(() => {
    import("aos").then((AOS) => {
      AOS.init({
        duration: 1000,
        once: false,
      });
    });
  }, []);

  return (
    <section id="menu">
      {/* Parallax-Sektion für die Menü-Überschrift */}
      <Parallax
        backgroundImage="/images/menu/menu-bg.jpg"
        className="relative h-[400px] flex justify-center items-center text-center"
      >
        <div className="container mx-auto px-4 py-20 relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-soft-gold mb-6"
          data-aos="fade-up"
          data-aos-delay="100">
            Unsere Speisekarte
          </h1>
          <p className="text-lg text-foreground"
          data-aos="fade-up"
          data-aos-delay="200">
            Traditionelle Küche mit modernem Twist
          </p>
          <div className="mt-12" data-aos="fade-up" data-aos-delay="300">
            {/* Download-Button hinzugefügt */}
            <a
              href="/pdf/speisekarte.pdf"
              download
              className="border-2 border-[var(--beige-gray)] text-[var(--foreground)] px-6 py-3 
   font-bold uppercase tracking-wider hover:bg-[var(--beige-gray)]/75 hover:border-[var(--foreground)]
   transition-all duration-300 shadow-lg bg-gray-800/30 z-50 hover:cursor-pointer
   inline-flex items-center gap-2 whitespace-nowrap"
            >
              <FaFileDownload className="text-lg" />
              Komplette Karte als PDF
            </a>
          </div>
        </div>
      </Parallax>

      <div className="bg-background py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`text-lg font-medium ${
                  activeCategory === category
                    ? "text-soft-gold"
                    : "text-foreground hover:text-soft-gold"
                } transition-colors duration-300 cursor-pointer`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-dark-taupe p-4 shadow-lg hover:shadow-xl transition-shadow flex items-start gap-4"
                data-aos="fade-up"
              >
                <div className="relative w-1/3 h-32 shrink-0 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="w-2/3">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-soft-gold">
                      {item.name}
                    </h3>
                    <span className="text-md font-semibold text-light-yellow whitespace-nowrap">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-sm text-gray-300 line-clamp-2 mb-2">
                    {item.description}
                  </p>
                  <p className="text-xs text-gray-400 italic line-clamp-1">
                    {item.ingredients}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Specials/>
    </section>
  );
}
