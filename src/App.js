import NavBar from './componentes/navbar/NavBar';
import ItemListContainer from './componentes/itemlistcontainer/itemListContainer';
import ItemDetailContainer from './componentes/itemdetailcontainer/itemdetailcontainer';

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartContextProvider } from './context/cartContext';
import Cart from './componentes/cart/Cart';
import Login from './componentes/login/Login';

function App() {
  return (
    <CartContextProvider >
      <BrowserRouter>
        <div>
          <header>
            <NavBar />
          </header>
          <section>
            <div>
              <Routes>
                <Route path='/ReactJS' element={<ItemListContainer />}/>
                <Route path='/category/:categoryId' element={<ItemListContainer />}/>
                <Route path='/item/:id' element={<ItemDetailContainer />}/>
                <Route path='/Login' element={<Login />}/>
                <Route path='/Cart' element={<Cart />}/>
              </Routes>
            </div>
          </section>
        </div>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;