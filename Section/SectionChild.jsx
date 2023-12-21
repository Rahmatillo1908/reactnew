import { useState } from "react"

const SectionChild = ({ question, index1 }) => {
    const [show, setShow] = useState(false)
    const click = ()=>{
        console.log(question.answers);
    } 
    return (
        <div className={show ? "question new" : "question"}  >
            <button onClick={() => setShow(!show)} >{index1 + 1}-Savol</button>
            {show ?
                <div className="show" >
                    <h4>{question.text}</h4>
                    <div className="answer" >
                        {question.answers.map((answer, index) =>
                            <div key={index}>
                                <input name={index1} type="radio" />
                                <p>{answer.text}</p>
                            </div>
                        )}
                    </div>
                    <button onClick={click} >End</button>
                </div> : ""
            }
        </div>
    )
}

export default SectionChild