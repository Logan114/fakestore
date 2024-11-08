import React, { useContext } from "react";
import { ApiContext } from "../contexts/ApiContext";

function Kosar() {
  const { kosarLista, termekLista } = useContext(ApiContext);

  return <div></div>;
}

export default Kosar;
