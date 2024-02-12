
import axios from '../axios'

class Category {
    async getCategory(){        
        const res = await axios.get('/categories').then(res => res.data)
        return res
    }
     async getCategoryById(id){
        const res = await axios.get(`/categories/${id}/products`)
             .then(res => res.data)
        return res
    }
    createCategory(data){}
    updateCategory(id){}
    deleteCategory(id){}
}

export default new Category()