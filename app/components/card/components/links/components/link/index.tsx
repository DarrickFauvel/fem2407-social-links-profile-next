"use client"

import { MouseEvent } from "react"

type CardLinkProps = {
  item: {
    label: string
    url: string
  }
}

const CardLink = ({ item }: CardLinkProps) => {
  const handleClick = (e: MouseEvent) => e.preventDefault()

  return (
    <a
      className="text-sm font-bold bg-[#333333] block w-full text-center p-4 rounded-lg hover:bg-[#C4F82A] hover:text-gray-700 transition-all duration-300"
      href={item.url}
      onClick={handleClick}>
      {item.label}
    </a>
  )
}
export default CardLink
