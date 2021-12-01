// import React, { useState, useEffect } from "react";
// import ItemList from "../itemList/itemList";

// const Fetch = () => {

//     const [productos, setProductos] = useState([]);

//     useEffect(() =>{
//         fetch('https://api.mercadolibre.com/sites/MLA/search?q=iphonee')
//         .then(response => {
//             return response.json();
//         }).then(res => {
//             setProductos(res.results.slice(0,10));
//         });
//     }, []);

//     console.log(productos);

//     return (
//         <div>
//             <ItemList productos={productos}/>
//         </div>
//     );
// }

// export default Fetch;