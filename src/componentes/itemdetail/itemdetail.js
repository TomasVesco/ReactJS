import './styles.scss';

import ItemD from "../itemD/itemD";
import ItemCount from '../itemcount/ItemCount';
import CartContext from '../../context/cartContext';

import { useContext } from "react";

const ItemDetail = ({ products }) => {
    
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

    return(
        <div className="cardContainer">
            <ItemD key={products.id} products={products}/>
            <ItemCount stock={products.stock} onConfirm={onAdd}/>
        </div>
    );
}

export default ItemDetail;