import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/itemDetail";
import { getProductosById } from "../items/itemsMock";

const ItemDetailContainer = () => {
  const [productos, setProductos] = useState(null);

  useEffect(() => {
    getProductosById("1")
      .then((response) => {
        setProductos(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="ItemDetailContainer">
      <ItemDetail {...productos} />
    </div>
  );
};

export default ItemDetailContainer;
