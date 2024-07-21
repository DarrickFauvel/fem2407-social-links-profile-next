import CardLink from "./components/link"

const links = [
  {
    label: "GitHub",
    url: "#",
  },
  {
    label: "Frontend Mentor",
    url: "#",
  },
  {
    label: "LinkedIn",
    url: "#",
  },
  {
    label: "Twitter",
    url: "#",
  },
  {
    label: "Instagram",
    url: "#",
  },
]

const listItems = links.map((item) => (
  <li key={item.label}>
    <CardLink item={item} />
  </li>
))

const CardLinks = () => {
  return <ul className="flex flex-col gap-4 w-full">{listItems}</ul>
}
export default CardLinks
