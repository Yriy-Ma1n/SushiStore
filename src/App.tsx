import './App.css'
import Header from './components/Header/Header'
import { Provider } from 'react-redux'
import { store } from './store'
import { createBrowserRouter, RouterProvider } from 'react-router'
import HomePage from './components/Home/Home-page'
import { Catalog } from './Catalog/Catalog'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },

  {
    path: '/Catalog',
    element: <Catalog/>
  }
])

function App() {

  return (
    <>
      <Provider store={store}>
        <Header />
        <RouterProvider router={router} />
      </Provider>
    </>
  )
}

export default App
