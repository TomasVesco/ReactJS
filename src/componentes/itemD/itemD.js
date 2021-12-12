import './styles.scss';

const ItemD = ({productos}) => 
{
    return(                                      
        <div className="cardD">
            <div>
                <img src={productos.imagen} alt=""/>
            </div>
            <div>
                <p>{productos.nombre}</p>
            </div>
            <div>
                <p>Precio: ${productos.precio}</p>
            </div>
            <div>
                <p>{productos.descripcion}</p>
                <a href="#/">Agregar al carrito</a>
            </div>
        </div>
    );
}

export default ItemD;