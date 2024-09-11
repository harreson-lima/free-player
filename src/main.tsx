import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import App from './App.tsx'
import './index.css'
import ErrorPage from './pages/ErrorPage.tsx'
import Platforms from './pages/Platforms.tsx'

const router = createBrowserRouter([{
  path: '/',
  element: <App/>,
  errorElement: <ErrorPage />,
  children: [{
    path: 'platforms',
    element: <Platforms/>
  }]
}])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)