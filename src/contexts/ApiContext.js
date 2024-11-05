import { createContext, useEffect, useState } from "react";
import { myAxios } from "./MyAxios";

export const ApiContext = createContext("");

export const ApiProvider = ({ children }) => {
    const [termekLista, setTermekLista] = useState([]); // Initialize as an empty array

    const getAdat = async (url) => {
        try {
            const response = await myAxios.get(url);
            console.log("Fetched data:", response.data); // Log the fetched data to check its structure
            setTermekLista(response.data); // Set termekLista with the fetched data
        } catch (err) {
            console.log("Hiba történt az adatok lekérése közben:", err);
        }
    };

    useEffect(() => {
        getAdat("/products"); // Fetch all products
    }, []); // Empty dependency array means this only runs once

    return (
        <ApiContext.Provider value={{ termekLista }}>
            {children}
        </ApiContext.Provider>
    );
};
