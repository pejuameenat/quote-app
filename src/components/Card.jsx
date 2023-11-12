import React from "react";

function Card(props) {
  return (
    <div className="card">
      <h4>{props.heading}</h4>
      <h2>{props.words}</h2>
      <p>{props.author}</p>
    </div>
  );
}

export default Card;
