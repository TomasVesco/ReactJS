import { useEffect, useState } from "react";
import { getItem } from "../../products";
import ItemDetail from "../itemdetail/itemdetail";
import './styles.scss';

const ItemDetailContainer = () => {
    const [productos, setProductos] = useState([]);
    useEffect(() => {
        const product = getItem();
        product.then(product => {
            setProductos(product);
        });
        return(
            setProductos([])
        );
    }, []);

    return(
        <div className="itemDetailContainer">
            <ItemDetail productos={productos}/>
        </div>
    );
}

export default ItemDetailContainer;