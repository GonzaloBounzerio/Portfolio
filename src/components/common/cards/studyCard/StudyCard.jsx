
import { TiDownloadOutline } from "react-icons/ti";
import "./StudyCard.css"

const StudyCard = () => {
  return (
    <div className="cardBody">
        <div className="imgCard">
            <img src="https://res.cloudinary.com/duvugx7r9/image/upload/v1712364746/proyectoPortfolio/colegioLogo_cppaks.jpg"alt="logo" />
        </div>
        <div className="detailCard">
            <h2>Título</h2>
            <h3>Insituto</h3>
            <h3>2017-2019</h3>
        </div>
        <div className="linkFile">
            <a href="https://www.google.com.ar" target="_blank">
            <span>
            <TiDownloadOutline size={30} style={{color: "#000000"}}/>
            </span>
            </a>
        </div>
    </div>
  )
}

export default StudyCard