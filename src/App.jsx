import './App.css';
import { createBrowserRouter, RouterProvider, BrowserRouter, Routes, Route } from 'react-router-dom';
import BasePage from './pages/BasePage/BasePage';
import Home from './pages/Home/Home';
import Restaurant from './pages/Restaurant/Restaurant';
import CartPage from './pages/CartPage/CartPage';
import LoginContext from './services/LoginContext';
import { useState } from 'react';
import { DishCardInterface } from './services/DishCardInterface';
// import { CardItemInterface } from './services/CartItemInterface';

const App = () => {
  const [userCart, setUserCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(userCart.length);

  const router = createBrowserRouter([
    { path:'/', element: <Home />},
    { path:'/login', element: <BasePage content='login'/> }, 
    { path:'/register', element: <BasePage content='register'/>},
    { path:'/restaurant/:slug', element: <Restaurant />},
    { path:'/cart', element: <CartPage />}
  ]);

  return (
    <LoginContext.Provider value={{userCart, setUserCart, totalPrice, setTotalPrice}}>
      <RouterProvider router={router}>
        {/* <Routes>
          <Route path="/" component={Home} />
          <Route path="/challenge3-compass/login" component={<BasePage content='login'/>} />
        </Routes> */}
      </RouterProvider>
    </LoginContext.Provider>
  );
}

export default App;
