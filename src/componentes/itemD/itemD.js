import './styles.scss';

const ItemD = ({products}) => 
{
    return(                                      
        <div className="cardD">
            <div>
                <img src={products.image} alt=""/>
            </div>
            <div>
                <p>{products.name}</p>
            </div>
            <div>
                <p>Precio: ${products.price}</p>
            </div>
            <div>
                <p>{products.description}</p>
            </div>
        </div>
    );
}

export default ItemD;