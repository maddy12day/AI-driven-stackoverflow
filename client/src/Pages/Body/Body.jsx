import Header from "./components/Header"
import { Outlet } from "react-router"


const Body = () => {

  return (
    <div>
      <Header/>
      <Outlet />
    </div>
  )
}

export default Body