
import LogoLoop from "@/components/LogoLoop";
import { DiPython, DiReact, DiCss3, DiGit, DiGithubBadge, DiHtml5 } from "react-icons/di";
import { BiLogoJavascript, BiLogoTypescript, BiLogoDocker   } from "react-icons/bi";
import { VscVscode } from "react-icons/vsc";
import { SiDbeaver, SiScrapy  } from "react-icons/si";
import Titulo from "../components/titulo.jsx";
import ScrollReveal from "../components/ScrollReveal.jsx";

import fotoEu from "@/assets/image/foto_eu_2.jpeg";
import imagemTopo from "@/assets/image/imagem_do_topo.png";
import python from "@/assets/image/tecnologias/python_logo.png";
import react from "@/assets/image/tecnologias/react_logo.png";
import js from "@/assets/image/tecnologias/javascript_logo.png";
import ts from "@/assets/image/tecnologias/typescript_logo.png";
import html from "@/assets/image/tecnologias/html_logo.png";
import css from "@/assets/image/tecnologias/css_logo.png";
import git from "@/assets/image/tecnologias/git_logo.png";
import docker from "@/assets/image/tecnologias/docker_logo.png";
import vscode from "@/assets/image/tecnologias/vscode_logo.png";
import github from "@/assets/image/tecnologias/github_logo.png";
import dbeaver from "@/assets/image/tecnologias/debeaver_logo.png";
import scrapy from "@/assets/image/tecnologias/web_scraping_logo.png";
import figma from "@/assets/image/tecnologias/figma_logo.png";
import rpa from "@/assets/image/tecnologias/rpa_logo.png";

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

const techLogosImages = [
  { src: python, name: "Python" },
  { src: react, name: "React" },
  { src: js, name: "JavaScript" },
  { src: ts, name: "TypeScript" },
  { src: html, name: "HTML" },
  { src: css, name: "CSS" },
];
const ferramentasLogosImages = [
  { src: git, name: "Git" },
  { src: github, name: "GitHub" },
  { src: vscode, name: "VS Code" },
  { src: docker, name: "Docker" },
  { src: dbeaver, name: "DBeaver" },
];
const outrasLogosImages = [
  { src: figma, name: "Figma" },
  { src: rpa, name: "RPA" },
  { src: scrapy, name: "Scrapy" },
];
const skillItems = [
  "Trabalho em equipe",
  "Comunicacao eficaz",
  "Proatividade",
  "Facilidade de aprendizado",
  "Criatividade",
  "Inteligencia emocional",
];

