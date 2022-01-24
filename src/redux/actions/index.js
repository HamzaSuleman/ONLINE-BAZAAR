export const addItem = (product) => {
    return {
        type : "ADDITEM",
        payload : product
    }
}

export const delItem = (product) => {
    return {
        type : "DELITEM",
        payload : product
    }
}

export const delProduct = (product) => {
    return {
        type : "DELETE_Product",
        payload : product
    }
}