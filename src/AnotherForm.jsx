import react, { useState } from 'react';
import Anothercs from './AnotherCs.css'

const AnotherForm = () =>{
   
 
    const [currname , finalName] = useState();
    const [currpass , finalPass] = useState();
    const [clater , claterr] = useState();
    const [cafter , cafterr] = useState();

    const userName = (event) =>{
     finalName(event.target.value)

    }

    const password = (event) =>{
    finalPass(event.target.value)

    }

   const finalAns = (event) =>{
    event.preventDefault();
    claterr(currname);
    cafterr(currpass);
   }


    return(
    <>
    <div className="container">
     <h1>HII {clater} {cafter}</h1>
      <form onSubmit={finalAns}>
       <input type="text" placeholder='enter something' className="inputbox" onChange={userName}
       value ={currname}/><br>
       </br>
        <input type="text" placeholder="your password" className="inputbox" onChange = {password} value={currpass}/><br>
       </br> 
       <button  className = "btn" type="submit">Submit 👍</button>
      </form>
      </div>
    </>
    );




} 
export default AnotherForm