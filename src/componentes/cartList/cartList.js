import './styles.scss';

import CartContext from '../../context/cartContext'; 

import { useContext } from 'react';

const CartList = ({ products }) => {
    
    const { image, name, price, count } = products;

    const { deleteProd } = useContext(CartContext);

    return(
        <div className='cardCart'>
            <div>
                <div className='cardCartImg'>
                    <div>
                        <img src={image} alt=""/>
                    </div>
                </div>
                <div className='cardCartNombre'>
                    <div>
                        <p>{name}</p>
                    </div>
                    <div>
                        <button onClick={() => deleteProd(name)}>Eliminar</button>
                    </div>
                </div>
                <div className='cardCartCantidad'>
                    <p>Cantidad: {count}</p>
                </div>
                <div className='cardCartPrecio'>
                    <p>Precio unitario: ${price}</p>
                </div>
            </div>
        </div>
    )
}

export default CartList;