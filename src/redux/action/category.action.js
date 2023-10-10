import { categoryConstants } from './constants'
import axios from "../../helper/axios";


// ---------------Find All Category----------------
export const getAllCategories = () => {
  return async (dispatch) => {
    dispatch({
      type: categoryConstants.GET_ALL_CATEGORY_REQUEST,
    });
    await axios.get('/category/get-category').then(function (response) {
      dispatch({
        type: categoryConstants.GET_ALL_CATEGORY_SUCCESS,
        payload: {
          message: response.data.message,
          categories: response.data.categoryList
        }
      })
    }).catch(function (error) {
      dispatch({
        type: categoryConstants.GET_ALL_CATEGORY_FAILURE,
        payload: {
          error: "Data not found!",
        }
      })
    })
  }
}

// ---------------Add New Category----------------
export const addCategory = (formData) => {
  return async (dispatch) => {
    dispatch({
      type: categoryConstants.ADD_CATEGORY_REQUEST
    });
    await axios.post('/category/create-category', formData
    ).then(function (response) {
      dispatch({
        type: categoryConstants.ADD_CATEGORY_SUCCESS,
        payload: {
          message: response.data.message,
          category: response.data.category,
        }
      })
      dispatch(getAllCategories())

    }).catch(function (error) {
      dispatch({
        type: categoryConstants.ADD_CATEGORY_FAILURE,
        payload: {
          error: error.response.data.error,
        }
      })
    })
  }
}

// ---------------Update Category----------------

export const updatetdCategory = (formData) => {
  return async (dispatch) => {
    dispatch({
      type: categoryConstants.UPDATE_CATEGORY_REQUEST
    });
    await axios.post('/category/updateCategory', formData
    ).then(function (response) {
      dispatch({
        type: categoryConstants.UPDATE_CATEGORY_SUCCESS,
        message:response.data.message,
      });
      dispatch(getAllCategories())
    }).catch(function (error) {
      dispatch({
        type: categoryConstants.UPDATE_CATEGORY_FAILURE,
        payload: {
          error: error.message,
        }
      });
    })
  }
}

// ---------------Delete Category----------------

export const deleteCategoriesByCheckedExpanded = (ids) => {
  return async (dispatch) => {
    dispatch({
      type: categoryConstants.DELETE_CATEGORY_REQUEST
    });
    await axios.post('/category/deleteCategory', { payload: ids }
    ).then(function (response) {
      console.log(response);
      // dispatch({
      //   type: categoryConstants.DELETE_CATEGORY_SUCCESS
      // });
      // dispatch(getAllCategories())
    }).catch(function (error) {
      console.log(error);
      // dispatch({
      //   type: categoryConstants.DELETE_CATEGORY_FAILURE,
      //   payload: {
      //     error: 'Something went wrong!!!!!',
      //   }
      // });

    })
  }
}