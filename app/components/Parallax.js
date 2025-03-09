// components/Parallax.js

export default function Parallax({ backgroundImage, children }) {
  return (
    <div
      className="relative w-full bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundAttachment: "fixed",
      }}
    >
      {/* Optionales Overlay für den Text sichtbar zu machen */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="z-10 h-full">
        {children}
      </div>
    </div>
  );
}
