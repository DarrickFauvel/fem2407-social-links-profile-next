import { ReactNode } from "react"

type CardNameProps = {
  children: ReactNode
}

const CardName = ({ children }: CardNameProps) => {
  return <h2 className="text-2xl font-semibold">{children}</h2>
}
export default CardName
