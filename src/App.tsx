import './App.css'
import Header from './components/Header/Header'
import { Provider } from 'react-redux'
import { store } from './store'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './components/Home/Home-page'
import { Catalog } from './Catalog/Catalog'
import FooterPart from './components/Footer/Footer'
import Layout from './components/Layout/Layout'

const router = createBrowserRouter([
  {

    element: <Layout />,
    children: [
      {
        path: '/', element: <HomePage />
      }
    ]
  },

  {
    path: '/Catalog',
    element: <Catalog />
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
