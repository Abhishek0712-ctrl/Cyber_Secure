import { useRoutes } from "react-router-dom";

// Components
import Login from "../components/login/login";
import Home from "../components/home/home";

const Router = () => {
  const routes = useRoutes([
    {
      path: "/login",
      element: <Login />,
      children: [
        {
          path: ":email",
          element: <Login />,
        },
      ],
    },
    
    
    {
      path: "/",
      element: <Home />,
    },
    
  ]);
  return routes;
};

export default Router;
