export const actions = {
	loadProducts: () => ({
		type: 'LOAD_PRODUCTS_COLLECTION',
	}),
    successLoadProducts: (payload) => ({
        type: 'UPDATE_PRODUCTS_COLLECTION',
        payload
    }),
	failedLoadProducts: () => ({
		type: 'FAILED_PRODUCTS_COLLECTION',
	})
}
