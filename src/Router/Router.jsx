import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../component/Layout/Main";
import Home from "../component/Home/Home/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
	children: [
		{
			path: "/",
			element: <Home></Home>
		}
	]
  },
]);