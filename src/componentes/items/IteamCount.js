
import React, { useState } from 'react';
const IteamCount = ({initial, stock, onAdd}) => {

    const [quantity, setQuantity] = useState(0);

    return(
        <div className='container'>
            <div className='d-block '>
            <button onClick ={() =>setQuantity(quantity-1) } type="button" className="btn btn-success m-3">-</button>
            <span className='fs-4 fw-semibold font-monospace'>{quantity}</span>
            <button onClick={() =>setQuantity(quantity+1) }type="button" className="btn btn-success m-3">+</button>
            </div>
            <div>  
                <button onClick={() => onAdd(quantity)}type="button" className="btn btn-success "><span className='fs-4 fw-semibold font-monospace'> Agregar al carrito</span></button>
            </div> 
        </div>
    )

}
export default IteamCount;