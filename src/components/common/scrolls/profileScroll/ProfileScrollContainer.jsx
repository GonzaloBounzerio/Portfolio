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
      setIsLoading(false)
  },[posScroll])

  const mueveScroll = (i) => {
    if ( i > 0 && posScroll < arrayFotos.length - 1){
      setTimeout( () => {
        setPosScroll( posScroll + 1)
      },500)
      setIsLoading(true)
    }else{
      if ( i < 0 && posScroll > 0){
      setTimeout( () => {
        setPosScroll( posScroll - 1)
      },500)
      setIsLoading(true)
      }
    }
  }


  return (

    <div className="bodyProfileScroll">
      {
        isLoading ? <LoadingIcon/> : <ProfileScroll mueveScroll={mueveScroll} imagen={imagen}/>
      }
    </div>


  )
}

export default ProfileScrollContainer