import './styles.scss';

import { useContext } from 'react';
import CartContext from '../../context/cartContext';

const CartList = ({ productos }) => {
    
    const { imagen, nombre, precio, count } = productos;

    const { eliminarProd } = useContext(CartContext);

    return(
        <div className='cardCart'>
            <div>
                <div className='cardCartImg'>
                    <div>
                        <img src={imagen} alt=""/>
                    </div>
                </div>
                <div className='cardCartNombre'>
                    <div>
                        <p>{nombre}</p>
                    </div>
                    <div>
                        <button onClick={() => eliminarProd(nombre)}>Eliminar</button>
                    </div>
                </div>
                <div>
                    <p>Cantidad: {count}</p>
                </div>
                <div>
                    <p>Precio unitario: ${precio}</p>
                </div>
            </div>
        </div>
    )
}

export default CartList;