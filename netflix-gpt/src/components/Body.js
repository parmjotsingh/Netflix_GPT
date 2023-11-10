import Browse from "./Browse";
import Login from "./Login";
// import Browse from "./Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function Body() {
  const appRouter = createBrowserRouter([
    { path: "/", element: <Login /> },
    { path: "/browser", element: <Browse /> },
  ]);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default Body;