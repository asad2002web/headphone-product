import { RouterProvider } from "react-router-dom"
import { routes } from "./routes/Router"
import GoToTopBtn from "./components/GoToTopBtn"

function App() {

  return (
    <>
      <RouterProvider router={routes} />
      <GoToTopBtn />
    </>
  )
}

export default App
