import React, { createContext, useEffect, useState } from "react";

// Create the context
export const KosarContext = createContext();

// Create the provider
export const KosarProvider = ({ children }) => {
    const [kosarLista, setKosarLista] = useState([]);

    const addToKosar = (id) => {
        setKosarLista((prevKosar) => [...prevKosar, id]);
    };

    useEffect(() => {
        console.log("Current cart:", kosarLista);
    }, [kosarLista]);

    return (
        <KosarContext.Provider value={{ kosarLista, addToKosar }}>
            {children}
        </KosarContext.Provider>
    );
};
