import * as counter from "./constans.jsx";

const initialState = {
  loading: false,
  products: [],
  error: ''
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case counter.FETCH_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true
      }
    case counter.FETCH_PRODUCTS_SUCCESS:
      return {
        loading: false,
        products: action.payload,
        error: ''
      }
    case counter.FETCH_PRODUCTS_FAILURE:
      return {
        loading: false,
        products: [],
        error: action.payload
      }
    
    case counter.GET_PRODUCTS_ID_REQUEST:
      return {
        ...state,
        loading: true
      }
    case counter.GET_PRODUCTS_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
        error: ''
      }
    case counter.GET_PRODUCTS_ID_FAILURE:
      return {
        ...state,
        loading: false,
        products: {},
        error: action.payload
      }
    
    case counter.ADD_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true
      }
    case counter.ADD_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
        error: ''
      }
    case counter.ADD_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        products: null,
        error: action.payload
      }
    
    case counter.EDIT_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true
      }
    case counter.EDIT_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        editSuccess: action.payload
      }
    case counter.EDIT_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        editFailure: action.payload
      }
    
    case counter.DELETE_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true
      }
    case counter.DELETE_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
        error: ''
      }
    case counter.DELETE_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        products: null,
        error: action.payload
      }
    default:
      return state;
  }
};

export default productsReducer;