import { sections, site } from "../data/content";
import Section from "../components/Section";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="container py-10">
        <header className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">{site.title}</h1>
          <p className="mt-4 text-gray-300 max-w-2xl">{site.tagline}</p>
        </header>
        {sections.map((section, idx) => (
          <Section key={idx} section={section} />
        ))}
      </main>
      <Footer />
    </div>
  );
}
