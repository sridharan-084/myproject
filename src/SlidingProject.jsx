import react , {useState}from 'react' 
import Form1 from './Form1'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {Spring} from 'react-spring/renderprops';
import { PinDropSharp } from '@material-ui/icons';

const SlidingProject = () =>{

  const[show , setShow] = useState(false)
  const[name , setName] = useState("ShowForm")



  return (
      <>
     <div>
     <button type="button" class="btn btn-danger btn-lg ml-5 mt-3" onClick={()=>{
         setShow(!show)
       
         if (show === false)
          setName("ShowForm") 
          else
          setName("HideForm")
     }}>{name}</button>
     </div>

     <Spring
     from={{marginLeft : show ?"0px" : "-500px",
           width : "30vw",
           height : "40vh",
           backgroundColor: "skyblue",
           marginTop : "9em"}}
     to={{marginLeft : show ? "-500px" : "0px",
          width : "30vw",
          height : "40vh",
          backgroundColor: "skyblue",
          marginTop : "9em"}}
     >
     {props => (
          <div style={props}>
          <div>
          <h2 className="ml-2 text-white">Yourname</h2>
          <input type="text" className="form-control ml-2 w-50 h-25" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
          </div>
  
          <div className="mt-3">
          <h2 className="ml-2 text-white">Your Password</h2>
          <input type="text" className="form-control ml-2 w-50 h-25" placeholder="yourpassword" aria-label="Username" aria-describedby="basic-addon1"/>
          </div>
          <button type="button" className="btn btn-outline-danger mt-4 ml-3">Submit</button>
       </div>
     )
     }



     </Spring>

    


  
   



      </>
  )

}

export default SlidingProject