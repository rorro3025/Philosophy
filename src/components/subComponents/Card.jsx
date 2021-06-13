import React from "react";
import './cards.css'

function Card(props) {
  const { img, name,bibli } = props;
  return (
    <div className="card mb-4 animate__animated animate__fadeInUp">
      <div className="over">
      <img src={img} alt="text" height="200px" className="rounded mx-auto d-block card-img-top"/>
      </div>
      <div className="card-body">
        <h4 className="card-title text-center">{name}</h4>
        <p className="text-center text-secondary">
          {bibli}
        </p>
      </div>
    </div>
  );
}

export default Card;
