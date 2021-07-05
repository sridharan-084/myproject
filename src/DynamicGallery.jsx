import react from 'react' 
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; 
import './DynamicGallery.css'
//<img src="https://www.computerhope.com/jargon/r/random-dice.jpg" className="images"></img>
const DynamicGallery = () =>{
window.resizeTo(20000 , 20000)

return (
 <>
  <div className="imgcontainer bg-dark">
  
  
  </div>
  <div className="ml-5 mt-2 text-center">
     <button className="btn btn-primary">Add</button>
     <button className="btn btn-primary ml-2 ">remove</button>
  </div>
</>
)


}

export default  DynamicGallery