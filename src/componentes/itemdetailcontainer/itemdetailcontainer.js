import './styles.scss';
import ItemDetail from "../itemdetail/itemdetail";
import { useEffect, useState } from "react";
import { getItem } from "../../products";

const ItemDetailContainer = () => {

    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(false);

    useEffect(() => {
        const product = getItem();
        setCargando(true)
        product.then(product => {
            setProductos(product);
            setCargando(false);
        });
        return(() => {
            setProductos([]);
        });
    }, []);

    return(
        <div className="itemDetailContainer">
            {!cargando&&<ItemDetail productos={productos}/>}
        </div>
    );
}

export default ItemDetailContainer;