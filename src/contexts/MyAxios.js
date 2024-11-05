/*Sajtos axios példány hogy tudjunk konfigurálni */

import axios from "axios";
export const myAxios = axios.create({
    baseURL:'https://fakestoreapi.com',
    timeout:1000,
    headers:{
        'Content-Type':'application/json'
    },

})