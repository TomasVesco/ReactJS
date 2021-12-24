import ItemL from "../itemL/itemL";

const ItemList = ({ products }) => {
    return (
        <>
            {products.map(products => <ItemL key={products.id} products={products} />)}
        </>
    );
}

export default ItemList;