
import "./Layout.css"
import ProfilePageContainer from "../pages/profilePage/ProfilePageContainer"
import ProyectPageContainer from "../pages/proyectsPage/ProyectPageContainer"
import Navbar from "./navbar/Navbar"
import EstudiosPageContainer from "../pages/studyPage/EstudiosPageContainer"

const LayoutContainer = () => {
  return (
    <div id="bodyApp">
      <div id="navbarContainer">
        <Navbar/>
      </div>
      <div id="profilePageContainer">
        <ProfilePageContainer/>
      </div>
      <div id="proyectPageContainer">
        <ProyectPageContainer/>
      </div>
      <div id="estudiosPageContainer">
        <EstudiosPageContainer/>
      </div>
    </div>
  )
}

export default LayoutContainer