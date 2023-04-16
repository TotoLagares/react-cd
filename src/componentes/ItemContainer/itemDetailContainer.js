import React, { useState, useEffect } from "react";
import ItemDetail from "../items/ItemDetail";
import { getProductosById } from "../../helpers/getProductosById";

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
      {productos && <ItemDetail {...productos} />}
    </div>
  );
};

export default ItemDetailContainer;
