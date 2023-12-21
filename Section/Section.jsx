import { questions } from "../Base"
import SectionChild from "./SectionChild"
import "./Section.css"
const Section = () => {
  return (
    <div className="map" >
      {questions.map((question, index) => (
        <SectionChild question={question} index1={index} key={index} />
      ))}
    </div>
  )
}

export default Section
