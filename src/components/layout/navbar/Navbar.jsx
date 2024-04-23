
import "./Navbar.css"

const Navbar = () => {

  return (
    <>
      <div id="containerNavbar">
        <nav className="navegationNavbar">
          <ul>
            <button className="btn">Sobre mí</button>
            <button className="btn">Mis proyectos</button>
            <button className="btn">Mis estudios</button>
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