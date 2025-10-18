import { createBrowserRouter } from "react-router";
import App from "../Pages/App";
import Installation from "../Pages/Installation";
import MainLayOut from "../LayOut/MainLayOut";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";
import AppDetails from "../Components/AppDetails";


const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayOut,
        children: [
            {
                index: true,
                Component: Home,
            },
            {
                path: "/app",
                Component: App,
            },
            {
                path: "/appDetails/:id",
                Component: AppDetails,
            },
            {
                path: '/installation',
                Component: Installation,
            }
        ]
    },
    {
        path: '*',
        Component: ErrorPage,
    }

])

export default router