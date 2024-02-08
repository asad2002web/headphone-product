import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import PageNotFound from "../shared/PageNotFound";
import Dashboard from "../layouts/Dashboard";
import PrivateRoute from "./PrivateRoute";




export const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <PageNotFound />,
        children: [
            {
                path: "/",
                element: <Home />
            }
        ]
    },
    {
        path: "dashboard",
        element: <PrivateRoute><Dashboard /></PrivateRoute>,
        children: [
            {
                path: "/dashboard",
                element: <h2>Dashboard2</h2>
            }
        ]
    }
])