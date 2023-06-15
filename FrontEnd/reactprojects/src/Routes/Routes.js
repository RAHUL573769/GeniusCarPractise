import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage";
import Main from "../Pages/layouts/Main";
import Login from "../Pages/Login/Login";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <HomePage></HomePage> },
      { path: "/login", element: <Login> </Login> }
    ]
  }
]);
export default router;
