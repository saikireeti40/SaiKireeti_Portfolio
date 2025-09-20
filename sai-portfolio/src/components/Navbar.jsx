export default function Navbar() {
  return (
    <nav className="sticky top-0 z-40 bg-gradient-to-b from-black/90 to-transparent backdrop-blur-sm">
      <div className="container flex items-center justify-between py-4">
        <a href="/" className="flex items-center gap-2">
          <img src="/logo.svg" alt="Logo" className="h-7 w-7" />
          <span className="font-bold">Sai Kireeti</span>
        </a>
        <div className="hidden md:flex items-center gap-6 text-sm text-gray-300">
          <a href="#who-am-i" className="hover:text-white">Who I Am</a>
          <a href="#vision" className="hover:text-white">Vision</a>
          <a href="#journey" className="hover:text-white">Journey</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
      </div>
    </nav>
  );
}
