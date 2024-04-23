
import "./ProyectCard.css"

const ProyectCard = () => {
  return (
    <>
        <div className="bodyProyectCard">
            <div className="detailProyectCard">
                <h2>Lorem ipsum</h2>
            </div>
            <div className="imgProyectCard">
                <img id="fotoFondo" src="https://res.cloudinary.com/duvugx7r9/image/upload/v1711672266/proyectoPortfolio/lataPepsi2_uggqd7.jpg"/>
                <img src="https://res.cloudinary.com/duvugx7r9/image/upload/v1711671985/proyectoPortfolio/lataPepsi1_ru0uq6.jpg" id="fotoHover"/>
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