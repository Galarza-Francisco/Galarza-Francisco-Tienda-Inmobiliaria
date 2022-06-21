import './App.css';
import ItemListContainer from './components/Containers/ItemListContainer';
import NavBar from './components/NavBar';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting={"Prueba Tienda inmobiliaria"}/>
    </div>
  );
}

export default App;

