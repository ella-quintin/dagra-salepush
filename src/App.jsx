import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      <ToastContainer 
        position="top-right" 
        autoClose={3000} 
        hideProgressBar={false} 
        newestOnTop={true} 
        closeOnClick 
        rtl={false} 
        pauseOnFocusLoss 
        draggable 
        pauseOnHover 
        theme="light" 
      />
    </>
  )
}

export default App
