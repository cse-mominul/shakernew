import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Home from "../../Pages/Home/Home";
import Register from "../../Pages/Register/Register";
import ErrorPage from "../../Pages/ShearPages/ErrorPage/ErrorPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      { path: "/projects", element: <Register></Register> },
    ],
  },
]);
export default routes;
