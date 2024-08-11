import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {CounterCellsPage} from "../pages/CounterCellsPage/CounterCellsPage.jsx";
import {App} from "../App.jsx";
import {NotFoundPage} from "../pages/NotFoundPage.jsx";
import {LoginPage} from "../pages/Login/LoginPage.jsx";

export const Routers = () => {
    const router = createBrowserRouter(
        [
            {
                path: "/",
                element: <App/>,
                errorElement: <NotFoundPage/>,
                children: [
                    {
                        path: "/",
                        element: <LoginPage/>
                    },
                    {
                        path: "/counter-cells",
                        element: <CounterCellsPage/>
                    }
                ]
            }
        ]
    )

    return (
        <RouterProvider router={router}/>
    );
};
