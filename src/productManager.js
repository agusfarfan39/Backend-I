import {promises as fs} from `fs`
import {v4 as uuidv4} from `uuid`


export class ProductManager {
    constructor() {
        this.path = `products.json`;
        this.products = []
    }

    addProduct = async ({title, description, price, thumbnail, code, stock, status, category}) => {
        const id = uuidv4 ()
        let newProduct = {id, description, price, thumbnail, code, stock, status, category}
        this.products.push(newProduct)
        await fs.writeFile(this.path, JSON.stringify(this.products))

        return newProduct;
    }

    getProducts = async () => {}
}