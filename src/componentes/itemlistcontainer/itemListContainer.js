import './styles.scss';
import '../itemcount/ItemCount';
import ItemList from '../itemList/itemList';
import { useEffect, useState } from 'react';
import { getProducts } from '../../products';


const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const list = getProducts();
        list.then(list => {
            setProductos(list);
        });
        return (() => {
            setProductos([]);
        });
    }, []);

    return (
        <div className="itemListContainer">
            <ItemList className="itemListContainer" productos={productos}/>
        </div>
    );
}

export default ItemListContainer;