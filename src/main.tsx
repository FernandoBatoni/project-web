import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/main.less'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './routes/root'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
