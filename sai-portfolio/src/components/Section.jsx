import Card from "./Card";

export default function Section({ section }) {
  return (
    <section id={section.anchor} className="my-12">
      <h2 className="text-2xl md:text-3xl font-bold mb-5">{section.title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {section.cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </section>
  );
}
