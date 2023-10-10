import React, { useEffect } from 'react'
import './App.css'
import { Profile, AddNewUsers, AllUsers, Dashboard, Protected, Signin, AddNewProduct, AllProducts, Categories, Orders } from "./componets";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { isUserLoggedIn } from './redux/action/adminAuth.action';
import { allUsersInfo } from './redux/action/getData.action';
import { getAllCategories } from './redux/action/category.action';
import { getAllProduct } from './redux/action/product.action';
import { getOrders } from './redux/action/order.action';

function App() {
  const Admin_Details = useSelector(state => state.adminAuth);
  const dispatch = useDispatch()
  useEffect(() => {
    if (!Admin_Details.authenticate) {
      dispatch(isUserLoggedIn());
    }
    dispatch(getAllCategories())
    dispatch(allUsersInfo());
    dispatch(getAllProduct());
    dispatch(getOrders());
  }, [])
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Protected />}>
            {/* Dashboard Route */}
            <Route exact path="/" element={<Dashboard />} name="dashboard" />

            {/* Dashboard Route */}
            <Route path="/profile" element={<Profile />} name="profile" />

            {/* Users Route */}
            <Route path="/user-new" element={<AddNewUsers />} name="addnewuser" />
            <Route path="/users" element={<AllUsers />} name="allusers" />

            {/* Producs Route */}
            <Route path="/product-new" element={<AddNewProduct />} name="addnewproduct" />
            <Route path="/products" element={<AllProducts />} name="allproducts" />

            {/* Category Route */}
            <Route path="/category" element={<Categories />} name="addnewcategory" />

            {/* Order manage Route */}
            <Route path="/orders" element={<Orders />} name="order-manage" />
          </Route>

          <Route path="/signin" element={<Signin />} name="signin" />
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
