
import "./Navbar.css"

const Navbar = ({smoothScroll}) => {

  return (
    <>
      <div id="containerNavbar">
        <nav className="navegationNavbar">
          <ul>
            <button className="btn" onClick={()=>smoothScroll("profilePageContainer")}>Sobre mí</button>
            <button className="btn" onClick={()=>smoothScroll("proyectPageContainer")}>Mis proyectos</button>
            <button className="btn" onClick={()=>smoothScroll("estudiosPageContainer")}>Mis estudios</button>
          </ul>
        </nav>
        <div className="fotoIcon">
          <img src="https://res.cloudinary.com/duvugx7r9/image/upload/v1711403348/proyectoPortfolio/perfil_w1mj73.jpg" alt="" />
        </div>
      </div>
    </>
  )
}

export default Navbar