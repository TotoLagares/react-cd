import { useContext } from "react"
import { CarContext } from "../../context/carContext"
import { Link } from "react-router-dom"
import CartItem from "../cartItem/cartItem"
const Carrito = () => {
        const {cart, clearCart,totalQuantity, total} = useContext(CarContext)

        if(totalQuantity === 0){
                return(
                        <div className="container">
                        <h2>No hay productos en el carrito</h2>       
                        </div>)
         }else{
                return(
                        <div className="container d-block">
                                <h2 className="fs-3 text-secondary border-bottom">Productos en el carrito:</h2>
                                <div className="container">
                                        { cart.map(p => <CartItem key={p.item.id} {...p}/>)}
                                        <h2 className="fs-3 text-secondary border-bottom">Total: ${total}</h2>
                                </div>
                                        <button className="btn btn-danger" onClick={clearCart}>Vaciar carrito</button>
                                        <Link to="/checkout"><button className="btn btn-success">Finalizar compra</button></Link>
                                        <Link to="/"><button className="btn btn-success">Seguir comprando</button></Link>
                        </div>)
         }
}
export default Carrito