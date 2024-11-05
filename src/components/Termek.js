import React, { useContext } from 'react'; // Import useContext
import { KosarContext } from '../contexts/Kosarba'; // Adjust the path as necessary

function Termek({ id, title, image, desc, price }) {
    const { addToKosar } = useContext(KosarContext); // Use the context

    return (
        <div className='card' style={{ width: "400px" }}>
            <img className="card-img-top" src={image} alt="Product Image" />
            <div className="card-body">
                <h4 className="card-title">{title}</h4>
                <p className="card-text">{desc}</p>
                <p className="card-text">{price}$</p>
                <button 
                    className="btn btn-primary" 
                    onClick={() => addToKosar(id)} // Call addToKosar with id
                >
                    Kosárba
                </button>
            </div>
        </div>
    );
}

export default Termek;
