import { useState } from "react";
import Modal from "./Modal";

export default function Card({ card }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className="bg-neutral-900 rounded-2xl overflow-hidden shadow-lg cursor-pointer hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
      >
        <img src={card.image} alt={card.title} className="w-full h-44 object-cover" loading="lazy" />
        <div className="p-4">
          <h3 className="text-lg font-semibold">{card.title}</h3>
          <p className="text-sm text-gray-400 line-clamp-2">{card.description}</p>
        </div>
      </div>
      {open && <Modal card={card} onClose={() => setOpen(false)} />}
    </>
  );
}
