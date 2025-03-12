// app/components/AOSProvider.js
"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSProvider() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
    });
  }, []);

  return null; // Kein Render-Output nötig
}
