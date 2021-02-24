

const restaurantData = [
    {
        id: 0,
        address: 'Rua Relíquia, 33 - Casa Verde - São Paulo',
        deliveryTime: 15,
        logoUrl: 'https://picanhariadosamigos.com/wp-content/uploads/2020/11/cropped-logo-picanharia-dos-amigos.png',
        name: 'Picanharia dos Amigos',
        shipping: 7,
        categories: ['Churrasco', 'Carne'],
        products: [
            {
                name: 'Bife Ancho',
                photoUrl: 'https://picanhariadosamigos.com/wp-content/uploads/2020/11/p1-768x512.jpg',
                description: 'O Bife Ancho é um corte da região nobre do boi, de sabor irresistível!',
                price: 89.9,
                categories: ['Churrasco', 'Carne'],
            },
            {
                name: 'Bife Ancho',
                photoUrl: 'https://picanhariadosamigos.com/wp-content/uploads/2020/11/p1-768x512.jpg',
                description: 'O Bife Ancho é um corte da região nobre do boi, de sabor irresistível!',
                price: 89.9,
                categories: ['Churrasco', 'Carne'],
            },
            {
                name: 'Bife Ancho',
                photoUrl: 'https://picanhariadosamigos.com/wp-content/uploads/2020/11/p1-768x512.jpg',
                description: 'O Bife Ancho é um corte da região nobre do boi, de sabor irresistível!',
                price: 89.9,
                categories: ['Churrasco', 'Carne'],
            },
            {
                name: 'Bife Ancho',
                photoUrl: 'https://picanhariadosamigos.com/wp-content/uploads/2020/11/p1-768x512.jpg',
                description: 'O Bife Ancho é um corte da região nobre do boi, de sabor irresistível!',
                price: 89.9,
                categories: ['Churrasco', 'Carne'],
            },
        ],
    },
    {
        id: 1,
        address: 'Rua Doutor César, 944 - Santana - São Paulo',
        deliveryTime: 25,
        logoUrl: 'http://www.donacarmela.com.br/site/img/logo-small.png',
        name: 'Dona Carmela',
        shipping: 9,
        categories: ['Caseira'],
        products: [
            {
                name: 'Bife Ancho',
                photoUrl: 'https://picanhariadosamigos.com/wp-content/uploads/2020/11/p1-768x512.jpg',
                description: 'O Bife Ancho é um corte da região nobre do boi, de sabor irresistível!',
                price: 89.9,
                categories: ['Churrasco', 'Carne'],
            },
        ],
    },
    {
        id: 2,
        address: 'R. James Holland, 668 - Barra Funda - São Paulo',
        deliveryTime: 25,
        logoUrl: 'data:image/png;base64,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',
        name: 'Burguer King',
        shipping: 14,
        categories: ['Burguer', 'Lanche', 'FastFood'],
        products: [
            {
                name: 'Bife Ancho',
                photoUrl: 'https://picanhariadosamigos.com/wp-content/uploads/2020/11/p1-768x512.jpg',
                description: 'O Bife Ancho é um corte da região nobre do boi, de sabor irresistível!',
                price: 89.9,
                categories: ['Churrasco', 'Carne'],
            },
        ],
    },

]

export default restaurantData