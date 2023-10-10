import Signin from "./Auth/Signin";
import Dashboard from "./sidebarcomponents/dashboard/Dashboard";
import Profile from "./sidebarcomponents/usesrs/profile/Profile";
import AddNewUsers from "./sidebarcomponents/usesrs/add_new/AddNew";
import AllUsers from "./sidebarcomponents/usesrs/all_users/AllUsers";
import Protected from "./HOC/privateRoute";
import AddNewProduct from "./sidebarcomponents/products/add_new/AddNew";
import AllProducts from "./sidebarcomponents/products/all_products/AllProducts";
import Categories from "./sidebarcomponents/category";
import Orders from "./sidebarcomponents/orders/Orders";

export {
    AllProducts,
    AddNewProduct,
    Protected,
    Dashboard,
    Signin,
    Profile,
    AddNewUsers,
    AllUsers,
    Categories,
    Orders
}