import './App.css';
import { createBrowserRouter, RouterProvider, BrowserRouter, HashRouter, Routes, Route } from 'react-router-dom';
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

  // const router = createBrowserRouter([
  //   { path:'/challenge3-compass', element: <Home />},
  //   { path:'/challenge3-compass/login', element: <BasePage content='login'/> }, 
  //   { path:'/challenge3-compass/register', element: <BasePage content='register'/>},
  //   { path:'/challenge3-compass/restaurant/:slug', element: <Restaurant />},
  //   { path:'/challenge3-compass/cart', element: <CartPage />}
  // ]);

  return (
    <LoginContext.Provider value={{userCart, setUserCart, totalPrice, setTotalPrice}}>
      {/* <RouterProvider router={router} /> */}
      <HashRouter>
        <Routes>
          <Route path="/" component={Home} />
          <Route path="/challenge3-compass/login" component={<BasePage content='login'/>} />
        </Routes>
    </HashRouter>
    </LoginContext.Provider>
  );
}

export default App;
