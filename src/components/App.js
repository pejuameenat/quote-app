import React from "react";
import Card from "./Card";
import quotes from "../quotes";

function generatQote() {
  const heading = document.querySelector("h2");
  const paragraph = document.querySelector("p");
  const cards = document.querySelector(".card");
  const randomNum = Math.floor(Math.random() * quotes.length);
  heading.textContent = quotes[randomNum].word;
  paragraph.textContent = quotes[randomNum].author;
  cards.style.backgroundImage = quotes[randomNum].bgImage;
}
function App() {
  return (
    <div className="container">
      <div className="innner-wrapper">
        <h1>Quote Generating App</h1>
        <Card
          words="What we achieve inwardly will change outer reality"
          author="Plutarch"
          heading="Quote of the day"
        />
        <button className="generate" onClick={generatQote}>
          Generate Quote
        </button>
      </div>
    </div>
  );
}
export default App;
