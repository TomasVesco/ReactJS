import Item from "../item/item";

const ItemList = ({productos}) => {
    return (
        <>
            {productos.map(productos => 
                <Item key={productos.id} productos={productos}/>
            )}
        </>
    );
}

export default ItemList;