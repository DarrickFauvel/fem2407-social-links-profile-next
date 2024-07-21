import { ReactNode } from "react"

type CardSummaryProps = {
  children: ReactNode
}

const CardSummary = ({ children }: CardSummaryProps) => {
  return <span className="text-sm leading-normal">&quot;{children}&quot;</span>
}
export default CardSummary
