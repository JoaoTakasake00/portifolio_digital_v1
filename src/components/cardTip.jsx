function CardTip({ 
  text, 
  colorCard = "var(--color-primary)", 
  borderColor = "transparent"  
}) {
  return (
    <div
      style={{ 
        backgroundColor: colorCard, 
        border: `2px solid ${borderColor}`
      }}
      className="
        px-3 
        py-1
        text-[var(--color-primary-white)]
        text-sm
        rounded-md
        font-medium
        whitespace-nowrap
      "
    >
      {text}
    </div>
  )
}

export default CardTip
