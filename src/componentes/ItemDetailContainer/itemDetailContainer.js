import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/itemDetail";
import { getProductosById } from "../items/itemsMock";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [productos, setProductos] = useState(null);
  const {itemId}= useParams();
  useEffect(() => {
    getProductosById(itemId)
      .then((response) => {
        setProductos(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [itemId]);

  return (
    <div className="ItemDetailContainer">
      <ItemDetail {...productos} />
    </div>
  );
};

export default ItemDetailContainer;
