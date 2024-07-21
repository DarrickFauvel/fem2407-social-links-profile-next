import Image from "next/image"
import avatar from "@/assets/images/avatar-jessica.jpeg"

const CardImage = () => {
  return (
    <Image
      className="rounded-full"
      src={avatar}
      width={100}
      height={100}
      alt="avatar"
    />
  )
}
export default CardImage
