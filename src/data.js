const data = [
    {
        productName: 'Имя продукта',
        description: '',
        discount: 20,
        price: 200,
        discountPrice: 160,
        category: 'Мясо',
        market: 'АТБ'
    },
    {
        productName: 'Имя продукта',
        description: '',
        discount: 20,
        price: 200,
        discountPrice: 160,
        category: 'Мясо',
        market: 'АТБ'
    },
    {
        productName: 'Имя продукта',
        description: '',
        discount: 20,
        price: 200,
        discountPrice: 160,
        category: 'Мясо',
        market: 'АТБ'
    },
    {
        productName: 'Имя продукта',
        description: '',
        discount: 20,
        price: 200,
        discountPrice: 160,
        category: 'Мясо',
        market: 'АТБ'
    },
    {
        productName: 'Имя продукта',
        description: '',
        discount: 20,
        price: 200,
        discountPrice: 160,
        category: 'Мясо',
        market: 'АТБ'
    },
]

export const getDiscounts = new Promise(((resolve, reject) => {
    setTimeout(() => {
        resolve(data)
    }, 1000)
}))
