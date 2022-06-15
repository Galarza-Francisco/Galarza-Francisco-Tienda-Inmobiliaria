import './App.css';
import ItemListContainer from './components/Containers/ItemListContainer';
import Input from './components/Input';
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Input valorPlaceholder={"hola"} title={" como estas?"}/>
      <ItemListContainer greeting={"hola coders!"}/>
    </div>
  );
}

export default App;

