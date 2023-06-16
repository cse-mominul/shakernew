import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Home from "../../Pages/Home/Home";
import Register from "../../Pages/Register/Register";
import ErrorPage from "../../Pages/ShearPages/ErrorPage/ErrorPage";
import CompanyListPage from "../../Pages/CompanyLIstPage/CompanyListPage";

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
    ],
  },
]);
export default routes;
