import FacialExpressions from "./components/FacialExpressions"
import MoodSongs from "./components/MoodSongs"
import { useState } from "react"
const App = () => {
   const [Songs, setSongs] = useState([])
  return (
    <div>
      <FacialExpressions setSongs={setSongs} />
       <MoodSongs Songs={Songs} />
    </div>
  )
}

export default App