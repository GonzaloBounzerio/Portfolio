import LoadingIcon from "../../loaders/LoadingIcon"
import ProfileScroll from "./ProfileScroll"
import { useEffect, useState } from "react"
import "./ProfileScroll.css"

const ProfileScrollContainer = () => {


  
  let arrayFotos = ["https://res.cloudinary.com/duvugx7r9/image/upload/v1713233930/proyectoPortfolio/pruebaScroll1_nzevhn.jpg",
  "https://res.cloudinary.com/duvugx7r9/image/upload/v1713233977/proyectoPortfolio/pruebaScroll4_slbs0a.jpg",
  "https://res.cloudinary.com/duvugx7r9/image/upload/v1713233934/proyectoPortfolio/pruebaScroll3_h4tf4u.jpg",
  "https://res.cloudinary.com/duvugx7r9/image/upload/v1713233930/proyectoPortfolio/pruebaScroll2_gt1wnd.jpg"]
  
  const [isLoading , setIsLoading] = useState(false)
  const [posScroll , setPosScroll] = useState(0)
  const [imagen , setImagen] = useState()

  useEffect( () => {
      setImagen(arrayFotos[posScroll])
  },[posScroll])


  const mueveScroll = () => {
    setTimeout( () => {
      if (posScroll < arrayFotos.length-1){
        setPosScroll(posScroll + 1)
      }else{
        setPosScroll(0)
      }
    },2500)
  }


  return (

    <div className="bodyProfileScroll">
      <ProfileScroll mueveScroll={mueveScroll} imagen={imagen}/>
    </div>


  )
}

export default ProfileScrollContainer