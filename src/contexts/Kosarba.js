// Kosarba.js in ../contexts/
import React, { createContext, useState, useEffect, useContext } from "react";
import Termek from "../components/Termek";
import { ApiContext } from "./ApiContext";

export const KosarContext = createContext();

export const KosarProvider = ({ children }) => {
  const [kosarLista, setKosarLista] = useState([]);
  const { termekLista } = useContext(ApiContext);

  const addToKosar = (id) => {
    setKosarLista((prevKosar) => {
      if (!prevKosar.includes(id)) {
        return [...prevKosar, id];
      }
      return prevKosar;
    });
  };

  useEffect(() => {
    kosarLista.forEach((element, index) => {
      const termek = termekLista.find((item) => item.id === element);
      if (termek) {
        console.log(termek.title);
      }
    });
  }, [kosarLista]);

  return (
    <KosarContext.Provider value={{ kosarLista, addToKosar }}>
      {children}
    </KosarContext.Provider>
  );
};
