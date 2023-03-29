import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbare from "./componentes/navbar";
import logo from './componentes/assets/owl store-logos_transparent.png';
import Greed from './componentes/items/ItemListContainer';


function App() {

  return (
    <div className="App">
      <header className="bg-light">
      <div className="container d-flex border">
            <a className="my-0" href="/">
                <img src={logo} alt="Mi imagen" className="w-25 imglogo border my-0" />
            </a>
      < Navbare />
      </div>
      </header>
      <div className="container">
        <Greed greeting={"Hola mundo"}/>
      </div>

    </div>
  );
}
export default App;
