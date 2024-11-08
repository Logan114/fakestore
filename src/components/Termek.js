// Termek.js
import React, { useContext } from "react";
import { KosarContext } from "../contexts/Kosarba";

function Termek({ id, title, image, desc, price }) {
  const { addToKosar } = useContext(KosarContext);

  return (
    <div className="card" style={{ width: "400px" }}>
      <img className="card-img-top" src={image} alt="Product Image" />
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        <p className="card-text">{desc}</p>
        <p className="card-text">{price}$</p>
        <button className="btn btn-primary" onClick={() => addToKosar(id)}>
          Kosárba
        </button>
      </div>
    </div>
  );
}

export default Termek;
