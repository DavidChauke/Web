import React, { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Motion: Logo ID",
    type: "video",
    src: "/media/logo-id.mp4",
    thumb: "/media/logo-id-thumb.jpg",
    description: "30s logo animation made in After Effects + Cinema 4D",
  },
  {
    id: 2,
    title: "Social Post Series",
    type: "gif",
    src: "/media/social-series.gif",
    thumb: "/media/social-series-thumb.jpg",
    description: "Animated carousel frames optimized for mobile",
  },
];

export default function App() {
  const [active, setActive] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* HERO */}
      <header className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-extrabold">David Chauke</h1>
        <p className="mt-4 text-lg">
          Multimedia designer specializing in motion graphics and social animations.
        </p>
      </header>

      {/* GALLERY */}
      <section id="gallery" className="max-w-6xl mx-auto px-6 py-8">
        <h2 className="text-2xl font-semibold mb-4">Selected Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <article
              key={p.id}
              className="bg-white rounded-xl shadow cursor-pointer"
              onClick={() => setActive(p)}
            >
              <img src={p.thumb} alt={p.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold">{p.title}</h3>
                <p className="text-sm text-gray-600">{p.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* MODAL PREVIEW */}
      {active && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-3xl w-full">
            <button className="mb-4 text-sm text-gray-500" onClick={() => setActive(null)}>
              Close
            </button>
            {active.type === "video" && <video src={active.src} controls className="w-full" />}
            {active.type === "gif" && <img src={active.src} alt={active.title} />}
          </div>
        </div>
      )}
    </div>
  );
}
