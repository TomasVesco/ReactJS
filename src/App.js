import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './componentes/navbar/NavBar';
import ItemListContainer from './componentes/itemlistcontainer/itemListContainer';
import ItemDetailContainer from './componentes/itemdetailcontainer/itemdetailcontainer';
// import Notification from './componentes/notification/notification';
// import { NotificationContextProvider } from './componentes/context/notificationContext';


function App() {
  return (
    // <NotificationContextProvider>
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
          {/* <Notification /> */}
        </section>
      </div>
      </BrowserRouter>
    // </NotificationContextProvider>
  );
}

export default App;