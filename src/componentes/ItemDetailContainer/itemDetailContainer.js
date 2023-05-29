
import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/itemDetail";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import db from "../../config/firebase";
import {PulseLoader} from "react-spinners";



const ItemDetailContainer = () => {
  const [productos, setProductos] = useState(null);
  const [loading, setLoading] = useState(true);

  const { itemId } = useParams();

  useEffect(() => {
      setLoading(true);

      const docRef = doc(db, 'productos', itemId);

      getDoc(docRef)
          .then(response => {
              const data = response.data();
              const productAdapted = { id: response.id, ...data };
              setProductos(productAdapted);
          })
          .catch(error => {
              console.error(error);
          })
          .finally(() => {
              setLoading(false);
          });

  }, [itemId]);

  return (
    <div className="ItemDetailContainer">
            {loading ? (
                <PulseLoader color="red" loading={loading} size={15} />
            ) : (
                <ItemDetail {...productos} />
            )}
    </div>
  );
};

export default ItemDetailContainer;
