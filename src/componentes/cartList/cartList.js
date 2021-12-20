import './styles.scss';

const CartList = ({ productos }) => {
    
    const { imagen, nombre, precio, id, count } = productos;

    return(
        <div className='cardCart'>
            <img src={imagen} alt=""/>
            <p>{nombre}</p>
            <p>Precio: {precio}</p>
            <p>{id}</p>
            <p>Cantidad: {count}</p>
        </div>
    )
}

export default CartList;