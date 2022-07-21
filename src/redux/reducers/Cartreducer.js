const INITIAL_STATE = {
    carts: []
}

export const Cartreducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case "ADD_TO_CART":
            return {
                ...state,
                carts: [...state.carts,action.payload]
            }
        case "REMOVE_FROM_CART":
            return {
                carts: [
                    ...state.carts.filter(item => item !== action.payload)
                ]
            }
            default:
                return state;
    }
}

const INITIAL_STATE2 = {
    viewProducts: {}
}

export const Viewreducer = (state=INITIAL_STATE2, action) => {
    switch(action.type){
        case "VIEW_PRODUCT":
            return {
                viewProducts: action.payload
            }
            default:
                return state;
    }
}
