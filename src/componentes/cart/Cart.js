import './styles.scss';

import CartList from '../cartList/cartList';
import { useContext, useEffect, useState } from "react";
import CartContext from '../../context/cartContext';
import { Link } from 'react-router-dom';

const Cart = () => {

    const { productoAdd, totalPrice } = useContext(CartContext);
    const { item } = productoAdd;
    const precio = totalPrice();

    const [ hayItems, setHayItems ] = useState(false);

    useEffect(() => {
        setHayItems(false);
        if(item.length === 0){
            setHayItems(false);
        } else {
            setHayItems(true);
        }
    }, [item]);

    return(
        <>
            {hayItems ? 
            <div className='cartContainer'>
                <div>
                    <div>
                        {item.map((productos, index) => <CartList key={`${item.id}${index}`} productos={productos} />)}
                    </div>
                    <div>
                        <div>
                            <p>
                                Total: $ {precio}
                            </p>
                            <Link to={'/ReactJS'}>Seguir comprando</Link>
                            <button type="">Pagar</button>
                        </div>
                    </div>
                </div>
            </div>
            : 
            <div className='cartContainerNull'>
                <div>
                    <div>
                        <p>
                            No hay items en el carrito.
                        </p>
                    </div>
                    <div>
                        <Link to={'/ReactJS'}>Volver a la tienda</Link>
                    </div>
                </div>
            </div>}
        </>
    )
}

export default Cart;