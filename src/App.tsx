import './App.css'
import { Provider } from 'react-redux'
import { store } from './store'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './components/Home/Home-page'
import { Catalog } from './Catalog/Catalog'
import Layout from './components/Layout/Layout'
import ProductCart from './components/ProductCard/Productcard'
import Cart from './components/Cart/Cart'

const router = createBrowserRouter([
  {

    element: <Layout />,
    children: [
      {
        path: '/', element: <HomePage />
      },
      {
        path: '/Catalog',
        element: <Catalog />
      },
      {
        path:'/product/:id',
        element:<ProductCart/>
      },
      {
        path:'/cart',
        element:<Cart/>
      }
    ]
  }

 
])

function App() {

  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} ></RouterProvider>
      </Provider>
    </>
  )
}

export default App
