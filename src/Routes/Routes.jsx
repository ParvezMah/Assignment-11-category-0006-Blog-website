import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import ErroPage from "../Pages/ErroPage";
import Home from "../Pages/Home/Home";



const router = createBrowserRouter([
        {
            path: "/",
            element: <MainLayout></MainLayout>,
            errorElement: <ErroPage></ErroPage>,
            children: [
                {
                    path: "/",
                    element: <Home></Home>
                }
            ]
        },
    ]);

export default router;