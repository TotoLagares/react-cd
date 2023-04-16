import Item from "../items/item.js";
import "./itemList.css";

   const ItemList = ({ productos }) => {
      return (
        <div className="ListGroup">
            {productos.map((productos) => {
                  return (
                     <Item key={productos.id} {...productos} />
                  );
            })}
        </div>
      )
    }
    
    export default ItemList;