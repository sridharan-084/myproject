import react from 'react' 

const FinalBox = () =>{

return (
    <>
    <div className="container">
        <div className= "row justify-content-center">
            <div className="col bg-warning text-center">
                correct Ans :
            </div>
            </div>
       <div className="row justify-content-around">
            <div className="col-5 bg-secondary">
               <ol>
                   <li>my name </li>
                   <li>my name </li>
                   <li>my name </li>
                   <li>my name </li>
               </ol>
            </div>
           <div className="col-5 bg-primary">
           <ol>
                   <li>my name </li>
                   <li>my name </li>
                   <li>my name </li>
                   <li>my name </li>
               </ol>
          </div>
        </div>
           
        </div>
   
    </>
);




}

export default FinalBox

