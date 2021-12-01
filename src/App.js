import NavBar from './componentes/navbar/NavBar';
// import ItemListContainer from './componentes/itemlistcontainer/itemListContainer';
import ItemDetailContainer from './componentes/itemdetailcontainer/itemdetailcontainer';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <section>
        <div>
          {/* <ItemListContainer /> */}
          <ItemDetailContainer/>
        </div>
      </section>
      {/* <section>
          <Fetch />
      </section> */}
    </div>
  );
}

export default App;