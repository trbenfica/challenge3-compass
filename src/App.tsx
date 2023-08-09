
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import BasePage from './pages/BasePage/BasePage';
import Home from './pages/Home/Home';

export default function App() {
  const router = createBrowserRouter([
    { path:'/login', element: <BasePage content='login'/> }, 
    { path:'/register', element: <BasePage content='register'/>},
    { path:'/home', element: <Home />},
    { path:'/restaurant/:slug', element: <Home />}
  ]);

  return (
    <RouterProvider router={router} />
  );

}
