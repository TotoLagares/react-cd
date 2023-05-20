import { useEffect } from "react";
import { useState } from "react";
import ItemList from "../itemList/itemList";
import {useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore";
import db from "../../config/firebase";

const ItemListContainer = ({ greeting }) => {
    const [productos, setProductos] = useState([]);
    const [loading, setloading] = useState(true);

    const {CategoriaId} = useParams();
    
    useEffect(() => {
        setloading(true);
      
        const collectionRef = CategoriaId
          ? query(collection(db, "productos"), where("categoria", "==", CategoriaId))
          : collection(db, "productos");
      
        getDocs(collectionRef)
          .then((response) => {
            const productosAdapted = response.docs.map((doc) => {
              const data = doc.data();
              return { id: doc.id, ...data };
            });
            setProductos(productosAdapted);
          })
          .catch((error) => {
            console.log(error);
          })
          .finally(() => {
            setloading(false);
          });
      }, [CategoriaId]);

      return (
        <div>
            {loading && <h2>Cargando...</h2>}
            <h1>{greeting}</h1>
            <ItemList productos={productos} />
        </div>)

}
      

export default ItemListContainer 