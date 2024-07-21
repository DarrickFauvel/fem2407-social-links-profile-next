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
    <a href={item.url}>{item.label}</a>
  </li>
))

const CardLinks = () => {
  return <ul>{listItems}</ul>
}
export default CardLinks