function Sobre() {
  return (
    <section id="sobre" className="w-full min-h-screen bg-[var(--color-secondary)] overflow-hidden">

      {/* imagem topo */}
      <img
        src={imagemTopo}
        alt="Imagem do topo"
        loading="lazy"
        decoding="async"
        className="w-full h-auto -mt-1"
      />

      <div className="section-container section-spacing flex flex-col items-center gap-10">

        <Titulo Titulo="Sobre Mim" Subtitulo="私について" />

        {/* GRID PRINCIPAL */}
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6 pb-12">

          {/* FOTO */}
          <div
            className="about-card-interactive about-tooltip-anchor bg-black rounded-lg overflow-hidden p-4"
            title="João victor Takasake"
            aria-label="João victor Takasake"
          >
            <img
              src={fotoEu}
              alt="Imagem Sobre Mim"
              loading="lazy"
              decoding="async"
              className="w-full h-72 md:h-full object-cover rounded-lg"
            />
            <span className="about-tooltip-content about-tooltip-content--inside">João victor Takasake</span>
          </div>

          {/* COLUNA DIREITA */}
          <div className="md:col-span-2 flex flex-col gap-6">

            {/* NOME + TEXTO */}
            <div className="about-card-interactive bg-black rounded-lg p-5 flex flex-col gap-4">
              <ScrollReveal
                as="h3"
                duration={860}
                distance={30}
                style={{ fontFamily: "Moderniz" }}
                className="text-white text-lg sm:text-xl font-bold"
              >
                Joao Victor Takasake
              </ScrollReveal>

              <ScrollReveal
                as="p"
                order={1}
                duration={860}
                distance={28}
                className="text-white text-sm sm:text-base leading-relaxed"
              >
                Busco integrar uma equipe de desenvolvimento atuando principalmente como
                desenvolvedor, com capacidade de colaborar tanto no front-end quanto no
                back-end. Tenho interesse em contribuir com soluções eficientes e de
                qualidade, enquanto continuo meu crescimento profissional em um ambiente
                colaborativo e desafiador.
              </ScrollReveal>
            </div>

            {/* SKILLS + TEC */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

              {/* SKILLS */}
              <div className="about-card-interactive bg-[var(--color-primary)] rounded-lg p-5 flex flex-col gap-7">
                <div>
                  <ScrollReveal
                    as="h3"
                    duration={760}
                    distance={24}
                    style={{ fontFamily: "Moderniz" }}
                    className="text-white font-bold"
                  >
                    Habilidades
                  </ScrollReveal>
                  <ScrollReveal
                    as="h2"
                    order={1}
                    duration={760}
                    distance={20}
                    className="text-white text-sm"
                  >
                    スキル
                  </ScrollReveal>
                </div>

                <ul style={{ fontFamily: "Moderniz" }} className="text-white text-sm sm:text-sm space-y-1">
                  {skillItems.map((skill, index) => (
                    <ScrollReveal
                      key={skill}
                      as="li"
                      delay={120}
                      order={index}
                      stagger={80}
                      duration={700}
                      distance={20}
                      easing="easeOut"
                    >
                      • {skill}
                    </ScrollReveal>
                  ))}
                </ul>
              </div>

              {/* TECNOLOGIAS + FERRAMENTAS */}
              <div className="about-card-interactive bg-black rounded-lg p-5 flex flex-col gap-6">

                {/* TECNOLOGIAS */}
                <div>
                  <h3 style={{ fontFamily: "Moderniz" }} className="text-white font-bold">
                    Tecnologias
                  </h3>

                  {/* LOGOS DE TECNOLOGIAS */}
                  <div className="flex flex-wrap gap-4 mt-3">
                    {techLogosImages.map((logo) => (
                      <div
                        key={logo.name}
                        className="about-logo-interactive about-tooltip-anchor h-10 w-10 flex items-center justify-center"
                        title={logo.name}
                        aria-label={logo.name}
                        tabIndex={0}
                      >
                        <img src={logo.src} alt={`logo ${logo.name}`} loading="lazy" decoding="async" />
                        <span className="about-tooltip-content">{logo.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* FERRAMENTAS */}
                <div>
                  <h3 style={{ fontFamily: "Moderniz" }} className="text-white font-bold">
                    Ferramentas
                  </h3>
 
                  {/* LOGOS DE FERRAMENTAS */}
                  <div className="flex flex-wrap gap-4 mt-3">
                    {ferramentasLogosImages.map((logo) => (
                      <div
                        key={logo.name}
                        className="about-logo-interactive about-tooltip-anchor h-10 w-10 flex items-center justify-center"
                        title={logo.name}
                        aria-label={logo.name}
                        tabIndex={0}
                      >
                        <img src={logo.src} alt={`logo ${logo.name}`} loading="lazy" decoding="async" />
                        <span className="about-tooltip-content">{logo.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* OUTRAS */}
                <div>
                  <h3 style={{ fontFamily: "Moderniz" }} className="text-white font-bold">
                    Outras
                  </h3>

                  {/* LOGOS DE OUTRAS */}
                  <div className="flex flex-wrap gap-4 mt-3">
                    {outrasLogosImages.map((logo) => (
                      <div
                        key={logo.name}
                        className="about-logo-interactive about-tooltip-anchor h-10 w-10 flex items-center justify-center"
                        title={logo.name}
                        aria-label={logo.name}
                        tabIndex={0}
                      >
                        <img src={logo.src} alt={`logo ${logo.name}`} loading="lazy" decoding="async" />
                        <span className="about-tooltip-content">{logo.name}</span>
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
