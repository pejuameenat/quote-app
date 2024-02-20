import React, {useState} from "react";
import Card from "./Card";
import quotes from "../quotes";
 
function App() {
  const [randomNum, setrandomNum] = useState(0)
  const [quote, setQUote] =useState(quotes)
  function generatQote() {
  setrandomNum(Math.floor(Math.random() * quotes.length));
}
  return (
    <div className="container">
      <div className="innner-wrapper">
        <h1>Quote Generating App</h1>
        <Card 
          words={quote[randomNum].word}
          author={quote[randomNum].author}
          heading='Daily Quotes'
          quotes={quote}
          randomNum={randomNum}
        />
        <button className="generate" onClick={generatQote}>
          Generate Quote
        </button>
      </div>
    </div>
  )
}
export default App;
