
import "./Navbar.css"
import { AiOutlineInstagram , AiOutlineBehance , AiOutlineMail  } from "react-icons/ai";


const Navbar = ({smoothScroll}) => {

  return (
    <>
      <div id="containerNavbar">
        <div className="visibleNavbar">
          <div className="navegationNavbar">
              <button className="btn" onClick={()=>smoothScroll("profilePageContainer")}>Sobre mí</button>
              <button className="btn" onClick={()=>smoothScroll("proyectPageContainer")}>Mis proyectos</button>
              <button className="btn" onClick={()=>smoothScroll("estudiosPageContainer")}>Mis estudios</button>
          </div>
          <div className="redesProfile">
              <a href="https://www.instagram.com/gonza_bounzerio/" target="_blank">
              <AiOutlineInstagram size={30} color="var(--negro)"/>
              </a>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=bounzeirog@gmail.com&su=SUBJECT" target="_blank">
              <AiOutlineMail size={30} color="var(--negro)" />
              </a>
              <a href="https://www.behance.net/" target="_blank">
              <AiOutlineBehance size={30} color="var(--negro)"/>
              </a>
          </div>
          <div className="fotoIcon">
            <img src="https://res.cloudinary.com/duvugx7r9/image/upload/v1711403348/proyectoPortfolio/perfil_w1mj73.jpg" alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar