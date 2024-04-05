import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello world!</div>,
      errorElement: <div>ErrorPage </div>
    }
  ])

  return <RouterProvider router={router} />
}

export default App
