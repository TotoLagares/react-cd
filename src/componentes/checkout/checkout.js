import { Timestamp, writeBatch } from 'firebase/firestore';
import { collection, addDoc, getDocs, query, where, documentId } from 'firebase/firestore';
import { CarContext } from '../../context/carContext';
import { useState, useContext } from 'react';
import db from '../../config/firebase';
import CheckoutForm from '../checkoutForm/checkoutForm';
import { PulseLoader } from "react-spinners";

const Checkout = () => {
    const [ loading, setLoading ] = useState(false);
    const [ orderId, setOrderId ] = useState('');

    const { cart, totalItems, clearCart } = useContext( CarContext );

    const createOrder = async ({ name, phone, email }) => {
        setLoading(true);

        try{
            const objOrder = {
                buyer:{
                    name, phone, email
                },
                items: cart,
                total: totalItems(),
                date: Timestamp.fromDate(new Date())
            }

            const batch = writeBatch(db);

            const outOfStock = [];

            const ids = cart.map(prod => prod.id);

            const productsRef = collection(db, 'productos');

            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)));

            const { docs } = productsAddedFromFirestore;

            docs.forEach(doc => {
                const dataDoc = doc.data();
                const stockDb = dataDoc.stock;

                const productAddedToCart = cart.find(prod => prod.id === doc.id);
                const prodQuantity = productAddedToCart?.cantidad || productAddedToCart.quantity;

                if(stockDb >= prodQuantity){
                    batch.update(doc.ref, { stock: stockDb - prodQuantity });
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc });
                }   

            });

            if(outOfStock.length === 0){
                await batch.commit();

                const orderRef = collection(db, 'orders');

                const orderAdded = await addDoc(orderRef, objOrder);

                setOrderId(orderAdded.id);
                clearCart();

            } else {
                console.error('Hay productos que están fuera de stock');
            }

        } catch(error){
            console.log(error);

        } finally {
            setLoading(false);
        }
    }

    if(loading) {
        return  <h1>
                    <PulseLoader color="red" loading={loading} size={15} />
                    Se está generando su orden...
                </h1>
    }

    if(orderId) {
        return  <h1>
                    Orden generada con éxito. El código de su orden es:
                    <span>
                        {orderId}
                    </span>
                </h1> 
    }


    return (
        <div>
            <h2>
                Checkout
            </h2>
            <CheckoutForm onConfirm={createOrder} />
        </div>
    ) 
}

export default Checkout;