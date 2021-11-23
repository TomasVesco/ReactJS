import NavBar from './componentes/navbar/NavBar';
import ItemListContainer from './componentes/itemlistcontainer/itemListContainer';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <section>
        <div>
          <ItemListContainer />
        </div>
      </section>
    </div>
  );
}

export default App;