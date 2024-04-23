
import { AiOutlineInstagram , AiOutlineBehance , AiOutlineMail  } from "react-icons/ai";

import "./ProfilePage.css"
import ProfileScrollContainer from "../../common/scrolls/profileScroll/ProfileScrollContainer";

const ProfilePage = () => {
  return (
    <div className="containerCardProfilePage">
        <div className="containerImgScrollProfile">
            <ProfileScrollContainer/>
        </div>
        <div className="tarjetaDataProfile">
            <div className="datosProfile">
                <h2>Nombre y Apellido</h2>
                <h4>25 años</h4>
                <h4>Licenciada en Publicidad</h4>
            </div>
            <div className="redesProfile">
                <a href="https://www.instagram.com/gonza_bounzerio/" target="_blank">
                <AiOutlineInstagram size={20} color="black"/>
                </a>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=bounzeirog@gmail.com&su=SUBJECT" target="_blank">
                <AiOutlineMail size={20} color="black"/>
                </a>
                <a href="https://www.behance.net/" target="_blank">
                <AiOutlineBehance size={20} color="black"/>
                </a>
            </div>
        </div>
    </div>
  )
}

export default ProfilePage