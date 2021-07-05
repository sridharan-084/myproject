import react, { useState } from 'react';

const Show = () =>{

  const [showname , updatename] = useState();
  const [currname , finalname] = useState();

   const getName = (event) =>{
   
    updatename(event.target.value)

   }
   const getTheAns = () =>{
       finalname(showname);
   }
   

    return (
    <>
     <h1>From {currname}</h1>
     <input type="text" placeholder="write something "
     onChange = {getName}/>
     <button onClick = {getTheAns}>Click name</button>
    </>
    );
}

export default Show