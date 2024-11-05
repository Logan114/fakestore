import React, { useContext } from 'react';
import Termek from './Termek.js';
import { ApiContext } from '../contexts/ApiContext.js';

function Vasarloter() {
    const { termekLista } = useContext(ApiContext); // Access the context

    return (
        <div className='row'>
            {Array.isArray(termekLista) && termekLista.map((termek,idkey,index) => (
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
