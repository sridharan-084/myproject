import react, { useState } from 'react';

const UseObject = () =>{

    const [fullname , setName] = useState({
        firstname : '',
        lastname : ''
    })
   const findOut = (event) =>{
   
    setName( (prevValue) => {
  
        if (event.target.name === "startingname"){
             return {
                 firstname : event.target.value,
                 lastname : prevValue.lastname
             }
        }
       if (event.target.name === "endingname"){
        return{
            firstname : prevValue.firstname,
            lastname : event.target.value
       }
       }
    } );


   };

return (
  <>
  <form>
  <h1>your name {fullname.firstname} </h1><br></br>
  <input type = "text" name="startingname" onChange={findOut} value={fullname.firstname} /><br></br>
  <h2>your last name is {fullname.lastname}</h2><br></br>
  <input type = "text" name="endingname" onChange={findOut} value={fullname.lastname} />
  </form>
  </>
);
}
export default UseObject