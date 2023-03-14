import React from "react";
import { useState } from "react";

const FlashAnswer = (props) => {
    const [answer, setAnswer] = useState("")
    const [correct, setCorrect] = useState(true)

    const handleSubmit = (event) => {
        if (props.question == {answer}) {
            setCorrect(true)
        } else {
            setCorrect(false)
        }
        event.preventDefault();
    }

    return(
        <div>
            <form onSubmit={handleSubmit}
            >
            <input 
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className={`inputForm ${correct? 'correct':'incorrect'}`}
            > 
            </input>
            </form>
        </div>
    )
}

export default FlashAnswer