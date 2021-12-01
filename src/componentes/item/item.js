import './styles.scss';
// import ItemCount from '../itemcount/ItemCount';

const Item = ({productos}) => 
{
    // return (                                         //Éste utilizaré para el ItemListContainer
    //     <div className="card">
    //         <div>
    //             <img src={productos.imagen} alt=""/>
    //         </div>
    //         <div>
    //             <p>{productos.nombre}</p>
    //         </div>
    //         <div>
    //             <p>Precio: ${productos.precio}</p>
    //         </div>
    //         <div>
    //             <ItemCount stock={15} initial={1}/>
    //             <a href="/#">Agregar al carrito</a>
    //         </div>
    //     </div>
    // );
    return(
        <div className="card">
            <div>
                <img src={productos.imagen} alt=""/>
            </div>
            <div>
                <p>{productos.nombre}</p>
            </div>
            <div>
                <p>Precio: ${productos.precio}</p>
            </div>
            <div>
                <p>¡Fantástica para tu perro! comodidad y elegancia.</p>
            </div>
        </div>
    );
}

export default Item;