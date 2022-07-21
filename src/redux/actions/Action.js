export const ADD = (item) => {
    return {
        type: "ADD_TO_CART",
        payload: item
    }
}

export const VIEW = (item) => {
    return {
        type: "VIEW_PRODUCT",
        payload: item
    }
}

export const REMOVE = (item) => {
    return {
        type: "REMOVE_FROM_CART",
        payload: item
    }
}