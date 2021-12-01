import Item from "../item/item";

const ItemDetail = ({productos}) => {
    return(
        <Item key={productos.id} productos={productos}/>
    );
}

export default ItemDetail;