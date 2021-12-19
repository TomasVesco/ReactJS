import ItemD from "../itemD/itemD";
import ItemCount from '../itemcount/ItemCount';
import './styles.scss';

import { useContext } from "react";
import CartContext from '../../context/cartContext';

const ItemDetail = ({ productos }) => {
    
    const { setNotification } = useContext(CartContext);

    const onAdd = (count) => {
        setNotification('success',`${count} items agregados.`);
    }

    return(
        <div className="cardContainer">
            <ItemD key={productos.id} productos={productos}/>
            <ItemCount stock={productos.stock} initial={1} onConfirm={onAdd}/>
        </div>
    );
}

export default ItemDetail;