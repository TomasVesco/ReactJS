import './styles.scss';
import ItemCount from '../itemcount/ItemCount';
import { Link } from 'react-router-dom';

const ItemL = ({ productos }) => {
    return (                                         
        <div className="cardL">
            <div>
                <Link to={`/item/${productos.id}`}><img src={productos.imagen} alt=""/></Link>
            </div>
            <div>
                <p>{productos.nombre}</p>
            </div>
            <div>
                <p>Precio: ${productos.precio}</p>
            </div>
            <div>
                <Link to={`/item/${productos.id}`}>Detalle</Link>
                <ItemCount stock={15} initial={1}/>
                <Link>Agregar al carrito</Link>
            </div>
        </div>
    );
}

export default ItemL;