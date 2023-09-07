import {createBrowserRouter} from "react-router-dom";
import { ROUTES } from "./constants";
import Layout from "./components/Layout/Layout";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

export const router = createBrowserRouter([{
  path: ROUTES.base,
  element: <Layout />,
  errorElement: <ErrorPage />
}])