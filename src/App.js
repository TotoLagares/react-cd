import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbare from "./componentes/header/navbar/navbar";
import logo from './componentes/assets/owl store-logos_transparent.png';
import ItemListConainer from './componentes/ItemContainer/itemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/itemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './componentes/ItemContainer/itemListContainer';


function App() {

  return (
    <div className="App bg-dark">
      <BrowserRouter>
        <header className="bg-dark">
            <div className="container d-flex border">
              <a className="my-0" href="/">
                  <img src={logo} alt="Mi imagen" className="w-25 imglogo my-0" />
              </a>
        < Navbare />
                 
          </div>
        </header>
      </BrowserRouter>

      <div className="container">
          <Routes>
            <Route path='/' element={<ItemListContainer/>} />
              <Route path='/' element={<ItemListContainer/>} />
              <Route path='/' element={<ItemListContainer/>} />
              <Route path='*' element={<h3>Error 404</h3>} />
          </Routes>
        <ItemListConainer greeting={"Hola mundo"}/>
        <ItemDetailContainer />
      </div>

    </div>   
  );
}
export default App;
