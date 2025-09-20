export default function Footer() {
  return (
    <footer id="contact" className="mt-16 border-t border-white/10">
      <div className="container py-10 text-gray-400 text-sm">
        <div className="flex flex-col md:flex-row gap-2 md:items-center md:justify-between">
          <p>&copy; <span id="year">{new Date().getFullYear()}</span> Sai Kireeti. All rights reserved.</p>
          <div className="flex gap-4">
            <a className="hover:text-white" href="mailto:hello@example.com">Email</a>
            <a className="hover:text-white" href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="hover:text-white" href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
