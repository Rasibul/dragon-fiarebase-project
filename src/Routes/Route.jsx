import { createBrowserRouter } from "react-router-dom";
import Root from "../LayOut/Root";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Carrer from "../Pages/Carreer/Carrer";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import News from "../Pages/News/News";
import PrivateRoute from "./PrivateRoute";

const routes = createBrowserRouter ([
    {
        path : '/',
        element: <Root></Root>,
        children : [
            {
                path : '/',
                element:<Home></Home>,
                loader:() => fetch ('/news.json')
                
            },
            {
                path : '/about',
                element: <About></About>
            },
            {
                path : '/news/:id',
                element: <PrivateRoute><News></News></PrivateRoute>
            },
            {
                path: '/carrer',
                element : <Carrer></Carrer>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element : <Register></Register>
            }
        ]
    }
]);

export default routes ;
