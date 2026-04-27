import ScrollReveal from "./ScrollReveal.jsx";

function Titulo({ Titulo, Subtitulo, align = "center", margin = "my-10" }) {
  const alignClasses = {
    center: "items-center text-center",
    left: "items-start text-left",
    right: "items-end text-right",
  };

  return (
    <div className={`flex flex-col ${alignClasses[align]} ${margin}`}>
      <ScrollReveal
        as="h2"
        duration={820}
        distance={26}
        easing="smooth"
        style={{ fontFamily: "Moderniz" }}
        className="text-white text-2xl sm:text-3xl leading-none"
      >
        {Titulo}
      </ScrollReveal>
      <ScrollReveal
        as="p"
        order={1}
        duration={820}
        distance={22}
        easing="easeOut"
        className="text-white text-lg sm:text-2xl leading-none"
      >
        {Subtitulo}
      </ScrollReveal>
    </div>
  );
}

export default Titulo;
