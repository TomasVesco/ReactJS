import ItemL from "../itemL/itemL";

const ItemList = ({ productos = [] }) => {
    return (
        <>
            {productos.map(productos => <ItemL key={productos.id} productos={productos} />)}
        </>
    );
}

export default ItemList;