import React, { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import mi from './mi.css'
  
const Mi = () =>{

     const [booksmarks , setBookmarks] = useState([
         {
             title : "",
             id : 0,
             link : "",
             date : "",
         }
     ]);

   const[Name , setName] = useState();

   const[currLink , setcurrLink] = useState();

   const[count , setCount] = useState(1);


   const urlname=(event)=>{
   
   setName(event.target.value)  

   }
   const urllink =(event) => {
    
    setcurrLink(event.target.value)
 
   }
  const add = () =>{
   
    setCount((prevVal)=>{
     return (prevVal+1)
    })
  
    setBookmarks((prevValue)=>{
    return [...prevValue , {
        title : Name,
        id : count ,
        link : currLink,
        date : new Date().toLocaleDateString()
    }]
    }
    )

  }

  const deletebookmark = (event) =>{

  let indec = event.target.id
   console.log(indec)
    setBookmarks((prev)=>{

        let currarr = [...prev]
        currarr.splice(indec , 1);
        return currarr
    })
  }

    return (
        <>
         <div className="p-4 border border-warning w-25 h-75  bg-light mt-5 border-0 rounded contain shadow">  
         <h2 className="text-center text-dark">BookMark</h2>
         <h4  className="text-dark">Url</h4>
         <input type="text" class="form-control" onChange={urlname} value={Name} placeholder="url" aria-label="Recipient's username" aria-describedby="basic-addon2">
         </input><br></br>
         <h4 className="text-dark">Link</h4>
         <input type="text" class="form-control" onChange={urllink} value={currLink} placeholder="link" aria-label="Recipient's username" aria-describedby="basic-addon2">
    
         </input>
         <button type="submit" class="btn btn-outline-primary mt-3  btnin " onClick={add}>Submit</button>
         </div> 
 

         {booksmarks.map((currVal , index)=>{
             if (index !== 0){
           return (
            <div className="mt-3 contains rounded w-25 bg-white shadow">
            <h2 className=" text-dark ml-2">{booksmarks[index].title}</h2>
            <h4 className=" text-dark ml-2">Added On -<span className="text-center text-dark">{booksmarks[index].date}</span></h4>
            <a href={booksmarks[index].link} target="__blank"><button type="button" class="btn btn-success mt-2 ml-lg-3">View</button></a>
            <button type="button" onClick={deletebookmark} id={booksmarks[index].id} class="btn btn-danger mt-2">Delete</button>
            </div>)
             }
         })
         } 
        



        </>

    );

}

export default Mi