import Header from "../Header/Header"
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