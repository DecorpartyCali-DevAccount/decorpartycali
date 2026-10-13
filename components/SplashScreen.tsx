"use client";

import { useEffect, useState } from "react";

const LOGO =
  "https://images.squarespace-cdn.com/content/6a57fa17cd051c4179352331/84b927c1-4b73-40ea-b449-92b45d9b3857/logoDecorpartyInicio.webp?content-type=image%2Fwebp";

export default function SplashScreen() {
  const [visible, setVisible] = useState(true);

  // La animación CSS dura 3s (2s de espera + 1s de fade). Luego se quita del DOM.
  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 3000);
    return () => clearTimeout(t);
  }, []);

  if (!visible) return null;

  return (
    <div
      id="splash-screen"
      className="fixed inset-0 z-[9999] bg-white flex items-center justify-center"
    >
      <div className="text-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          id="splash-logo"
          alt="Decorparty Cali Logo"
          className="w-80 h-80 mb-4"
          src={LOGO}
        />
      </div>
    </div>
  );
}
