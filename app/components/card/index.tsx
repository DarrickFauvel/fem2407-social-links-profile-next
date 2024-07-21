import CardImage from "./components/image"
import CardLinks from "./components/links"
import CardLocation from "./components/location"
import CardName from "./components/name"
import CardSummary from "./components/summary"

const Card = () => {
  return (
    <article className="w-full max-w-[456px] md:max-w-[384px] flex flex-col items-center gap-4 p-8 md:p-10 bg-gray-800 text-white rounded-xl">
      <CardImage />
      <div className="flex flex-col items-center">
        <CardName>Jessica Randall</CardName>
        <CardLocation>London, United Kingdom</CardLocation>
      </div>
      <CardSummary>Front-end developer and reader.</CardSummary>
      <CardLinks />
    </article>
  )
}
export default Card
