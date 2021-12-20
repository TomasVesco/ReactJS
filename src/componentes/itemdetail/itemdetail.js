import ItemD from "../itemD/itemD";
import ItemCount from '../itemcount/ItemCount';
import './styles.scss';

import { useContext } from "react";
import CartContext from '../../context/cartContext';

const ItemDetail = ({ productos }) => {
    
    const { setProductoAgregado } = useContext(CartContext);

    const onAdd = (count) => {
        const { imagen, nombre, precio, id} = productos;
        //Crear funcion de addItem en cartContext y utilizarla aca...
        const item = {
            imagen,
            nombre,
            precio,
            id
        }
        setProductoAgregado( item, count );
    }

    return(
        <div className="cardContainer">
            <ItemD key={productos.id} productos={productos}/>
            <ItemCount stock={productos.stock} initial={1} onConfirm={onAdd}/>
        </div>
    );
}

export default ItemDetail;