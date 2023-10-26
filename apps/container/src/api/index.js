import axios from 'axios'

const instance = axios.create({
	baseURL: 'https://fakestoreapi.com',
	headers: {
		'Content-Type': 'application/json'
	},
})

class ApiCollections {
	constructor(props) {
		this.api = instance
		this.props = props
	}

	getProducts() {
        const {loadProducts, successLoadProducts, failedLoadProducts} = this.props
        loadProducts()
		return this.api.get(`/products`).then(res => successLoadProducts(res.data)).catch(failedLoadProducts)
	}
}
export default ApiCollections
