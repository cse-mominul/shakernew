import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Home from "../../Pages/Home/Home";
import Register from "../../Pages/Register/Register";
import ErrorPage from "../../Pages/ShearPages/ErrorPage/ErrorPage";
import CompanyListPage from "../../Pages/CompanyLIstPage/CompanyListPage";
import Login from "../../Pages/Login/Login";

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
      { path: "/companies", element: <CompanyListPage></CompanyListPage> },
      { path: "/login", element: <Login></Login> },
    ],
  },
]);
export default routes;
