import ItemD from "../itemD/itemD";
import ItemCount from '../itemcount/ItemCount';
import './styles.scss';

import { useContext } from "react";
import CartContext from '../../context/cartContext';

const ItemDetail = ({ productos }) => {
    
    const { setProductoAgregado } = useContext(CartContext);

    const onAdd = (count) => {
        if(count !== 0){
            const { imagen, nombre, precio, id} = productos;

            const item = {
                imagen,
                nombre,
                precio,
                id,
                count
            }
            setProductoAgregado( item, count );
        }
    }

    return(
        <div className="cardContainer">
            <ItemD key={productos.id} productos={productos}/>
            <ItemCount stock={productos.stock} initial={1} onConfirm={onAdd}/>
        </div>
    );
}

export default ItemDetail;