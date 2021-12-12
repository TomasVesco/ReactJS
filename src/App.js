import { BrowserRouter, Switch, Route } from 'react-router-dom';
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
          <Switch>
            <Route exact path='/'>
              <ItemListContainer />
            </Route>
            <Route exact path='/category/:categoryId'>
              <ItemListContainer />
            </Route>
            <Route path='/item/:id'>
              <ItemDetailContainer />
            </Route>
          </Switch>
        </div>
      </section>
    </div>
    </BrowserRouter>
  );
}

export default App;