import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="card">
      <input
        type="text"
        onChange={(e) => {
          props.setName(e.target.value);
        }}
      />
      <h1>
        You are writing in {props.title}: {props.name}
      </h1>
    </div>
  );
};

export default Card;
