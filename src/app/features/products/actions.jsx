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
    error
  }
};

export const fetchProducts = (search) => {
  return(dispatch) => {
    dispatch(fetchProductsRequest())
    setTimeout(() => {
      axios.get(`http://localhost:3000/api/v4/product?search=${search}`)
        .then((res) => {
          dispatch(fetchProductsSuccess(res.data))
        })
        .catch((err) => {
          dispatch(fetchProductsFailure(err.message))
        })
    }, 1500);
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
    error
  }
};

export const getProductsId = (id) => {
  return(dispatch) => {
    dispatch(getProductsIdRequest())
    axios.get(`http://localhost:3000/api/v4/product/${id}`)
      .then((res) => {
        dispatch(getProductsIdSuccess(res.data))
      })
      .catch((err) => {
        dispatch(getProductsIdFailure(err.message))
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
    error
  }
};

export const addProducts = (products) => {
  return(dispatch) => {
    dispatch(addProductsRequest())
    axios.post("http://localhost:3000/api/v4/product", products)
      .then((res) => {
        dispatch(addProductsSuccess(res.data))
      })
      .catch((err) => {
        dispatch(addProductsFailure(err.message))
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
    error
  }
};

export const editProducts = (id, data) => {
  return(dispatch) => {
    dispatch(editProductsRequest())
    axios.put(`http://localhost:3000/api/v4/product${id}`, data)
      .then((res) => {
        dispatch(editProductsSuccess(res.data))
      })
      .catch((err) => {
        dispatch(editProductsFailure(err.message))
      })
  }
};

export const deleteProductRequest = () => {
  return {
    type: counter.DELETE_PRODUCTS_REQUEST
  }
};

export const deleteProductSuccess = (products) => {
  return {
    type: counter.DELETE_PRODUCTS_SUCCESS,
    payload: products
  }
};

export const deleteProductFailure = (error) => {
  return {
    type: counter.DELETE_PRODUCTS_FAILURE,
    error
  }
};

export const deleteProducts = (productsId) => {
  return(dispatch) => {
    dispatch(deleteProductRequest())
    axios.delete(`http://localhost:3000/api/v4/product/${productsId}`)
      .then((res) => {
        dispatch(deleteProductSuccess(res.data))
      })
      .catch((err) => {
        dispatch(deleteProductFailure(err.message))
      })
  }
};