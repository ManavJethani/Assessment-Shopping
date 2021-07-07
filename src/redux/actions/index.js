export const testAction = (id) => {
    return {
        type : 'TEST',
        payload : id
    }
}

export const getAllProducts = (json) => {
    return {
        type: 'GET_PRODUCTS',
        payload:json
    }
}

export const AddToCart = (item,flag) => {
    return {
        type: 'ADD_CART',
        payload:item
    }
}

export const RemoveToCart = (item) => {
    return {
        type: 'REMOVE_CART',
        payload:item
    }
}

export const AddQuantity = (item) => {
    return {
        type: 'ADD_QUANTITY',
        payload:item
    }
}
export const RemoveQuantity = (item) => {
    return {
        type: 'REMOVE_QUANTITY',
        payload:item
    }
}

export const setAuthenticated = (flag) => {
    return {
        type: "USER_AUTHENTICATION",
        payload:flag
    }
}

export const saveOrder = (orderDetails) => {
    return {
        type: "SAVE_ORDER",
        payload:orderDetails
    }
}