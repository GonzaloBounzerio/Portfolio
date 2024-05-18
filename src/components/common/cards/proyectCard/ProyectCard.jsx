
import "./ProyectCard.css"


const ProyectCard = () => {

    const textHover = document.getElementById("textHover")
    textHover.onmouseenter = () => {
        textHover.style.visibility="visible"
    }

  return (
    <>
        <div className="bodyProyectCard">
            <div className="detailProyectCard">
                <h2>Lorem ipsum</h2>
            </div>
            <div className="imgProyectCard">
                <a href="" target="_blank" >
                    <img src="https://res.cloudinary.com/duvugx7r9/image/upload/v1711671985/proyectoPortfolio/lataPepsi1_ru0uq6.jpg" alt=""/>
                </a>
            </div>
            <div className="divTextHover">
                <h4 id="textHover">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum
                veritatis id est libero enim vero, ipsam distinctio aspernatur velit
                maxime voluptas repudiandae numquam doloribus molestiae rerum placeat! Ab,
                asperiores quos?</h4>
            </div>
        </div>
    </>
  )
}

export default ProyectCard