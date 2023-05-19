import { useContext } from "react";
import { CarContext } from "../../context/carContext"
import { Link } from "react-router-dom"

const   CartWidget = () => {
        const {totalQuantity} = useContext(CarContext)
        return(
                <div className="container">
                        <Link to="/cart"><button className="btn btn-success">Carrito {totalQuantity}</button></Link>
                </div>
        )
}
export default CartWidget