export const products = (state = {}, { type, payload }) => {
    switch (type) {
        case 'LOAD_PRODUCTS_COLLECTION':
            return { loading: true, error: false }
        case 'UPDATE_PRODUCTS_COLLECTION':
            return { loading: false, data: payload, error: false }
        case 'FAILED_PRODUCTS_COLLECTION':
            return { loading: false, error: true }
        default:
            return state
    }
}

export const product = (state = {}, { type, payload }) => {
    switch (type) {
        case 'LOAD_PRODUCT_COLLECTION':
            return { ...state, product: { loading: true, error: false } }
        case 'UPDATE_PRODUCT_COLLECTION':
            return { ...state, product: { loading: false, data: payload, error: false } }
        case 'FAILED_PRODUCT_COLLECTION':
            return { ...state, product: { loading: false, error: true } }
        default:
            return state
    }
}