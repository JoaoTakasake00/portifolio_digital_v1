function CardTopic() {
  return (
    <>
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
    </>
  )
}

export default CardTopic
