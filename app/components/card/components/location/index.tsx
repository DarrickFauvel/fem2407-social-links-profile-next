import { ReactNode } from "react"

type CardLocationProps = {
  children: ReactNode
}

const CardLocation = ({ children }: CardLocationProps) => {
  return (
    <h3 className="text-sm font-bold text-[#C4F82A] leading-normal">
      {children}
    </h3>
  )
}
export default CardLocation
