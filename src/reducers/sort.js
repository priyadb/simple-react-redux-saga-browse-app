export const GET_SORTED_PRODUCTS = 'GET_SORTED_PRODUCTS';
export const GET_SORT_FIELD = 'GET_SORT_FIELD';
const SET_SORTED_PRODUCTS = 'SET_SORTED_PRODUCTS';
export const SET_SORT_FIELD = 'SET_SORT_FIELD';

export const getSortedProducts = (field, products, isDescending) => ({
  type: GET_SORTED_PRODUCTS,
  field,
  products,
  isDescending,
});

export const getSortField = (field) => ({
  type: GET_SORT_FIELD,
  field,
});

export const setSortedProducts = (field, products, isDescending) => ({
  type: SET_SORTED_PRODUCTS,
  field,
  products,
  isDescending,
});

export const setSortField = (field) => ({
  type: SET_SORT_FIELD,
  field,
});
const initialState = {
  field: '',
  products: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SORTED_PRODUCTS:
      const { field, products, isDescending } = action;
      return { ...state, field, products, isDescending };
    case SET_SORT_FIELD:
      const sortField = action.field;
      return { ...state, sortField };
    default:
      return state;
  }
};
