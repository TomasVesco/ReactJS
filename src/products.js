const productos = 
[
    {
        imagen: "https://static.wixstatic.com/media/c46aee_6f2538a860304191a03da6dc2e9c5c38~mv2.jpg/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01/c46aee_6f2538a860304191a03da6dc2e9c5c38~mv2.webp",
        nombre: "Cucha para perro",
        precio: 349,
        id: 1,
        descripcion: "¡Fantástica para tu perro! comodidad y elegancia.",
        categoria: "Cucha"
    },
    {
        imagen: "https://static.wixstatic.com/media/c46aee_f051c30e02f5462f8af0cde60e41719a~mv2.jpg/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01/c46aee_f051c30e02f5462f8af0cde60e41719a~mv2.webp",
        nombre: "Comederero para perro",
        precio: 250,
        id: 2,
        descripcion: "¡Fantástico para tu perro!",
        categoria: "Comedero"
    },
    {
        imagen: "https://static.wixstatic.com/media/c46aee_da460041405c4caf8dab2da4fca53516~mv2.jpg/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01/c46aee_da460041405c4caf8dab2da4fca53516~mv2.webp",
        nombre: "Cucha para gato",
        precio: 350,
        id: 3,
        descripcion: "¡Fantástica para tu gato! comodidad y elegancia.",
        categoria: "Cucha"
    },
    {
        imagen: "https://static.wixstatic.com/media/c46aee_dd948f0ca3c94108aee14f66c8a981ba~mv2.jpg/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01/c46aee_dd948f0ca3c94108aee14f66c8a981ba~mv2.webp",
        nombre: "Comedero para gato",
        precio: 299,
        id: 4,
        descripcion: "¡Fantástica para tu gato!",
        categoria: "Comedero"
    },
    {
        imagen: "https://static.wixstatic.com/media/c46aee_c426b06d838747779d15c5c69d5ffee5~mv2.jpg/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01/c46aee_c426b06d838747779d15c5c69d5ffee5~mv2.webp",
        nombre: "Corta uñas para gato",
        precio: 100,
        id: 5,
        descripcion: "¡Fantástica para tu gato!",
        categoria: "Herramienta"
    },
    {
        imagen: "https://static.wixstatic.com/media/e10ba7_8dac73ff8f784a6399b9dd48193fa224~mv2.jpg/v1/fill/w_500,h_500,al_c,q_85/e10ba7_8dac73ff8f784a6399b9dd48193fa224~mv2.webp",
        nombre: "Cepillo para gato",
        precio: 89,
        id: 6,
        descripcion: "¡Fantástica para tu gato!",
        categoria: "Herramienta"
    },
    {
        imagen: "https://static.wixstatic.com/media/fce4e5_2113a6ba053c4d6f83af5e2ea36d3612~mv2.jpg/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01/fce4e5_2113a6ba053c4d6f83af5e2ea36d3612~mv2.webp",
        nombre: "Correa",
        precio: 150,
        id: 7,
        descripcion: "¡Fantástica para tu perro!",
        categoria: "Herramienta"
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos);
        }, 1000);
    });
};

export const getProductById = (id) => {
    return new Promise((resolve) => {
        const product = productos.find(prod => parseInt(prod.id) === parseInt(id));
        setTimeout(() => resolve(product), 1000);
    });
}

export const getItem = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos[0]);
        }, 1000);
    });
};

export const getItemByCategory = (categoria) => {
    return new Promise((resolve) => {
        const product = productos.filter(prod => prod.categoria.toLowerCase() === categoria.toLowerCase());
        setTimeout(() => resolve(product), 1000);
    });
}