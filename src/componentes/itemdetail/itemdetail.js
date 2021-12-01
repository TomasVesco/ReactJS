import Item from "../item/item";

const ItemDetail = ({productos}) => {
    return(
        <div>
            <Item key={productos.id} productos={productos}/>
        </div>
    );
}

export default ItemDetail;