import { useEffect } from "react";
import { useState } from "react";
import { getProductos } from "../items/itemsMock";
import ItemList from "../itemList/itemList";
import {useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
    const [productos, setProductos] = useState([]);

    const {CategoriaId} = useParams();
    
    useEffect(() => {
        const asyncFunct= CategoriaId ? getProductos(CategoriaId) : getProductos();
        getProductos(asyncFunct)
        .then((response) => {
            setProductos(response);
        })
        .catch((error) => {
            console.error(error);
        });
    }, [CategoriaId]);
    return (
        <div>
        <h1>{greeting}</h1>
        <ItemList productos={productos} />
        </div>
    );
    }
export default ItemListContainer 