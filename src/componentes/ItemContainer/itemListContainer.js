import { useEffect } from "react";
import { useState } from "react";
import { getProductos } from "../items/itemsMock";
import ItemList from "../itemList/itemList";

const ItemListContainer = ({ greeting }) => {
    const [productos, setProductos] = useState([]);
    
    useEffect(() => {
        getProductos()
        .then((response) => {
            setProductos(response);
        })
        .catch((error) => {
            console.error(error);
        });
    }, []);
    
    return (
        <div>
        <h1>{greeting}</h1>
        <ItemList productos={productos} />
        </div>
    );
    }
export default ItemListContainer 