
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import BasePage from './pages/BasePage/BasePage';
import Home from './pages/Home/Home';
import Restaurant from './pages/Restaurant/Restaurant';

export default function App() {
  const router = createBrowserRouter([
    { path:'/', element: <Home />},
    { path:'/login', element: <BasePage content='login'/> }, 
    { path:'/register', element: <BasePage content='register'/>},
    { path:'/restaurant/:slug', element: <Restaurant />}
  ]);

  return (
    <RouterProvider router={router} />
  );

}
