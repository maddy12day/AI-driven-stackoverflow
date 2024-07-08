import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Body from './Pages/Body/Body.jsx';
import Question from './Pages/Body/Question.jsx';
import Login from './Pages/login-singUp/Login.jsx';
import { Provider } from 'react-redux';
import appStore from './Store/appStore.js';

function App() {
  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Login />,
    },
    {
      path: '/browse',
      element: <Body />,
      children: [
        {
          path: 'questions', 
          element: <Question />,
        },
      ],
    },
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
