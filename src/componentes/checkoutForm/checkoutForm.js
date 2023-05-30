import { useState } from "react";

const CheckoutForm = ({ onConfirm }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const HandleConfirm = (event) => {
        event.preventDefault()

        const userData = {
            name,
            phone,
            email
        }

        onConfirm(userData)
    }

    return (
        <form onSubmit={HandleConfirm}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Nombre</label>
                <input type="text" className="form-control" id="name" value={name} onChange={(event) => setName(event.target.value)} />
            </div>
            <div className="mb-3">
                <label htmlFor="phone" className="form-label">Telefono</label>
                <input type="text" className="form-control" id="phone" value={phone} onChange={(event) => setPhone(event.target.value)} />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" value={email} onChange={(event) => setEmail(event.target.value)} />
            </div>
            <button type="submit" className="btn btn-primary">Confirmar</button>
        </form>
    )
}

export default CheckoutForm