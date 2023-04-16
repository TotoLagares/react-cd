
import React, { useState } from 'react';
const IteamCount = ({initial, stock, onAdd}) => {

    const [Cantidad, setCantidad] = useState(initial);

    const sumar = () => {
        if(Cantidad < stock){
            setCantidad(Cantidad + 1);
        }
    }

    const restar = () => {
        if(Cantidad > 1){
            setCantidad(Cantidad - 1);
        }
    }

    return(
        <div className='container'>
            <div className='d-block '>
            <button onClick={restar} type="button" className="btn btn-success m-3">-</button>
            <span className='fs-4 fw-semibold font-monospace'>{Cantidad}</span>
            <button onClick={sumar} type="button" className="btn btn-success m-3">+</button>
            </div>
            <div>  
                <button onClick={() => onAdd(Cantidad)}type="button" className="btn btn-success "><span className='fs-4 fw-semibold font-monospace'> Agregar al carrito</span></button>
            </div> 
        </div>
    )

}
export default IteamCount;