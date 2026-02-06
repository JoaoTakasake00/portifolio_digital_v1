
import LogoLoop from "@/components/LogoLoop";
import { DiPython, DiReact, DiCss3, DiGit, DiGithubBadge, DiHtml5 } from "react-icons/di";
import { BiLogoJavascript, BiLogoTypescript, BiLogoDocker   } from "react-icons/bi";
import { VscVscode } from "react-icons/vsc";
import { SiDbeaver, SiScrapy  } from "react-icons/si";
import Titulo from "../components/titulo.jsx";

const techLogos = [
  { node: <DiPython className="h-12 w-12 text-[var(--color-primary)]" />, title: "Python" },
  { node: <DiReact className="h-12 w-12 text-[var(--color-primary)]" />, title: "React" },
  { node: <DiCss3 className="h-12 w-12 text-[var(--color-primary)]" />, title: "CSS3" },
  { node: <DiGit className="h-12 w-12 text-[var(--color-primary)]" />, title: "Git" },
  { node: <DiGithubBadge className="h-12 w-12 text-[var(--color-primary)]" />, title: "GitHub" },
  { node: <DiHtml5 className="h-12 w-12 text-[var(--color-primary)]" />, title: "HTML5" },
  { node: <BiLogoJavascript className="h-12 w-12 text-[var(--color-primary)]" />, title: "JavaScript" },
  { node: <BiLogoTypescript className="h-12 w-12 text-[var(--color-primary)]" />, title: "TypeScript" },
  { node: <BiLogoDocker className="h-12 w-12 text-[var(--color-primary)]" />, title: "Docker" },
  { node: <VscVscode className="h-12 w-12 text-[var(--color-primary)]" />, title: "VS Code" },
  { node: <SiDbeaver className="h-12 w-12 text-[var(--color-primary)]" />, title: "DBeaver" },
  { node: <SiScrapy className="h-12 w-12 text-[var(--color-primary)]" />, title: "Scrapy" },
]

function Sobre() {
  return (
    <section className="w-full min-h-screen bg-[var(--color-secondary)] overflow-hidden">

      {/* imagem topo */}
      <img
        src="./src/assets/image/imagem_do_topo.png"
        alt="Imagem do topo"
        className="w-full h-auto -mt-1"
      />

      <div className="flex flex-col items-center gap-10 px-4 sm:px-8 lg:px-24 mt-10">

        <Titulo Titulo="Sobre Mim" Subtitulo="私について" />

        {/* GRID PRINCIPAL */}
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6 pb-12">

          {/* FOTO */}
          <div className="bg-black rounded-lg overflow-hidden p-4">
            <img
              src="./src/assets/image/foto_eu_2.jpeg"
              alt="Imagem Sobre Mim"
              className="w-full h-72 md:h-full object-cover rounded-lg"
            />
          </div>

          {/* COLUNA DIREITA */}
          <div className="md:col-span-2 flex flex-col gap-6">

            {/* NOME + TEXTO */}
            <div className="bg-black rounded-lg p-5 flex flex-col gap-4">
              <h3 className="text-white text-lg sm:text-xl font-bold font-[Moderniz]">
                Joao Victor Takasake
              </h3>

              <p className="text-white text-sm sm:text-base leading-relaxed">
                Busco integrar uma equipe de desenvolvimento atuando principalmente como
                desenvolvedor, com capacidade de colaborar tanto no front-end quanto no
                back-end. Tenho interesse em contribuir com solucoes eficientes e de
                qualidade, enquanto continuo meu crescimento profissional em um ambiente
                colaborativo e desafiador.
              </p>
            </div>

            {/* SKILLS + TEC */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

              {/* SKILLS */}
              <div className="bg-[var(--color-primary)] rounded-lg p-5 flex flex-col gap-4">
                <div>
                  <h3 className="text-white font-bold font-[Moderniz]">
                    Habilidades
                  </h3>
                  <h2 className="text-white text-sm">
                    スキル
                  </h2>
                </div>

                <ul className="text-white text-sm sm:text-base font-[Subito] space-y-1">
                  <li>• Trabalho em equipe</li>
                  <li>• Comunicacao eficaz</li>
                  <li>• Proatividade</li>
                  <li>• Facilidade de aprendizado</li>
                  <li>• Criatividade</li>
                  <li>• Inteligencia emocional</li>
                </ul>
              </div>

              {/* TECNOLOGIAS + FERRAMENTAS */}
              <div className="bg-black rounded-lg p-5 flex flex-col gap-6">

                {/* TECNOLOGIAS */}
                <div>
                  <h3 className="text-white font-bold font-[Moderniz]">
                    Tecnologias
                  </h3>

                  <div className="flex flex-wrap gap-4 mt-3">
                    {[
                      "python_logo.png",
                      "react_logo.png",
                      "javascript_logo.png",
                      "typescript_logo.png",
                      "html_logo.png",
                      "css_logo.png",
                    ].map((logo) => (
                      <div key={logo} className="h-10 w-10 flex items-center justify-center">
                        <img
                          src={`./src/assets/image/tecnologias/${logo}`}
                          alt={logo}
                          className="h-full w-auto object-contain"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* FERRAMENTAS */}
                <div>
                  <h3 className="text-white font-bold font-[Moderniz]">
                    Ferramentas
                  </h3>

                  <div className="flex flex-wrap gap-4 mt-3">
                    {[
                      "vscode_logo.png",
                      "git_logo.png",
                      "github_logo.png",
                      "docker_logo.png",
                      "debeaver_logo.png",
                    ].map((logo) => (
                      <div key={logo} className="h-10 w-10 flex items-center justify-center">
                        <img
                          src={`./src/assets/image/tecnologias/${logo}`}
                          alt={logo}
                          className="h-full w-auto object-contain"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* OUTRAS */}
                <div>
                  <h3 className="text-white font-bold font-[Moderniz]">
                    Outras
                  </h3>

                  <div className="flex gap-4 mt-3">
                    {[
                      "figma_logo.png",
                      "rpa_logo.png",
                      "web_scraping_logo.png",
                    ].map((logo) => (
                      <div key={logo} className="h-10 w-10 flex items-center justify-center">
                        <img
                          src={`./src/assets/image/tecnologias/${logo}`}
                          alt={logo}
                          className="h-full w-auto object-contain"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

        <LogoLoop
          logos={techLogos}
          speed={40}
          direction="left"
          logoHeight={60}
          gap={50}
          hoverSpeed={10}
          scaleOnHover
          ariaLabel="Technology partners"
        />
    </section>
  )
}

export default Sobre
