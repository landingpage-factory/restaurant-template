// app/reservierung/page.js
'use client';
import { useState, useEffect } from 'react';
import Parallax from '../components/Parallax';

export default function Reservierung() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telefon: '',
    datum: '',
    uhrzeit: '',
    personen: 1,
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // AOS initialisieren
  useEffect(() => {
    import('aos').then((AOS) => {
      AOS.init({
        duration: 1000,
        once: true,
      });
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validierung
    const heute = new Date().toISOString().split('T')[0];
    if (!formData.name || !formData.email || !formData.datum || !formData.uhrzeit) {
      setError('Bitte füllen Sie alle Pflichtfelder aus.');
      setSuccess('');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError('Bitte geben Sie eine gültige E-Mail-Adresse ein.');
      setSuccess('');
      return;
    }

    if (formData.datum < heute) {
      setError('Bitte wählen Sie ein Datum in der Zukunft.');
      setSuccess('');
      return;
    }

    // Erfolgsmeldung anzeigen
    setSuccess('Ihre Reservierung wurde erfolgreich gebucht!');
    setError('');
    setFormData({
      name: '',
      email: '',
      telefon: '',
      datum: '',
      uhrzeit: '',
      personen: 1,
    });
  };

  return (
    <>
      {/* Parallax-Sektion mit Overlay */}
      <Parallax backgroundImage="/images/reservierung-bg.jpg">
        <div className="absolute inset-0 bg-black/50"></div> {/* Overlay */}
        <div id="reservations"  className="container mx-auto px-4 py-20 relative z-10 text-center">
          <h1
            className="text-4xl sm:text-5xl font-bold text-soft-gold mb-6"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Tisch reservieren
          </h1>
          <p
            className="text-lg text-foreground"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Buchen Sie Ihren Tisch für ein unvergessliches Erlebnis
          </p>
        </div>
      </Parallax>

      {/* Reservierungsformular */}
      <section className="py-20 bg-background text-foreground">
        <div className="container mx-auto px-4">
          <form
            onSubmit={handleSubmit}
            className="max-w-4xl mx-auto bg-dark-taupe p-8 shadow-lg"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground">
                  Name <span className="text-light-yellow">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 border border-beige-gray focus:outline-none focus:ring-2 focus:ring-soft-gold"
                  required
                />
              </div>

              {/* E-Mail */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground">
                  E-Mail <span className="text-light-yellow">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 border border-beige-gray focus:outline-none focus:ring-2 focus:ring-soft-gold"
                  required
                />
              </div>

              {/* Telefon */}
              <div>
                <label htmlFor="telefon" className="block text-sm font-medium text-foreground">
                  Telefon
                </label>
                <input
                  type="tel"
                  id="telefon"
                  name="telefon"
                  value={formData.telefon}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 border border-beige-gray focus:outline-none focus:ring-2 focus:ring-soft-gold"
                />
              </div>

              {/* Datum */}
              <div>
                <label htmlFor="datum" className="block text-sm font-medium text-foreground">
                  Datum <span className="text-light-yellow">*</span>
                </label>
                <input
                  type="date"
                  id="datum"
                  name="datum"
                  value={formData.datum}
                  onChange={handleChange}
                  min={new Date().toISOString().split('T')[0]} // Verhindert Buchungen in der Vergangenheit
                  className="mt-1 block w-full px-4 py-2 border border-beige-gray focus:outline-none focus:ring-2 focus:ring-soft-gold"
                  required
                />
              </div>

              {/* Uhrzeit */}
              <div>
                <label htmlFor="uhrzeit" className="block text-sm font-medium text-foreground">
                  Uhrzeit <span className="text-light-yellow">*</span>
                </label>
                <input
                  type="time"
                  id="uhrzeit"
                  name="uhrzeit"
                  value={formData.uhrzeit}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 border border-beige-gray focus:outline-none focus:ring-2 focus:ring-soft-gold"
                  required
                />
              </div>

              {/* Personen */}
              <div>
                <label htmlFor="personen" className="block text-sm font-medium text-foreground">
                  Personen <span className="text-light-yellow">*</span>
                </label>
                <select
                  id="personen"
                  name="personen"
                  value={formData.personen}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 border border-beige-gray bg-dark-taupe text-foreground focus:outline-none focus:ring-2 focus:ring-soft-gold"
                  required
                >
                  {[...Array(10)].map((_, i) => (
                    <option key={i + 1} value={i + 1} className="bg-dark-taupe text-foreground">
                      {i + 1} Person{i + 1 > 1 ? 'en' : ''}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Fehlermeldung */}
            {error && (
              <p className="text-light-yellow text-sm mt-4">
                {error}
              </p>
            )}

            {/* Erfolgsmeldung */}
            {success && (
              <p className="text-soft-gold text-sm mt-4">
                {success}
              </p>
            )}

            {/* Submit-Button */}
            <div className="mt-6">
              <button
                type="submit"
                className="w-full bg-soft-gold text-foreground px-6 py-2 hover:bg-beige-gray hover:cursor-pointer hover:text-gray-800 transition-colors"
              >
                Tisch reservieren
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}