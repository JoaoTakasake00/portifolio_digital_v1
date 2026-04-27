import Card from "./card.jsx";

function CardLink({
  title,
  data,
  content,
  srcImage,
  topics = [],
  link,
  emBreve = false,
  emptyText = "Projeto em breve",
}) {
  const cardClassName = `
    cards-slide
    relative
    group
    h-full
    ${!emBreve ? "cursor-pointer rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]" : ""}
  `

  return (
    <div className="cards-perspective h-full">
      {!emBreve && link ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Abrir projeto ${title}`}
          className={cardClassName}
        >
          <Card
            title={title}
            data={data}
            content={content}
            srcImage={srcImage}
            topics={topics}
            emBreve={emBreve}
            emptyText={emptyText}
          />

          <div
            className="
              absolute
              inset-0
              rounded-lg
              bg-black/40
              backdrop-blur-0
              opacity-0
              scale-[0.98]
              group-hover:opacity-100
              group-hover:backdrop-blur-xs
              group-hover:scale-100
              transition-all
              duration-350
              ease-out
              flex
              items-center
              justify-center
              pointer-events-none
            "
          >
            <span
              className="
                pointer-events-none
                px-6
                py-3
                font-semibold
                rounded-md
                bg-[var(--color-primary)]
                text-white
                border
                border-transparent
                hover:bg-transparent
                hover:text-[var(--color-primary)]
                hover:border-[var(--color-primary)]
                transition-all
                duration-350
                ease-out
                scale-95
                group-hover:scale-100
              "
            >
              Visualizar
            </span>
          </div>
        </a>
      ) : (
        <div className={cardClassName}>
        {/* CARD */}
        <Card
          title={title}
          data={data}
          content={content}
          srcImage={srcImage}
          topics={topics}
          emBreve={emBreve}
          emptyText={emptyText}
        />
        </div>
      )}
    </div>
  );
}

export default CardLink;
