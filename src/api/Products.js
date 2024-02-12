
import axios from '../axios'

class Products {
    async getProducts(){        
        const res = await axios.get('/products').then(res => res.data)
        return res
    }
    getProductById(id){}
    createProduct(data){}
    updateProduct(id){}
    deleteProduct(id){}
}

export default new Products()