import React from "react";
import { useState } from "react";

const FlashCards = (props) => {
    const [flip, setFlip] = useState(true);
    
    return(
        <div
         onClick={() => setFlip(!flip)} 
         className={`card ${flip ? '' : 'flip'}`}
         >
            <div className="front">
                {props.question}
            </div>
            <div className="back">
                {props.answer}
            </div>
        </div>
    )
}

export default FlashCards