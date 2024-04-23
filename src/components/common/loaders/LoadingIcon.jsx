import { DotLoader } from "react-spinners"
import "./LoadingIcon.css"


const LoadingIcon = () => {
  return (
    <div className="containerLoadingIcon">
        <DotLoader size={300} color="#ff0a6c80"/>
    </div>
  )
}

export default LoadingIcon