// ApiContext.js in ../contexts/
import { createContext, useEffect, useState } from "react";
import { myAxios } from "./MyAxios";

export const ApiContext = createContext("");

export const ApiProvider = ({ children }) => {
  const [termekLista, setTermekLista] = useState([]);

  const getAdat = async (url) => {
    try {
      const response = await myAxios.get(url);
      console.log("Fetched data:", response.data);
      setTermekLista(response.data);
    } catch (err) {
      console.log("Hiba történt az adatok lekérése közben:", err);
    }
  };

  useEffect(() => {
    getAdat("/products");
  }, []);

  return (
    <ApiContext.Provider value={{ termekLista }}>
      {children}
    </ApiContext.Provider>
  );
};
