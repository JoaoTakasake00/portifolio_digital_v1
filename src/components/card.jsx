import CardTip from "./cardTip.jsx";
import ScrollReveal from "./ScrollReveal.jsx";

function Card({
  title,
  data,
  content,
  srcImage,
  topics = [],
  emBreve = false,
  emptyText = "Projeto em breve",
}) {
  return (
      <div
        className="
          w-full 
          h-full
          bg-[var(--color-background)] 
          rounded-lg 
          p-6 sm:p-8 lg:p-10
          shadow-lg 
          flex 
          flex-col 
          gap-5
        "
      >
      {emBreve ? (
        /* 🔹 Estado EM BREVE */
        <div
          className="
          flex 
          flex-1 
          items-center 
          justify-center 
          text-[var(--color-primary-white)] 
          opacity-70
          text-center
        "
        >
          <ScrollReveal
            as="h3"
            duration={850}
            distance={30}
            style={{ fontFamily: "Moderniz" }}
            className="text-xl"
          >
            {emptyText}
          </ScrollReveal>
        </div>
      ) : (
        /* 🔹 Conteúdo normal */
        <>
          {/* 🔝 TOPO FIXO */}
          <div className="flex flex-col gap-1">
            <ScrollReveal
              as="h2"
              duration={780}
              distance={24}
              style={{ fontFamily: "Moderniz" }}
              className="text-lg text-[var(--color-primary-white)]"
            >
              {title}
            </ScrollReveal>
            <ScrollReveal
              as="p"
              order={1}
              duration={780}
              distance={20}
              className="text-[var(--color-primary-white)]/90 font-semibold"
            >
              {data}
            </ScrollReveal>
          </div>

          {/* 🧠 CONTEÚDO FLEXÍVEL */}
          <div className="flex flex-col gap-4 flex-1 mt-4">
            {content && (
              <ScrollReveal
                as="p"
                order={2}
                duration={780}
                distance={20}
                className="text-[var(--color-primary-white)] leading-relaxed"
              >
                {content}
              </ScrollReveal>
            )}

            {topics.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {topics.map((topic, index) => (
                  <CardTip
                    key={index}
                    text={topic.text}
                    colorCard={topic.color}
                  />
                ))}
              </div>
            )}
          </div>

          {/* 🖼️ IMAGEM SEMPRE ALINHADA EMBAIXO */}
          {srcImage && (
            <img
              src={srcImage}
              alt={`Imagem do projeto ${title}`}
              loading="lazy"
              decoding="async"
              className="w-full h-auto object-contain mt-6"
            />
          )}
        </>
      )}
    </div>
  );
}

export default Card;
