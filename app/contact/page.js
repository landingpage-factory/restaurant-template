// app/contact/page.js
"use client";
import { useState, useEffect } from "react";
import { Poppins } from "next/font/google";
import { FaMapMarkerAlt, FaClock, FaPhone, FaEnvelope } from 'react-icons/fa';
import Parallax from "../components/Parallax";
import AOS from "aos";
import "aos/dist/aos.css";

const poppins = Poppins({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          Math.random() > 0.5
            ? resolve()
            : reject(new Error("Nachricht konnte nicht gesendet werden"));
        }, 2000);
      });

      setSuccess(true);
      e.target.reset();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`min-h-screen ${poppins.variable} font-sans`}>
      {/* Parallax Hero Section */}
      <Parallax backgroundImage="/images/bg-contact.jpg">
        <div className="absolute inset-0 bg-black/50"></div> {/* Overlay */}
        <div id="contact" className="relative z-10 h-[400px] flex items-center justify-center">
          <div className="text-center px-4" data-aos="fade-up" data-aos-delay="200">
            <h1 className="text-4xl md:text-6xl font-bold text-soft-gold mb-4">
              Sprechen wir darüber
            </h1>
            <p className="text-lg text-foreground max-w-2xl mx-auto">
              Catering, Reservierungen, Events oder Fragen – wir freuen uns auf
              Ihre Nachricht.
            </p>
          </div>
        </div>
      </Parallax>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div
          className="grid md:grid-cols-2 gap-12 items-stretch"
          data-aos="fade-up"
        >
          {/* Contact Form */}
          <div className="bg-dark-taupe p-8 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div data-aos="fade-right" data-aos-delay="200">
                  <input
                    type="text"
                    placeholder="Name"
                    required
                    className="w-full bg-background border-2 border-beige-gray px-4 py-3 
                      text-foreground focus:border-soft-gold focus:ring-2 focus:ring-soft-gold 
                      transition-all duration-300 rounded-none"
                  />
                </div>
                <div data-aos="fade-left" data-aos-delay="200">
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    className="w-full bg-background border-2 border-beige-gray px-4 py-3 
                      text-foreground focus:border-soft-gold focus:ring-2 focus:ring-soft-gold 
                      transition-all duration-300 rounded-none"
                  />
                </div>
              </div>

              <div data-aos="fade-up" data-aos-delay="300">
                <textarea
                  placeholder="Message"
                  rows="5"
                  required
                  className="w-full bg-background border-2 border-beige-gray px-4 py-3 
                    text-foreground focus:border-soft-gold focus:ring-2 focus:ring-soft-gold 
                    transition-all duration-300 rounded-none"
                />
              </div>

              <div data-aos="fade-up" data-aos-delay="400">
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full py-3 px-6 text-background font-semibold transition-all
                    ${
                      loading
                        ? "bg-beige-gray cursor-wait"
                        : "bg-soft-gold hover:bg-beige-gray hover:cursor-pointer hover:text-gray-900"
                    }
                    rounded-none border-2 border-transparent hover:border-soft-gold
                    transform hover:scale-[1.02] duration-300`}
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </div>

              {error && (
                <div
                  className="mt-4 p-3 text-soft-gold "
                >
                  Error: {error}
                </div>
              )}

              {success && (
                <div
                  className="mt-4 p-3 text-soft-gold"
                >
                  Ihre Nachricht wurde erfolgreich gesendet!
                </div>
              )}
            </form>
          </div>

          {/* Google Maps */}
          <div
            className="h-full bg-dark-taupe shadow-xl"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d310847.332475583!2d13.094413632570607!3d52.5063842655867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e373f035901%3A0x42120465b5e3b70!2sBerlin!5e0!3m2!1sen!2sde!4v1741549386829!5m2!1sen!2sde"
              width="100%"
              height="100%"
              className="min-h-[350px]"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Contact Info */}
<div
  className="grid md:grid-cols-4 gap-6 mt-20 text-left" // Text jetzt linksbündig
  data-aos="fade-up"
  data-aos-delay="200"
>
  {/* Besuchen Sie uns */}
  <div
    className="p-6 bg-dark-taupe hover:bg-beige-gray/40 transition-all duration-300 group"
    data-aos="fade-up"
    data-aos-delay="300"
  >
    <h3 className="text-2xl text-soft-gold mb-4 font-semibold flex items-center">
      <FaMapMarkerAlt className="mr-2" /> Besuchen Sie uns
    </h3>
    <div className="space-y-3 text-beige-gray">
      <p className="text-lg">
        <span className="font-medium text-soft-gold">Adresse:</span>
        <br />
        Musterstraße 123
        <br />
        12345 Berlin
      </p>
    </div>
  </div>

  {/* Öffnungszeiten */}
  <div
    className="p-6 bg-dark-taupe hover:bg-beige-gray/40 transition-all duration-300 group"
    data-aos="fade-up"
    data-aos-delay="400"
  >
    <h3 className="text-2xl text-soft-gold mb-4 font-semibold flex items-center">
      <FaClock className="mr-2" /> Öffnungszeiten
    </h3>
    <div className="space-y-3 text-beige-gray">
      <p className="text-lg">
        <span className="font-medium text-soft-gold">Täglich geöffnet:</span>
        <br />
        Montag - Sonntag
        <br />
        12:00 - 21:00 Uhr
      </p>
      <p className="text-lg">
        <span className="font-medium text-soft-gold">Küchenzeiten:</span>
        <br />
        Letzte Bestellung: 20:30 Uhr
      </p>
    </div>
  </div>

  {/* Rufen Sie uns an */}
  <div
    className="p-6 bg-dark-taupe hover:bg-beige-gray/40 transition-all duration-300 group"
    data-aos="fade-up"
    data-aos-delay="500"
  >
    <h3 className="text-2xl text-soft-gold mb-4 font-semibold flex items-center">
      <FaPhone className="mr-2" /> Rufen Sie uns an
    </h3>
    <div className="space-y-3 text-beige-gray">
      <p className="text-lg">
        <span className="font-medium text-soft-gold">Reservierung:</span>
        <br />
        +49 123 456789
      </p>
      <p className="text-lg">
        <span className="font-medium text-soft-gold">Erreichbarkeit:</span>
        <br />
        Mo - So: 09:00 - 20:00 Uhr
      </p>
    </div>
  </div>

  {/* Schreiben Sie uns */}
  <div
    className="p-6 bg-dark-taupe hover:bg-beige-gray/40 transition-all duration-300 group"
    data-aos="fade-up"
    data-aos-delay="600"
  >
    <h3 className="text-2xl text-soft-gold mb-4 font-semibold flex items-center">
      <FaEnvelope className="mr-2" /> Schreiben Sie uns
    </h3>
    <div className="space-y-3 text-beige-gray">
      <div>
        <p className="font-medium text-soft-gold">Allgemeine Anfragen:</p>
        <p className="text-lg">info@deinrestaurant.de</p>
      </div>
      <div>
        <p className="font-medium text-soft-gold">Reservierungen:</p>
        <p className="text-lg">reservierung@deinrestaurant.de</p>
      </div>
      <div>
        <p className="font-medium text-soft-gold">Catering & Events:</p>
        <p className="text-lg">events@deinrestaurant.de</p>
      </div>
    </div>
  </div>
</div>
      </div>
    </div>
  );
}
