import { FETCH_PRODUCTS_SUCCESS, DECREMENT_PRODUCT_COUNT } from './actionTypes';

const initialState = {
    products: {
        bed: [],
        sofa: [],
        dining_table: [],
        pendant_lights: [],
        curtains: [],
        bean_bag: [],
        swings: [],
        kitchen_set: []
    },
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                products: action.payload,
            };

        case DECREMENT_PRODUCT_COUNT:
            const { id, category } = action.payload;
            return {
                ...state,
                products: {
                    ...state.products,
                    [category]: state.products[category].map((product) =>
                        product.id === id
                            ? { ...product, count: product.count - 1 }
                            : product
                    ),
                },
            };
        default:
            return state;
    }
};

export default productReducer;
