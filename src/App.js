import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './componentes/navbar/NavBar';
import ItemListContainer from './componentes/itemlistcontainer/itemListContainer';
import ItemDetailContainer from './componentes/itemdetailcontainer/itemdetailcontainer';

function App() {
  return (
      <BrowserRouter>
      <div>
        <header>
          <NavBar />
        </header>
        <section>
          <div>
            <Routes>
              <Route path='/' element={<ItemListContainer />}/>
              <Route path='/category/:categoryId' element={<ItemListContainer />}/>
              <Route path='/item/:id' element={<ItemDetailContainer />}/>
            </Routes>
          </div>
        </section>
      </div>
      </BrowserRouter>
  );
}

export default App;