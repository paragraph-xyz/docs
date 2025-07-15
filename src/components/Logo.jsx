import LogoIvory from "../../public/img/paragraph_logo_ivory.png"
import LogoWood from "../../public/img/paragraph_logo_wood.png"
import Image from "next/image"

export function Logo({
  color,
  className,
}
) {
  return <img src={color === "ivory" ? "/img/paragraph_logo_ivory.png" : "/img/paragraph_logo_wood.png"} alt="Paragraph Logo" className={className + " "} />
}
