import './App.css';
import {ChakraProvider} from '@chakra-ui/react';
import ItemListContainer from './components/Containers/ItemListContainer';
import { Footer } from './components/Footer';
import NavBar from './components/NavBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NotFound from './components/NotFound';
import ItemDetailContainer from './components/Containers/ItemDetailContainer';
import Cart from './components/Containers/Cart'




function App() {

  return (
      <ChakraProvider>
        <div className='container-layout'>
          <div className='container-header'>
            <BrowserRouter>
              <NavBar/>
              <Routes>
                <Route path='/' element={<ItemListContainer/>}></Route>
                <Route path='/category/:categoryId' element={<ItemListContainer/>}></Route>
                <Route path='/detail/:productId' element={<ItemDetailContainer/>}></Route>
                <Route path='/cart' element={<Cart/>}></Route>
                <Route path='*' element={<NotFound/>}></Route>
              </Routes>
            </BrowserRouter>
          </div>
          <div className='container-content'>
          </div>
          <div className='container-footer'>
            <Footer/>
          </div>
        </div>
      </ChakraProvider>
  );
}

export default App;

