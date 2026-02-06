import CardTip from "./cardTip.jsx";

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
          <h1 style={{ fontFamily: "Moderniz" }} className="text-xl">{emptyText}</h1>
        </div>
      ) : (
        /* 🔹 Conteúdo normal */
        <>
          {/* 🔝 TOPO FIXO */}
          <div className="flex flex-col gap-1">
            <h2 style={{ fontFamily: "Moderniz" }} className="text-lg text-[var(--color-primary-white)]">
              {title}
            </h2>
            <p className="text-[var(--color-primary-white)] font-bold">
              {data}
            </p>
          </div>

          {/* 🧠 CONTEÚDO FLEXÍVEL */}
          <div className="flex flex-col gap-4 flex-1 mt-4">
            {content && (
              <p className="text-[var(--color-primary-white)]">{content}</p>
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
              alt=""
              className="w-full h-auto object-contain mt-6"
            />
          )}
        </>
      )}
    </div>
  );
}

export default Card;
