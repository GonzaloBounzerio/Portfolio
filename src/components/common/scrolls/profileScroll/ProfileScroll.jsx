
import { GrNext , GrPrevious } from "react-icons/gr";

import "./ProfileScroll.css"

const ProfileScroll = ({mueveScroll , imagen}) => {


  return (
    <div id="divImagenesScroll"> 
      <div className="btnScroll" id="divBtnPrev">
        <GrPrevious size={30} color="white" id="btnPrev"
        onClick={ () => mueveScroll(-1)}/>
      </div>
      
      <div id="containerImagenesScroll">

        <img src={imagen} alt="" />

      </div>

      <div className="btnScroll" id="divBtnNext">
        <GrNext size={30} color="white" id="btnNext" onClick={ () => mueveScroll(1)}/>  
      </div>

    </div>
  )
}

export default ProfileScroll