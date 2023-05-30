import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbare from "./componentes/header/navbar/navbar";
import logo from './componentes/assets/owl store-logos_transparent.png';
import ItemListConainer from './componentes/ItemContainer/itemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/itemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Carrito from './componentes/header/carrito';
import { CarProvider } from './context/carContext';
import Checkout from './componentes/checkout/checkout';



function App() {

  return (
    <div className="App bg-dark">
      <BrowserRouter>
      <CarProvider>
        <header className="bg-dark">
            <div className="container d-flex border">
              <a className="my-0" href="/">
                  <img src={logo} alt="Mi imagen" className="w-25 imglogo my-0" />
              </a>
              
            < Navbare /> 
          </div>
        </header>
          <Routes>
              <Route path='/' element={<ItemListConainer/>} />
              <Route exact path='./categoria/categoriaId' element ={<ItemDetailContainer/>} />
              <Route path='/item/:itemId' element={<ItemDetailContainer/>} />
              <Route path='*' element={<h3>Error 404</h3>} />
              <Route path='/cart' element={<Carrito/>} />
              <Route path='/checkout' element={<Checkout/>} />
          </Routes>
      </CarProvider>
      </BrowserRouter> 
    </div>
  );
}
export default App;
