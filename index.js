const { createStore, combineReducers } = require("redux")

// constant
const GET_PRODUCTS = 'GET_PRODUCTS'
const ADD_PRODUCT = 'ADD_PRODUCT'

// cart constant
const GET_CART_ITEM = 'GET_CART_ITEM'
const ADD_CART_ITEM = 'ADD_CART_ITEM'

// cart inital state 
const initalCartState = {
    cart: ['sugar'],
    numberofCartProducts: 1
}

// prodcuts inital state
const initalProductState = {
    products: ['sugar', 'salt'],
    numberOfProduct: 2
}

// cart action
const getCartProducts = () => {
    return {
        type: GET_CART_ITEM
    }
}
const addCartProducts = (cartProduct) => {
    return {
        type: ADD_CART_ITEM,
        payload: cartProduct
    }
}

// products actions
const getProducts = () => {
    return {
        type: GET_PRODUCTS,

    }
}
const addProduct = (products) => {
    return {
        type: ADD_PRODUCT,
        payload: products
    }
}

// product reducer

const cartReducer = (state = initalCartState, action) => {
    switch (action.type) {
        case GET_CART_ITEM:
            return {
                ...state,

            };
        case ADD_CART_ITEM:
            return {
                products: [...state.cart, action.payload],
                numberOfProduct: state.numberofCartProducts + 1
            }
        default:
            return state


    }
}

// product reducer

const productReducer = (state = initalProductState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state,

            };
        case ADD_PRODUCT:
            return {
                cart: [...state.products, action.payload],
                numberOfProduct: state.numberOfProduct + 1
            }
        default:
            return state


    }
}

// combine reducer

const rootReducer = combineReducers({
    productR: productReducer,
    cartR: cartReducer
})

// creating store 
const store = createStore(rootReducer)
store.subscribe(() => {
    console.log(store.getState())
})

// dispatching

store.dispatch(getProducts())
store.dispatch(addProduct('banana'))


store.dispatch(getCartProducts())
store.dispatch(addCartProducts('orange'))