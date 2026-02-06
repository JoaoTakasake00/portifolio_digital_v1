import Titulo from "../components/titulo.jsx";
import { BagIcon, CodeIcon, BrushIcon, AcademicIcon, BalanceIcon, GraficIcon } from "../components/svg_icons.jsx";
import imagemTopo from "@/assets/image/imagem_do_topo_2.png";
import imagemFinal from "@/assets/image/imagem_do_final_1.png";


function Topicos() {
  return (
    <section id="topicos" className="w-full min-h-screen bg-[var(--color-background)] overflow-hidden flex flex-col gap-20">
      {/* imagem topo */}
      <img
        src={imagemTopo}
        alt="Imagem do topo"
        className="w-full h-auto -mt-1"
      />

      <Titulo Titulo="Topicos de Interesse" Subtitulo="興味のあるトピック" align="left" margin="ml-25"/>

      <div className="flex flex-col items-center gap-20 px-4 sm:px-8 lg:px-24">
        {/* GRID PRINCIPAL */}
        <div
          className="
            grid 
            grid-cols-1 
            md:grid-cols-2 
            lg:grid-cols-3 
            gap-10 
            w-full
            cards-perspective
          "
        >
          {/* CARD 1 */}
          <div
            className="
              cards-slide
              text-[var(--color-white)]
              rounded-lg
              outline-2
              outline-[var(--color-primary)]
              p-8
              sm:p-12
              lg:p-16
              flex
              items-center
              justify-center
            "
          >
            <div className="flex flex-col items-center gap-2 text-center">
              <CodeIcon className="w-10 h-10 sm:w-12 sm:h-12" />
              <h1 className="text-base sm:text-lg font-bold">4 anos como</h1>
              <h1 className="text-base sm:text-lg font-[Moderniz]">
                desenvolvedor
              </h1>
            </div>
          </div>

          {/* CARD 2 */}
          <div
            className="
              cards-slide
              text-[var(--color-white)]
              rounded-lg
              outline-2
              outline-[var(--color-primary)]
              bg-[var(--color-secondary)]
              p-8
              sm:p-12
              lg:p-16
              flex
              items-center
              justify-center
            "
          >
            <div className="flex flex-col items-center gap-2 text-center">
              <BagIcon className="w-10 h-10 sm:w-12 sm:h-12" />
              <h1 className="text-base sm:text-lg font-bold">3 anos de</h1>
              <h1 className="text-base sm:text-lg font-[Moderniz]">Trabalho</h1>
            </div>
          </div>

          {/* CARD 3 */}
          <div
            className="
              cards-slide
              text-[var(--color-white)]
              rounded-lg
              outline-2
              outline-[var(--color-primary)]
              p-8
              sm:p-12
              lg:p-16
              flex
              items-center
              justify-center
            "
          >
            <div className="flex flex-col items-center gap-2 text-center">
              <BrushIcon className="w-10 h-10 sm:w-12 sm:h-12" />
              <h1 className="text-base sm:text-lg font-bold">1 ano como</h1>
              <h1 className="text-base sm:text-lg font-[Moderniz]">Designer</h1>
            </div>
          </div>

          {/* CARD 4 */}
          <div
            className="
              cards-slide
              text-[var(--color-white)]
              rounded-lg
              outline-2
              outline-[var(--color-primary)]
              p-8
              sm:p-12
              lg:p-16
              flex
              items-center
              justify-center
            "
          >
            <div className="flex flex-col items-center gap-2 text-center">
              <BalanceIcon className="w-10 h-10 sm:w-12 sm:h-12" />
              <h1 className="text-base sm:text-lg font-bold">3 anos de curso</h1>
              <h1 className="text-base sm:text-lg font-[Moderniz]">tecnico em informatica</h1>
            </div>
          </div>

          {/* CARD 5 */}
          <div
            className="
              cards-slide
              text-[var(--color-white)]
              rounded-lg
              outline-2
              outline-[var(--color-primary)]
              bg-[var(--color-secondary)]
              p-8
              sm:p-12
              lg:p-16
              flex
              items-center
              justify-center
            "
          >
            <div className="flex flex-col items-center gap-2 text-center">
              <AcademicIcon className="w-10 h-10 sm:w-12 sm:h-12" />
              <h1 className="text-base sm:text-lg font-bold">2 anos de tecnologo</h1>
              <h1 className="text-base sm:text-lg font-[Moderniz]">Analise e Desenvolvimento de sistemas</h1>
            </div>
          </div>

          {/* CARD 6 */}
          <div
            className="
              cards-slide
              text-[var(--color-white)]
              rounded-lg
              outline-2
              outline-[var(--color-primary)]
              p-8
              sm:p-12
              lg:p-16
              flex
              items-center
              justify-center
            "
          >
            <div className="flex flex-col items-center gap-2 text-center">
              <GraficIcon className="w-10 h-10 sm:w-12 sm:h-12" />
              <h1 className="text-base sm:text-lg font-bold">Dezenas de cursos</h1>
              <h1 className="text-base sm:text-lg font-[Moderniz]">programacao</h1>
            </div>
          </div>
        </div>
      </div>

      {/* imagem final */}
      <img
        src={imagemFinal}
        alt="Imagem do final"
        className="w-full h-auto mt-1"
      />
    </section>
  );
}

export default Topicos;
