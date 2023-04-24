import Carrito from "../carrito"
import { NavLink } from "react-router-dom"


    const Navbare = () => {;
    return(
        <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid ">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav" >
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="/"><button type="button" class="btn btn-outline-info">info</button></a>
                    </li>
                    <li className="nav-item">
                        <NavLink to={`/categoria/PerisfericosdePC`}className={({isActive})=>isActive ?'ActiveOption':'option'}>Componentes de PC</NavLink>
                    </li>
                    <li className="nav-item">
                        <button type="button" class="btn btn-outline-info"><NavLink to={`/categoria/ComponentesdePC`}className={({isActive})=>isActive ?'ActiveOption':'option'}><h4 className="fs-6">Componentes de PC</h4></NavLink></button>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-danger" href="/">< Carrito /></a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    )
    }    
export default Navbare