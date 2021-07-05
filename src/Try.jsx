import react , {useState} from 'react' 
import {Spring} from 'react-spring/renderprops'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Try = () =>{
    const [toggle , setToggle] = useState(true)
    return(
        <>
         <Spring
        from ={{ width : toggle ?"40vw" : "70vw",
        height : "40vh",
        backgroundColor: "steelblue",   
        padding : "2rem" }}
        to = {{ width : toggle ?"70vw" : "40vw",
                height : "40vh",
                backgroundColor: "steelblue",   
                padding : "2rem" }}
        >
    
            {props => 
              
                   <div style={props}
                          >
                        <div>
                           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus atque quam quae esse repudiandae asperiores culpa quibusdam vel, sint impedit commodi corporis, accusamus nobis? Facere quod debitis obcaecati facilis molestiae.
                        </div>
                   </div>
              
                }
        </Spring> 
        <button className="btn-danger" onClick={()=>setToggle(!toggle)} style={{position:"fixed" , marginTop : "5em"}}>toggle</button>
        </>
    )
}

const design = {
    width : "40vw",
    height : "40vh",
    backgroundColor: "steelblue",
    padding : "2rem"
}

const designn = {
    marginTop:"1em",
    width : "40vw",
    height : "40vh",
    backgroundColor: "skyblue",
    padding : "2rem"
}





export default Try