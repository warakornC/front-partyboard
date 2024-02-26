import { ToastContainer,Slide } from "react-toastify"
import Router from "./routes"
import useAuth from "./hooks/useAuth"
import Spinner from "./components/Spinners"


function App() {
  const { iniTailLoading } = useAuth()
  if (iniTailLoading) return <Spinner />
  return (
    <>
    <Router />
    {/* <ToastContainer 
    position="bottom-right"
    autoClose={2500}
    theme="colored"
    transition={Slide}
    /> */}
    </>
  )
}

export default App
