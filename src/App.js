import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbare from "./componentes/header/navbar/navbar";
import logo from './componentes/assets/owl store-logos_transparent.png';
import ItemListConainer from './componentes/ItemContainer/itemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/itemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './componentes/ItemContainer/itemListContainer';
import { NavLink} from 'react-router-dom';


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
          <Routes>
            <Route path='/' element={<ItemListContainer/>} />
              <Route path='/categoria/:categoriaId' element={<ItemListContainer/>} />
              <Route path='/item/:itemId' element={<ItemDetailContainer/>} />
              <Route path='*' element={<h3>Error 404</h3>} />
          </Routes>
      </BrowserRouter>  
      <div className="container">
        <ItemListConainer greeting={"Hola mundo"}/>
        <div>
          <NavLink to={'/categoria/ComponentesdePC'} className={({isActive})=>isActive ?'ActiveOption':'option'}>Componentes de PC</NavLink>
          <NavLink to={'/categoria/Perifericos'} className={({isActive})=>isActive ?'ActiveOption':'option'}>Perifericos</NavLink>
          <NavLink to={'/categoria/Notebooks'} className={({isActive})=>isActive ?'ActiveOption':'option'}>Notebooks</NavLink>
          <NavLink to={'/categoria/Consolas'} className={({isActive})=>isActive ?'ActiveOption':'option'}>Consolas</NavLink>
          <NavLink to={'/categoria/Televisores'} className={({isActive})=>isActive ?'ActiveOption':'option'}>Televisores</NavLink>
          <NavLink to={'/categoria/Smartphones'} className={({isActive})=>isActive ?'ActiveOption':'option'}>Smartphones</NavLink>
        </div>
        <ItemDetailContainer />
      </div>

    </div>   
  );
}
export default App;
