import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Landing from './pages/landing';
import AboutUs from './pages/aboutUs';
import Product from './pages/product';
import Contact from './pages/contact';



function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />,
    },
    {
      path: "/about-us",
      element: <AboutUs />,
    },
    {
      path: "/our-product",
      element: <Product/>,
    },
    {
      path: "/contact-us",
      element: <Contact/>,
    },
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
