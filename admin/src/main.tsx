// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Login from './pages/Login.tsx';
import RegisterPage from './pages/RegisterPage.tsx';
import DashboardPage from './pages/DashboardPage.tsx';
import Account from './pages/Account.tsx';
import Users from './pages/Users.tsx';
import Orders from './pages/Orders.tsx';
import Invoices from './pages/Invoices.tsx';
import Banners from './pages/Banners.tsx';
import Products from './pages/Products.tsx';
import Categories from './pages/Categories.tsx';
import Brands from './pages/Brands.tsx';

// Router
const router = createBrowserRouter([
  { path: "/login", element:<Login /> },
  { path: "/register", element:<RegisterPage /> },
  { path: "/", element:<App />,
    children: [
      {
        path: "/dashboard", element: <DashboardPage />
      },
      {
        path: "/dashboard/account", element: <Account />
      },
      {
        path: "/dashboard/users", element: <Users />
      },
      {
        path: "/dashboard/orders", element: <Orders />
      },
      {
        path: "/dashboard/invoices", element: <Invoices />
      },
      {
        path: "/dashboard/banners", element: <Banners />
      },
      {
        path: "/dashboard/products", element: <Products />
      },
      {
        path: "/dashboard/categories", element: <Categories />
      },
      {
        path: "/dashboard/brands", element: <Brands />
      }
    ]
   }
]); 

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,
  <RouterProvider router={router} />
)
