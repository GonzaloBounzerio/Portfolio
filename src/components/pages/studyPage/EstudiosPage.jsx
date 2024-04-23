import StudyCard from "../../common/cards/studyCard/StudyCard"
import "./EstudiosPage.css"

const EstudiosPage = () => {
  return (
    <div className="containerStudyCardsPage">
      <div className="subtitulo">
        Mis Estudios...
      </div>
      <div className="containerStudyCard">
        <StudyCard/>
        <StudyCard/>
        <StudyCard/>
        <StudyCard/>
        <StudyCard/>
        <StudyCard/>
      </div>
    </div>
  )
}

export default EstudiosPage