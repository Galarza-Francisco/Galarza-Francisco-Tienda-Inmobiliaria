import './App.css';
import {ChakraProvider} from '@chakra-ui/react';
import ItemListContainer from './components/Containers/ItemListContainer';
// import Caracteristicas from './components/Caracteristicas';
import { Footer } from './components/Footer';
import NavBar from './components/NavBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NotFound from './components/NotFound';
import ItemDetailContainer from './components/Containers/ItemDetailContainer';



function App() {

  return (
      <ChakraProvider>
        <div className='container-layout'>
            <BrowserRouter>
              <NavBar/>
              <Routes>
                <Route path='/' element={<ItemListContainer/>}></Route>
                <Route path='/category/:categoryId' element={<ItemListContainer/>}></Route>
                <Route path='/detail/:productId' element={<ItemDetailContainer/>}></Route>
                <Route path='*' element={<NotFound/>}></Route>
              </Routes>
            </BrowserRouter>
          <div className='container-content'>
            {/* <Caracteristicas></Caracteristicas> */}
          </div>
          <div className='container-footer'>
            <Footer/>
          </div>
        </div>
      </ChakraProvider>
  );
}

export default App;

