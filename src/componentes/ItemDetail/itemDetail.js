import React from "react";
import IteamCount from "../items/IteamCount";
import './itemDetail.css'
import { useState } from "react";
import { Link } from "react-router-dom";


const ItemDetail = ({id, nombre, precio, stock, img, categoria, descripcion}) => {
    const [QuantityAdded, setQuantityAdded] = useState(0);
    const handleonAdd = (quantity) => {
        setQuantityAdded(quantity);
    }
    return(
        <figure class=" bg-secondary">
            <div class="image m-3">
                <img src={img} alt="" className='img-fluid border'/>
            </div>
            <figcaption>
                <h2 className='text-center fs-6 m-3'>{nombre}</h2>
                <div className='d-flex justify-content-around'>
                    <h5 className=''> $ {precio}</h5>
                    <h5 className='text-muted fs-5'>Stock {stock}</h5>
                </div>
                
            </figcaption>
            <footer className='d-flex justify-content-center'>
                {
                    QuantityAdded > 0 ?
                    <Link to='/cart'><button type="button" className="btn btn-success m-3">Terminar mi compra</button></Link>
                    :
                    <IteamCount initial={0} stock={stock} onAdd={(Cantidad) => console.log(Cantidad)}/>
                }

            </footer>
      </figure> 

    )
}
export default ItemDetail