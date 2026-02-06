import Titulo from "@/components/titulo";
import React from "react";
import { MdEmail } from "react-icons/md";
import { FaHouseChimney } from "react-icons/fa6";
import { FaPhoneAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

import imagemTopo from "@/assets/image/imagem_do_topo_2.png";
import imagemFinal from "@/assets/image/imagem_do_final_1.png";

function Contato() {
  return (
    <>
        <section id="contato" className="relative w-full min-h-screen overflow-hidden">
            {/* imagem topo */}
            <img
                src={imagemTopo}
                alt="Imagem do topo"
                className="w-full h-auto -mt-1"
            />

            <div className="px-4 sm:px-8 lg:px-24 mt-10 mb-20 flex flex-col gap-10">
              <Titulo Titulo="Vamos Conversar?" Subtitulo="お話し合いましょう" align="left"/>

              <div
                className="
                  text-[var(--color-white)]
                  rounded-lg
                  outline-2
                  outline-[var(--color-primary)]
                  p-8
                  sm:p-12
                  lg:p-16
                  flex
                  w-full
                  lg:w-1/2
                  gap-8
                  flex-col
                "
              >
                <div className="flex flex-col gap-2">
                  <h1 style={{ fontFamily: "Moderniz" }}className="text-base sm:text-lg ">Informacoes de Contato</h1>
                  <p className="text-base sm:text-sm font-normal">Se você gostou do meu trabalho e procura um profissional comprometido, 
                    apaixonado por tecnologia e focado em resultados, fico à disposição para conversarmos. 
                    Tenho experiência no desenvolvimento de soluções criativas e eficientes, 
                    sempre buscando agregar valor aos projetos e transformar desafios em entregas de impacto. 
                    Será um prazer contribuir para o sucesso do seu próximo projeto.
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex flex-row items-center gap-2">
                    <FaHouseChimney className="w-3 h-3 sm:w-5 sm:h-5 text-[var(--color-primary)]" />
                    <h1 style={{ fontFamily: "Subito" }} className="text-base sm:text-lg font-bold">Endereco:</h1>
                    <p className="text-base sm:text-lg font-normal">Barueri - SP</p>
                  </div>

                  <div className="flex flex-row items-center gap-2">
                    <MdEmail className="w-4 h-4 sm:w-6 sm:h-6 text-[var(--color-primary)]" />
                    <h1 style={{ fontFamily: "Subito" }} className="text-base sm:text-lg font-bold">Email:</h1>
                    <p className="text-base sm:text-lg font-normal">jv2takasake@gmail.com</p>
                  </div>

                  <div className="flex flex-row items-center gap-2">
                    <FaPhoneAlt  className="w-3 h-3 sm:w-5 sm:h-5 text-[var(--color-primary)]" />
                    <h1 style={{ fontFamily: "Subito" }} className="text-base sm:text-lg font-bold">Telefone:</h1>
                    <p className="text-base sm:text-lg font-normal">+55 (11) 970820335</p>
                  </div>

                  <div className="flex flex-row items-center gap-2">
                    <IoLogoWhatsapp  className="w-4 h-4 sm:w-6 sm:h-6 text-[var(--color-primary)]" />
                      <a
                        href="https://wa.me/5511970820335"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ fontFamily: "Subito" }}
                        className="
                          text-base 
                          sm:text-lg 
                          font-bold
                          text-[var(--color-white)]
                          hover:text-[var(--color-primary)]
                          transition-colors
                        "
                      >
                        Whatsapp
                      </a>
                  </div>

                  <div className="flex flex-row items-center gap-2">
                    <FaLinkedin  className="w-4 h-4 sm:w-6 sm:h-6 text-[var(--color-primary)]" />
                      <a
                        href="https://www.linkedin.com/in/joao-victor-takasake/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ fontFamily: "Subito" }}
                        className="
                          text-base 
                          sm:text-lg
                          font-bold
                          text-[var(--color-white)]
                          hover:text-[var(--color-primary)]
                          transition-colors
                        "
                      >
                        Linkedin
                      </a>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <FaGithub  className="w-4 h-4 sm:w-6 sm:h-6 text-[var(--color-primary)]" />
                      <a
                        href="https://github.com/JoaoTakasake00"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ fontFamily: "Subito" }}
                        className="
                          text-base 
                          sm:text-lg 
                          font-bold
                          text-[var(--color-white)]
                          hover:text-[var(--color-primary)]
                          transition-colors
                        "
                      >
                        Github
                      </a>
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
    </>
  );
}

export default Contato;
