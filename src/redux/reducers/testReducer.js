
const initialState = {
    products : [],
    cart:[],
    isUserAuthenticated: false,
    savedOrder : []
}
export default (state = initialState, action) => {
    switch(action.type){
        case 'USER_AUTHENTICATION': 
        return {
            ...state,
            isUserAuthenticated:action.payload
        }
        case 'GET_PRODUCTS': 
        return {
            ...state,
            products:action.payload
        }
        case 'ADD_CART': 
        action.payload.quantity = 1;
        return {
            ...state,
            cart: [...state.cart,action.payload]
        }
        case 'REMOVE_CART': 
        return {
            ...state,
            cart: state.cart.filter(ele=>ele.id !== action.payload.id)
        }
        case 'ADD_QUANTITY': 
        return {
            ...state,
            cart: state.cart.map(ele=>ele.id === action.payload.id ? {...ele,quantity:++ele.quantity} : ele )
        }
        case 'REMOVE_QUANTITY': 
        return {
            ...state,
            cart: state.cart.map(ele=>ele.id === action.payload.id ? {...ele,quantity:--ele.quantity} : ele )
        }
        case 'SAVE_ORDER': 
        return {
            ...state,
            savedOrder: action.payload,
            cart: []
        }
        default:
        return state;
    }
}