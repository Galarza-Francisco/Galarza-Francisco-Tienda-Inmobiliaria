import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import ItemListContainer from './components/Containers/ItemListContainer';
import { Caracteristicas } from './components/Containers/ItemListContainer/Caracteristicas';
import { Footer } from './components/Footer';
import Header from './components/Header';



function App() {
  return (
    <ChakraProvider>
      <div className='container-layout'>
        <div className='container-header'>
          <Header/>
        </div>
        <div className='container-content'>
          <ItemListContainer greeting={"Prueba Tienda inmobiliaria"}/>
          <Caracteristicas/>
        </div>
        <div className='container-footer'>
          <Footer/>
        </div>
      </div>
    </ChakraProvider>

  );
}

export default App;

