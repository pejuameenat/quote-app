import React from "react";

function Card(props) {
  const styles = {
    backgroundImage: props.quotes[props.randomNum].bgImage
  }
  return (
    <div className="card" style={styles}>
      <h4>{props.heading}</h4>
      <h2>{props.words}</h2>
      <p>{props.author}</p>
    </div>
  );
}

export default Card;
