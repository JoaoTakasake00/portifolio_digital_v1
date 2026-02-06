import { useState } from "react"

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="h-20 flex items-center justify-between px-6 md:px-12 backdrop-blur">
        {/* MENU DESKTOP */}
        <div className="hidden md:flex gap-8">
          {["Home", "Sobre", "Projetos", "Contato"].map((item) => (
            <button
              key={item}
              className="text-white font-[Moderniz] hover:text-white/70 transition"
            >
              {item}
            </button>
          ))}
        </div>

        {/* BOTÃO MOBILE */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-2xl"
        >
          ☰
        </button>
      </nav>

      {/* MENU MOBILE */}
      {open && (
        <div className="md:hidden bg-black/50 backdrop-blur px-6 py-6 space-y-4">
          {["Home", "Sobre", "Topicos", "Projetos", "Contato"].map((item) => (
            <button
              key={item}
              className="block w-full text-left text-white font-[Moderniz] text-lg"
              onClick={() => setOpen(false)}
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </header>
  )
}

export default Navbar
