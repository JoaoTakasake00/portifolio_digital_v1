import React from "react";
import Card from "../components/card";
import Titulo from "../components/titulo";
import CardLink from "../components/CardLink";

function Projetos() {
  return (
    <section className="w-full min-h-screen bg-[var(--color-secondary)] overflow-hidden flex flex-col gap-20">

      <Titulo Titulo="Projetos" Subtitulo="プロジェクト" align="left" margin="ml-25 mt-10"/>

      <div className="flex flex-col items-center gap-10 px-4 sm:px-8 lg:px-24">
        <div
          className="
            w-full 
            grid 
            grid-cols-1 
            md:grid-cols-2 
            xl:grid-cols-3 
            gap-8 
            sm:gap-10
          "
        >
          <CardLink 
            link="https://portal.lead.tax/"
            title="Portal LeadTax"
            data="2023 - Atual"
            content="Atuei como desenvolvedor full stack, participando do desenvolvimento e manutenção de sistemas internos, 
            automações e APIs. Trabalhei tanto no front-end (React, TypeScript, CSS, Figma) 
            quanto no back-end realizando web scraping e automações de processos."
            srcImage="./src/assets/image/projetos/projeto_portal_leadtax.png"
            topics={[
              { text: "FullStack", color: "var(--color-primary)" },
              { text: "Python", color: "var(--color-primary)" },
              { text: "React", color: "var(--color-primary)" },
            ]}
          />

          <CardLink 
            link="https://beecare.bionexo.com/"
            title="BeeCare"
            data="2024 - 2025"
            content="Atuei como desenvolvedor back-end em PHP, sendo responsável pela criação de RPAs e rotinas 
            de web scraping para integração entre prestadores e operadoras de saúde, 
            trabalhando no formato Kanban com gerenciamento de tarefas via Jira."
            srcImage="./src/assets/image/projetos/projeto_beecare.png"
            topics={[
              { text: "BackEnd", color: "var(--color-primary)" },
              { text: "PHP", color: "var(--color-primary)" },
              { text: "WebScrapping", color: "var(--color-primary)" },
              { text: "RPA", color: "var(--color-primary)" },
              { text: "Kanban", color: "var(--color-primary)" },
              { text: "Jira", color: "var(--color-primary)" },
            ]}
          />

          <CardLink 
            emBreve={true}
            emptyText="Projeto em Breve"
          />
        </div>
      </div>
    </section>
  );
}

export default Projetos;
