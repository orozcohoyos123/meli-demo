import productsAdapter from '../../adapters/products';

const mockProducts = {
    author: {
        name: "Sebastian",
        lastname: "Orozco",
    },
    categories: [
        { id: "MLA1144", name: "Consolas y Videojuegos" },
        { id: "MLA438566", name: "Consolas" }
    ],
    items: [
        {
            id: "SRSA_A12312S_123ASD",
            title: "Disco SSD Samsung EVO 3200",
            price: {
                currency: "$",
                amount: 19200,
                decimals: 2,
            },
            picture: "https://http2.mlstatic.com/D_NQ_NP_2X_874785-MCO44525297153_012021-F.webp",
            condition: "Nuevo",
            free_shipping: true,
            sold_quantity: 210,
            description: "Sellado de fábrica.",
        },
        {
            id: "SRSA_A12312S_123ASD",
            title: "Disco SSD Samsung EVO 3200",
            price: {
                currency: "$",
                amount: 19200,
                decimals: 2,
            },
            picture: "https://http2.mlstatic.com/D_NQ_NP_2X_874785-MCO44525297153_012021-F.webp",
            condition: "Nuevo",
            free_shipping: true,
            sold_quantity: 210,
            description: "Sellado de fábrica.",
        },
        {
            id: "SRSA_A12312S_123ASD",
            title: "Disco SSD Samsung EVO 3200",
            price: {
                currency: "$",
                amount: 19200,
                decimals: 2,
            },
            picture: "https://http2.mlstatic.com/D_NQ_NP_2X_874785-MCO44525297153_012021-F.webp",
            condition: "Nuevo",
            free_shipping: true,
            sold_quantity: 210,
            description: "Sellado de fábrica.",
        },
        {
            id: "SRSA_A12312S_123ASD",
            title: "Disco SSD Samsung EVO 3200",
            price: {
                currency: "$",
                amount: 19200,
                decimals: 2,
            },
            picture: "https://http2.mlstatic.com/D_NQ_NP_2X_874785-MCO44525297153_012021-F.webp",
            condition: "Nuevo",
            free_shipping: true,
            sold_quantity: 210,
            description: "Sellado de fábrica.",
        },
        {
            id: "SRSA_A12312S_123ASD",
            title: "Disco SSD Samsung EVO 3200",
            price: {
                currency: "$",
                amount: 19200,
                decimals: 2,
            },
            picture: "https://http2.mlstatic.com/D_NQ_NP_2X_874785-MCO44525297153_012021-F.webp",
            condition: "Nuevo",
            free_shipping: true,
            sold_quantity: 210,
            description: "Sellado de fábrica.",
        },
        {
            id: "SRSA_A12312S_123ASD",
            title: "Disco SSD Samsung EVO 3200",
            price: {
                currency: "$",
                amount: 19200,
                decimals: 2,
            },
            picture: "https://http2.mlstatic.com/D_NQ_NP_2X_874785-MCO44525297153_012021-F.webp",
            condition: "Nuevo",
            free_shipping: true,
            sold_quantity: 210,
            description: "Sellado de fábrica.",
        },
    ]
};

const mockProductDetail = {
    author: {
        name: "Sebastian",
        lastname: "Orozco",
    },
    item: {
        id: "MLA920543431",
        title: "Sony Playstation 4 Slim 1tb Marvel's Spider-man/horizon Zero Dawn Complete Edition/ratchet & Clank  Color Negro",
        price: {
            currency: "ARS",
            amount: 74999,
            decimals: 0,
        },
        picture: "http://http2.mlstatic.com/D_843845-MLA42260331923_062020-I.jpg",
        condition: "new",
        free_shipping: false,
        sold_quantity: 25,
        description: "Con tu consola PlayStation 4 tendrás entretenimiento asegurado todos los días. Su tecnología fue creada para poner nuevos retos tanto a jugadores principiantes como expertos. \n\nCon la consola PlayStation 4, líder mundial en ventas durante años, podrás gozar de horas de juego y una excelente navegabilidad para disfrutar de películas, series y contenido online.\n\nGracias a sus pequeñas dimensiones, su consumo energético es reducido, lo que la convierte en un producto económico y accesible.\n\nNo solo esto, el control DualShock combina funciones revolucionarias y sin precedentes mientras conserva precisión, comodidad y exactitud en cada movimiento.\n\nAdaptada a tus necesidades\nGuardá tus apps, fotos, videos y mucho más en el disco duro, que cuenta con una capacidad de 1 TB. \nAl contar con un procesador de 8 núcleos y uno gráfico, brinda una experiencia dinámica, respuestas ágiles, y transiciones fluidas de imágenes en alta definición.\nPor otro lado, tiene puerto USB y salida HDMI, que permiten conectar accesorios y cargar la batería de tu control mientras jugás.\n\nVas a poder reproducir música, ver tus películas y series favoritas a través de las aplicaciones descargables.",
    },
};

describe("Products adapter", () => {
    
    /* test('Debe obtener la configuracion de produccion si se envia como tal.', async () => {
        process.env.NODE_ENV = 'production';

        const server = await productsAdapter.server;
        console.log(server)
        expect(server).toBeTruthy();
    }); */

    test('Debe obtener cuatro productos', async () => {
        jest.spyOn(global, "fetch")
            .mockResolvedValue({ json: () => mockProducts });

        const productos = await productsAdapter.getFilteredProducts("Ps4");
        
        expect(global.fetch).toHaveBeenCalledTimes(1);
        expect(productos.items.slice(0, 4).length).toEqual(4);

        global.fetch.mockClear();
    });

    test('No debe obtener productos si no se envia nada', async () => {
        const productos = await productsAdapter.getFilteredProducts("");
        
        expect(Object.keys(productos).length).toEqual(0);
    });

    test("Debe capturar el error de productos", async () => {
        jest.spyOn(global, "fetch").mockRejectedValue({ err: "error" });

        try {
            await productsAdapter.getFilteredProducts("error");
        } 
        catch (e) {
            expect(e).toEqual({err: "error"});
        }
        
        global.fetch.mockClear();
    });

    test('Debe recibir un json con los campos author e item', async () => {
        jest.spyOn(global, "fetch")
            .mockResolvedValue({ json: () => mockProductDetail });

        const result = await productsAdapter.getProductById("MLA920543431");
        const arrayMock = ["author", "item"];

        expect(Object.keys(result)).toEqual(arrayMock);

        global.fetch.mockClear();
    }); 

    test('No debe retornar detalle del producto si no se envia nada', async () => {
        const result = await productsAdapter.getProductById("");

        expect(Object.keys(result).length).toEqual(0);
    });

    test("Debe capturar el error del detalle de los productos", async () => {
        jest.spyOn(global, "fetch").mockRejectedValue({ err: "error" });
        
        try {
            await productsAdapter.getProductById("error");
        } 
        catch (err) {
            expect(err).toEqual({
                err: "error",
            });
        }

        global.fetch.mockClear();
    });
});
