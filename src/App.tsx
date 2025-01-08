import { createBrowserRouter, RouterProvider } from 'react-router'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Location from './pages/Location'
import Dashboard from './pages/Dashboard'
import Courses from './pages/Dashboard/Courses'
import Reports from './pages/Dashboard/Reports'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/about',
    element: <About/>
  },
  {
    path: '/contact',
    element: <Contact/>
  },
  {
    path: '/dashboard',
    element: <Dashboard/>,
    children: [
      {
        path: 'courses',
        element: <Courses />
      },
      {
        path: 'reports',
        element: <Reports />
      },
    ]
  },
  {
    path: "/find-location/:id",
    element: <Location />
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
