import ProyectCard from "../../common/cards/proyectCard/ProyectCard"
import "./ProyectPage.css"

const ProyectPage = () => {
  return (
    <div className="containerProyects">
      <div className="subtitulo">
        Mis Proyectos...
      </div>
      <div className="containerCards">
        <ProyectCard/>
        <ProyectCard/>
        <ProyectCard/>
        <ProyectCard/>
        <ProyectCard/>
        <ProyectCard/>
        <ProyectCard/>
        <ProyectCard/>
      </div>
    </div>
  )
}

export default ProyectPage