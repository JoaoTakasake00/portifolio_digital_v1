function Titulo({ Titulo, Subtitulo, align = "center", margin = "my-10" }) {
  const alignClasses = {
    center: "items-center text-center",
    left: "items-start text-left",
    right: "items-end text-right",
  };

  return (
    <div className={`flex flex-col ${alignClasses[align]} ${margin}`}>
      <h1 style={{ fontFamily: "Moderniz" }} className="text-white text-2xl sm:text-3xl leading-none">
        {Titulo}
      </h1>
      <h2 className="text-white text-lg sm:text-2xl leading-none">
        {Subtitulo}
      </h2>
    </div>
  );
}

export default Titulo;