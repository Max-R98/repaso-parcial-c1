import React from "react";


const Card = (props) => {
  return (
    <div className="card">
      <h2>Titulo del juego: {props.title} </h2>
      <p>Plataforma: {props.title} </p>
    </div>
  );
};


export default Card;