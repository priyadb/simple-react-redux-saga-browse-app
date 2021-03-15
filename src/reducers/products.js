export const GET_PRODUCTS = 'GET_PRODUCTS';
const SET_PRODUCTS = 'SET_PRODUCTS';

export const getProducts = (selectedSortOption) => ({
  type: GET_PRODUCTS,
  selectedSortOption: 'none',
});

export const setProducts = (products, selectedSortOption) => ({
  type: SET_PRODUCTS,
  products,
  selectedSortOption,
});

const initialState = {
  products: undefined,
  selectedSortOption: 'none',
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      const { products } = action;
      return { ...state, products, selectedSortOption: 'none' };
    default:
      return state;
  }
};

export default productsReducer;
