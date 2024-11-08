// Vasarloter.js
import React, { useContext } from "react";
import Termek from "./Termek";
import { ApiContext } from "../contexts/ApiContext";

function Vasarloter() {
  const { termekLista } = useContext(ApiContext);

  return (
    <div className="row">
      {Array.isArray(termekLista) &&
        termekLista.map((termek) => (
          <Termek
            key={termek.id}
            id={termek.id}
            title={termek.title}
            desc={termek.description}
            image={termek.image}
            price={termek.price}
          />
        ))}
    </div>
  );
}

export default Vasarloter;
