import Aurora from "../components/Aurora.jsx";
import fotoPerfil from "@/assets/image/eu_editado_sem_fundo.png";

function Home() {
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
          relative z-10
          pt-24
          grid
          grid-cols-1
          md:grid-cols-2
          min-h-[calc(100vh-96px)]
          items-center
          px-4 sm:px-8 md:px-16
          gap-12
        "
      >
        {/* TEXTO (vem primeiro no mobile) */}
        <div className="order-2 md:order-1 text-center md:text-left space-y-4">
          <h2 className="text-sm sm:text-base lg:text-lg text-white/90">
            私のデジタルポートフォリオへようこそ。
          </h2>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-[Moderniz] leading-tight">
            Seja bem-vindo ao meu portfolio digital
          </h1>

          <h2 className="text-sm sm:text-base lg:text-lg text-white/90 max-w-2xl">
            Me chamo João Victor Takasake e aqui você conhecerá um pouco sobre mim
          </h2>
        </div>

        {/* IMAGEM */}
        <div className="order-1 md:order-2 flex justify-center items-center">
          <img
            src={fotoPerfil}
            alt="Foto de Perfil"
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
