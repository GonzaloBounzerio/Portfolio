

import "./ProfilePage.css"
import ProfileScrollContainer from "../../common/scrolls/profileScroll/ProfileScrollContainer";

const ProfilePage = () => {
  return (
    <div id="containerCardProfilePage">
        <div className="containerImgScrollProfile">
            <ProfileScrollContainer/>
        </div>
        <div className="datosProfile">
            <h2>Nombre y Apellido</h2>
            <h4>25 años</h4>
            <h4>Licenciada en Publicidad</h4>
        </div>
    </div>
  )
}

export default ProfilePage