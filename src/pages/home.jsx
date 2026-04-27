import Aurora from "../components/Aurora.jsx";
import ScrollReveal from "../components/ScrollReveal.jsx";
import fotoPerfil from "@/assets/image/eu_editado_sem_fundo.png";

function Home() {
  const ctaBaseClass =
    "inline-flex items-center justify-center rounded-md px-5 py-3 font-semibold transition-all duration-300"

  return (
    <section id="home" className="relative w-full min-h-screen overflow-hidden">

      {/* BACKGROUND AURORA */}
      <div className="absolute inset-0 z-0">
        <Aurora
          colorStops={["#020764", "#020764", "#020764"]}
          blend={1}
          amplitude={0.5}
          speed={0.7}
        />
      </div>

      {/* CONTEÚDO */}
      <div
        className="
          relative z-10 w-full mx-auto
          pt-28
          grid
          grid-cols-1
          md:grid-cols-2
          min-h-[calc(100vh-112px)]
          items-center
          px-4 sm:px-6 lg:px-50
          gap-12
        "
      >
        {/* TEXTO (vem primeiro no mobile) */}
        <div className="order-2 md:order-1 text-center md:text-left space-y-4">
          <ScrollReveal
            as="h2"
            variant="fade-in"
            duration={700}
            distance={24}
            easing="easeOut"
            className="text-sm sm:text-base lg:text-lg text-white/90"
          >
            私のデジタルポートフォリオへようこそ。
          </ScrollReveal>

          <ScrollReveal
            as="h1"
            order={1}
            duration={900}
            distance={34}
            easing="smooth"
            style={{ fontFamily: "Moderniz" }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight"
          >
            Seja bem-vindo ao meu portfolio digital
          </ScrollReveal>

          <ScrollReveal
            as="h2"
            order={2}
            duration={850}
            distance={26}
            easing="easeOut"
            className="text-sm sm:text-base lg:text-lg text-white/90 max-w-2xl"
          >
            Me chamo João Victor Takasake e aqui você conhecerá um pouco sobre mim
          </ScrollReveal>

          <ScrollReveal
            as="div"
            order={3}
            duration={850}
            distance={24}
            className="flex flex-col sm:flex-row items-center md:items-start gap-3 pt-2"
          >
            <a
              href="#projetos"
              className={`${ctaBaseClass} bg-[var(--color-primary)] text-white border border-transparent hover:bg-transparent hover:border-[var(--color-primary)]`}
            >
              Ver projetos
            </a>
            <a
              href="#contato"
              className={`${ctaBaseClass} bg-transparent text-white border border-white/40 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]`}
            >
              Falar comigo
            </a>
          </ScrollReveal>
        </div>

        {/* IMAGEM */}
        <div className="order-1 md:order-2 flex justify-center items-center">
          <img
            src={fotoPerfil}
            alt="Foto de Perfil"
            fetchPriority="high"
            decoding="async"
            className="
              w-full
              max-w-lg
              sm:max-w-sm
              md:max-w-md
              lg:max-w-lg
              xl:max-w-2xl
              h-auto
              object-contain
            "
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
