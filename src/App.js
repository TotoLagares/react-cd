import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbare from "./componentes/header/navbar/navbar";
import logo from './componentes/assets/owl store-logos_transparent.png';
import ItemListConainer from './componentes/ItemContainer/itemListContainer';


function App() {

  return (
    <div className="App bg-dark">
        <header className="bg-dark">
          <div className="container d-flex border">
            <a className="my-0" href="/">
                <img src={logo} alt="Mi imagen" className="w-25 imglogo my-0" />
            </a>
      < Navbare />
      </div>
      </header>
      <div className="container">
        <ItemListConainer greeting={"Hola mundo"}/>
      </div>

    </div>   
  );
}
export default App;
