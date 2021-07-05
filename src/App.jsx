import react, { useState } from 'react';

const APP = () =>{
  
    let time = new Date().toLocaleTimeString();
    let [currTime , setTime] = useState(time);
    const updateTime = () =>{
      
        setTime(new Date().toLocaleTimeString());
     }
  return ( <div className = "elements">
  <p>{currTime}</p>
  <button className="btn" onClick={updateTime}>GET TIME</button>
</div>  );

}
export default APP