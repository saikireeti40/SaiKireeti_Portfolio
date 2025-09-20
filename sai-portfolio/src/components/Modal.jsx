export default function Modal({ card, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <div className="bg-neutral-950 border border-white/10 p-6 rounded-2xl max-w-xl w-full relative">
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-3 right-3 text-white/80 hover:text-white"
        >
          ✕
        </button>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">{card.title}</h2>
          <p className="text-gray-300 leading-relaxed">{card.long || card.description}</p>
        </div>
      </div>
    </div>
  );
}
