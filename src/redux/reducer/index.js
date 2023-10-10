import { combineReducers } from 'redux'
import productReducer from './product.reducer'
import cartReducer from './cart.reducer'
import adminAuthReducer from './adminAuth.reducer'
import createAdminUser from './createAdmin.reducer'
import fatchData from './getData.reducer'
import categoryReducer from './category.reducer'
import createProductReducer from './createProduct.reducer'
import createCategoryReducer from './createCategory.reducer'
import orderReducer from './order.reducer'
const rootReducer = combineReducers({
    category : categoryReducer,
    product: productReducer,
    adminAuth: adminAuthReducer,
    newAdminUser: createAdminUser,
    addProduct: createProductReducer,
    addCategory: createCategoryReducer,
    cart: cartReducer,
    fatchDatas: fatchData,
    order : orderReducer,
})
export default rootReducer