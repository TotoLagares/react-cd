import React, { useContext } from "react";
import { CarContext } from "../../context/carContext"

const CartItem = ({ item, quantity }) => {
  const { removeItem } = useContext(CarContext);
  const total = item.precio * quantity;

  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={item.img} alt={item.nombre} className="img-fluid" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{item.nombre}</h5>
            <p className="card-text">Precio: {item.precio}</p>
            <p className="card-text">Cantidad: {quantity}</p>
            <p className="card-text">Total: {total}</p>
            <button
              className="btn btn-danger"
              onClick={() => removeItem(item.id)}
            >
              Eliminar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
