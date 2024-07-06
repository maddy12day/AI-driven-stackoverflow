import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Body from './Pages/Body/Body.jsx';
import Question from './Pages/Body/Question.jsx';
import Login from './Pages/login-singUp/Login.jsx';

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
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
