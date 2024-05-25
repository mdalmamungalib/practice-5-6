import { RouterProvider } from "react-router-dom"
import { Routes } from "./Routes/Routes"
import { Toaster } from "react-hot-toast";

function App() {

  return (
    <div>
      <RouterProvider router={Routes}></RouterProvider>
      <Toaster></Toaster>
    </div>
  )
}

export default App;
