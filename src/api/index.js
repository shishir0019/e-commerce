import products from '../assets/products.json'

export const GetProductAPI = () => {
    return new Promise((resolve, resject) => {
        return resolve({ done: true, products })
    });
}

export const GetSearchProductAPI = (query) => {
    return new Promise((resolve, resject) => {
        return resolve({
            done: true, products: products.filter(product => {
                return product.name.trim().toLowerCase().includes(query.trim().toLowerCase());
            })
        })
    });
}
