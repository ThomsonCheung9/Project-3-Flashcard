import { useState } from 'react'
import FlashCards from './Components/FlashCards';
import FlashAnswer from './Components/answerFlash';
import './App.css'



function App() {

  const [count, setCount] = useState(0);

  const updateCountPlus = () => {
    if (count >= 5) {
      return
    } else (
      setCount(count + 1)
    )
  }

  const updateCountMinus = () => {
    if (count <= 0) {
      return
    } else (
      setCount(count - 1)
    )
  }

  const question = ["Where are almonds planted", "What is the main vitamin in peanuts", "How many grams of nuts should you eat per day",
  "Is walnut good for the brain", "Where are walnuts grown", "Which state growns the most nuts"]

  const answer = ["Southwestern Asia", "Vitamin E", "28 grans", "Yes", "China", "California"]

  return(
    <div>
      <h1>The ultimate guide on nuts</h1>
      <h2>Do you like nuts? If so, do you know everything about them?</h2>
      <h3>Number of Cards: 6</h3>
      <div>
        <FlashCards question={question[count]} answer={answer[count]}></FlashCards>
      </div>
      <div>
        <button onClick={updateCountMinus}>⬅️</button>
        <button onClick={updateCountPlus}>➡️</button>
        <FlashAnswer answer={answer[count]}></FlashAnswer>
      </div>
    </div>

  )
}

export default App
