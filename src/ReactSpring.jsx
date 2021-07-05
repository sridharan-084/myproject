import react , {useState} from 'react' 
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {useSpring, animated} from 'react-spring'
import One from './One.css'

const ReactSpring = () =>{

    const [toggle , setToggle] = useState(false)
    const [color , setColor] = useState("red");
    const [rotate , setRotate] = useState("rotateY(0)")
   // transition: "transform 0.8s"

    const changeColor = () =>{
       setToggle(!toggle)
          if (toggle == true){
              setRotate("rotateY(3.142rad)")
              setColor("red")
          }
          else{
              setRotate("rotateY(0)")
            setColor("blue")
          }
          console.log(rotate)
    }
    

return (
    <>
    <div class="flip-card">
    <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src="https://logoness.com/wp-content/uploads/2014/11/flip-side-logo.jpg" alt="Avatar" style={{width:"300px",height:"300px"}}/>
     </div>
     <div class="flip-card-back">
     <img src="https://www.andreasreiterer.at/wp-content/uploads/2017/11/react-logo-825x510.jpg" alt="Avatar" style={{width:"300px",height:"300px"}}/>
    </div>
  </div>
  </div>
 
    </> 

)



}

export default ReactSpring