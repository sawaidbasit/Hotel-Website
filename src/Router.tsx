import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Home/index';
import Layout from './components/Layout';
import About from './pages/About';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children:[{
      path:'/',
      element:<HomePage/>
    },
    {
      path:'about',
      element:<About/>
    }
    ]
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
