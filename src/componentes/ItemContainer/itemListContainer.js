import { useEffect } from "react";
import { useState } from "react";
import ItemList from "../itemList/itemList";
import {useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore";
import db from "../../config/firebase";

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)

  const { categoryId } = useParams()

  useEffect(() => {
      setLoading(true)

      const collectionRef = categoryId
          ? query(collection(db, 'productos'), where('categoria', '==', categoryId))
          : collection(db, 'productos')

      getDocs(collectionRef)
          .then(response => {
              const productsAdapted = response.docs.map(doc => {
                  const data = doc.data()
                  return { id: doc.id, ...data }
              })
              setProductos(productsAdapted)
          })
          .catch(error => {
              console.error(error)
          })
          .finally(() => {
              setLoading(false)
          })
  }, [categoryId])
  console.log(productos)

return (
         <div>
             {loading && <h2>Cargando...</h2>}
             <h1>{greeting}</h1>
             <ItemList productos={productos} />
         </div>)
}

export default ItemListContainer       
