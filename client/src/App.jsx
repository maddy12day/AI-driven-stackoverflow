import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./Pages/Body/Body.jsx";
import Login from "./Pages/login-singUp/Login.jsx";
import ProtectedLayout from "./Routes/ProtectedLayout.jsx";
import Post from "./Pages/Post/Post.jsx";
function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedLayout authentication={false} >
          <Login />
        </ProtectedLayout>
      ),
    },
    {
      path: "/home",
      element: (
        <ProtectedLayout authentication >
          <Body />
        </ProtectedLayout>
      ),
      children: [
        {
          path: "post",
          element: <Post />
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
