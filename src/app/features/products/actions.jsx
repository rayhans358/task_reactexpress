import axios from "axios";
import * as counter from "./constans";

export const fetchProductsRequest = () => {
  return {
    type: counter.FETCH_PRODUCTS_REQUEST
  }
};

export const fetchProductsSuccess = (products) => {
  return {
    type: counter.FETCH_PRODUCTS_SUCCESS,
    payload: products
  }
};

export const fetchProductsFailure = (error) => {
  return {
    type: counter.FETCH_PRODUCTS_FAILURE,
    payload: error
  }
};

export const fetchProducts = (search) => {
  return(dispatch) => {
    dispatch(fetchProductsRequest())
    axios.get(`http://localhost:3000/api/v4/product?search=${search}`)
      .then((response) => {
        dispatch(fetchProductsSuccess(response.data))
      })
      .catch((error) => {
        dispatch(fetchProductsFailure(error.message))
      })
  }
};

export const getProductsIdRequest = () => {
  return {
    type: counter.GET_PRODUCTS_ID_REQUEST
  }
};

export const getProductsIdSuccess = (products) => {
  return {
    type: counter.GET_PRODUCTS_ID_SUCCESS,
    payload: products
  }
};

export const getProductsIdFailure = (error) => {
  return {
    type: counter.GET_PRODUCTS_ID_FAILURE,
    payload: error
  }
};

export const getProductsId = (id) => {
  return(dispatch) => {
    dispatch(getProductsIdRequest())
    axios.get(`http://localhost:3000/api/v4/product/${id}`)
      .then((response) => {
        dispatch(getProductsIdSuccess(response.data))
      })
      .catch((error) => {
        dispatch(getProductsIdFailure(error.message))
      })
  }
};

export const addProductsRequest = () => {
  return {
    type: counter.ADD_PRODUCTS_REQUEST
  }
};

export const addProductsSuccess = (products) => {
  return {
    type: counter.ADD_PRODUCTS_SUCCESS,
    payload: products
  }
};

export const addProductsFailure = (error) => {
  return {
    type: counter.ADD_PRODUCTS_FAILURE,
    payload: error
  }
};

export const addProducts = (products) => {
  return(dispatch) => {
    dispatch(addProductsRequest())
    axios.post("http://localhost:3000/api/v4/product", products)
      .then((response) => {
        dispatch(addProductsSuccess(response.data))
      })
      .catch((error) => {
        dispatch(addProductsFailure(error.message))
      })
  }
};

export const editProductsRequest = () => {
  return {
    type: counter.EDIT_PRODUCTS_REQUEST
  }
};

export const editProductsSuccess = (products) => {
  return {
    type: counter.EDIT_PRODUCTS_SUCCESS,
    payload: products
  }
};

export const editProductsFailure = (error) => {
  return {
    type: counter.EDIT_PRODUCTS_FAILURE,
    payload: error
  }
};

export const editProducts = (id, data) => {
  return(dispatch) => {
    dispatch(editProductsRequest())
    axios.put(`http://localhost:3000/api/v4/product/${id}`, data)
      .then((response) => {
        dispatch(editProductsSuccess(response.data))
      })
      .catch((error) => {
        dispatch(editProductsFailure(error.message))
      })
  }
};

export const deleteProductsRequest = () => {
  return {
    type: counter.DELETE_PRODUCTS_REQUEST
  }
};

export const deleteProductsSuccess = (products) => {
  return {
    type: counter.DELETE_PRODUCTS_SUCCESS,
    payload: products
  }
};

export const deleteProductsFailure = (error) => {
  return {
    type: counter.DELETE_PRODUCTS_FAILURE,
    payload: error
  }
};

export const deleteProducts = (productsId) => {
  return(dispatch) => {
    dispatch(deleteProductsRequest())
    axios.delete(`http://localhost:3000/api/v4/product/${productsId}`)
      .then((response) => {
        dispatch(deleteProductsSuccess(response.data))
      })
      .catch((error) => {
        dispatch(deleteProductsFailure(error.message))
      })
  }
};