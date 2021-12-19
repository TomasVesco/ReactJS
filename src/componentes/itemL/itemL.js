import './styles.scss';

import ItemCount from '../itemcount/ItemCount';
import { Link } from 'react-router-dom';

import { useContext } from "react";
import CartContext from '../../context/cartContext';

const ItemL = ({ productos }) => {

    const { setNotification } = useContext(CartContext);

    const onAdd = (count) => {
        setNotification('success',`${count} items agregados.`);
    }

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
                <ItemCount stock={productos.stock} initial={1} onConfirm={onAdd}/>
            </div>
        </div>
    );
}

export default ItemL;