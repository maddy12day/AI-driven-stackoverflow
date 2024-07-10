import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Body from './Pages/Body/Body.jsx';
import Question from './Pages/Body/Question.jsx';
import Login from './Pages/login-singUp/Login.jsx';
import { Provider } from 'react-redux';
import appStore from './Store/appStore.js';
import ProtectedRoute from './Routes/ProtectedRoute.jsx';
import Post from './Pages/Body/Post.jsx';
import PublicRoute from './Routes/PublicRoute.jsx';

function App() {
  const appRouter = createBrowserRouter([
    {
      element : <PublicRoute/>,
      children : [
        {
         path : '/',
         element : <Login/>
        }
      ]
    },
    {
      element: <ProtectedRoute/>,
      children : [
        {
          path : '/browse',
          element : <Body/>,
          children: [
            {
              index: true,
              element: <Question />,
            },
            {
              path: 'questions',
              element: <Question />,
            },
            {
              path : 'post',
              element : <Post/>
            }
          ],
        }
      ]
    }
  ]);

  return (
    <Provider store={appStore}>
    <div>
      <RouterProvider router={appRouter} />
    </div>
    </Provider>
  );
}

export default App;
