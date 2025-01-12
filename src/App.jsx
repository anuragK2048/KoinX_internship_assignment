import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";
import Home from "./ui/Home";

function App() {
  const router = createBrowserRouter(
    [
      {
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
          {
            path: "/:coinID",
            element: <Home />,
          },
          {
            path: "/",
            element: <Navigate to="/bitcoin" />,
          },
        ],
      },
    ],
    {
      basename: "/",
    },
  );
  return <RouterProvider router={router} />;
}

export default App;
// TODO CORS error
