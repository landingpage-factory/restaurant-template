'use client';
import { useState } from 'react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validierung
    if (!email) {
      setError('Bitte geben Sie eine E-Mail-Adresse ein.');
      setSuccess('');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Bitte geben Sie eine gültige E-Mail-Adresse ein.');
      setSuccess('');
      return;
    }

    // Erfolgsmeldung anzeigen
    setSuccess('Vielen Dank für Ihr Abonnement!');
    setError('');
    setEmail(''); // Eingabefeld leeren
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="email"
          name="email"
          placeholder="Ihre Email-Adresse"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`flex-1 px-4 py-2 border ${
            error ? 'border-red-500' : 'border-gray-300'
          } focus:outline-none focus:ring-2 focus:ring-soft-gold`}
        />
        <button
          type="submit"
          className="bg-soft-gold text-white px-6 py-2 hover:bg-[var(--beige-gray)]/75 hover:text-gray-800 hover:cursor-pointer transition-colors"
        >
          Abonnieren
        </button>
      </form>

      {/* Fehlermeldung */}
      {error && (
        <p className="text-red-500 text-sm mt-2">{error}</p>
      )}

      {/* Erfolgsmeldung */}
      {success && (
        <p className="text-green-500 text-sm mt-2">{success}</p>
      )}
    </div>
  );
}