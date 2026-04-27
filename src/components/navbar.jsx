import { useEffect, useMemo, useState } from "react"

function Navbar() {
  const [open, setOpen] = useState(false)
  const [activeId, setActiveId] = useState("home")
  const mobileMenuId = "mobile-main-menu"
  const headerHeight = 88

  const items = useMemo(
    () => [
      { label: "Home", id: "home" },
      { label: "Sobre", id: "sobre" },
      { label: "Topicos", id: "topicos" },
      { label: "Projetos", id: "projetos" },
      { label: "Contato", id: "contato" },
    ],
    []
  )

  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - headerHeight
      window.scrollTo({ top, behavior: "smooth" })
      setActiveId(id)
    }
    setOpen(false)
  }

  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) return undefined

    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter(Boolean)

    if (sections.length === 0) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visibleEntries[0]?.target?.id) {
          setActiveId(visibleEntries[0].target.id)
        }
      },
      {
        threshold: [0.25, 0.4, 0.6],
        rootMargin: "-35% 0px -45% 0px",
      }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [items])

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="h-20 flex items-center justify-between px-6 md:px-12 backdrop-blur bg-black/20 border-b border-white/10">
        <button
          type="button"
          onClick={() => scrollToSection("home")}
          style={{ fontFamily: "Moderniz" }}
          className="text-white text-sm sm:text-base tracking-wide hover:text-white/80 transition"
        >
          Joao Victor
        </button>
        <div className="hidden md:flex gap-8">
          {items.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollToSection(item.id)}
              style={{ fontFamily: "Moderniz" }}
              className={`transition ${
                activeId === item.id
                  ? "text-[var(--color-primary)]"
                  : "text-white hover:text-white/70"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Fechar menu de navegação" : "Abrir menu de navegação"}
          aria-expanded={open}
          aria-controls={mobileMenuId}
          className="md:hidden text-white text-2xl"
        >
          ☰
        </button>
      </nav>

      {open && (
        <div
          id={mobileMenuId}
          className="md:hidden bg-black/80 backdrop-blur px-6 py-5 border-b border-white/10 space-y-3"
        >
          <div className="flex items-center justify-between">
            <h2 style={{ fontFamily: "Moderniz" }} className="text-white text-base">Navegacao</h2>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="text-white text-xl"
              aria-label="Fechar menu"
            >
              ✕
            </button>
          </div>
          {items.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollToSection(item.id)}
              style={{ fontFamily: "Moderniz" }}
              className={`block w-full text-left text-lg transition ${
                activeId === item.id
                  ? "text-[var(--color-primary)]"
                  : "text-white hover:text-white/80"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  )
}

export default Navbar
