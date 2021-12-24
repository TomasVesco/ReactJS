import './styles.scss';

import ItemCount from '../itemcount/ItemCount';
import CartContext from '../../context/cartContext';

import { Link } from 'react-router-dom';
import { useContext } from "react";

const ItemL = ({ products }) => {

    const { setProductAdd } = useContext(CartContext);

    const onAdd = (count) => {
        if(count !== 0){
            const { image, name, price, id } = products;

            const item = {
                image,
                name,
                price,
                id,
                count
            }
            setProductAdd( item, count );
        }
    }

    return (                                         
        <div className="cardL">
            <div>
                <Link to={`/item/${products.id}`}><img src={products.image} alt=""/></Link>
            </div>
            <div>
                <p>{products.name}</p>
            </div>
            <div>
                <p>Precio: ${products.price}</p>
            </div>
            <div>
                <Link to={`/item/${products.id}`}>Detalle</Link>
                <ItemCount stock={products.stock} onConfirm={onAdd}/>
            </div>
        </div>
    );
}

export default ItemL;