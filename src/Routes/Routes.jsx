import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import AllProduct from "../Components/AllProduct/AllProduct";
import AddProduct from "../Components/AddProduct/AddProduct";
import EditProduct from "../Components/EditProduct/EditProduct";

export const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/allProduct",
                element: <AllProduct></AllProduct>
            },
            {
                path: "/addProduct",
                element: <AddProduct></AddProduct>
            },
            {
                path: "/edit/:id",
                element: <EditProduct></EditProduct>
            }
        ]
    }
])