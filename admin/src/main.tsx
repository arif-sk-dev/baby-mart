// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Login from './pages/Login.tsx';
import RegisterPage from './pages/RegisterPage.tsx';
import DashboardPage from './pages/DashboardPage.tsx';

// Router
const router = createBrowserRouter([
  { path: "/login", element:<Login /> },
  { path: "/register", element:<RegisterPage /> },
  { path: "/", element:<App />,
    children: [
      {
        path: "/dashboard", element: <DashboardPage />
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
