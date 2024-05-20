

import "./ProfileScroll.css"

const ProfileScroll = ({mueveScroll , imagen}) => {


  return (
    <div id="divImagenesScroll" onLoad={mueveScroll()}> 
      
      <div id="containerImagenesScroll">

        <img src={imagen} alt="" />

      </div>

    </div>
  )
}

export default ProfileScroll