import React, { useState } from 'react';
import todolist from './todolist.css'
import AddIcon from '@material-ui/icons/Add';

const ToDoList = () =>{

    const [currItem , setcurrItem] = useState()

    const [Item , setItem] = useState([])


    const itemList = (event) =>{
        setcurrItem(event.target.value)
      
    }

    const work = (event) =>{

         setItem((prevValue) =>{

           return [...prevValue , currItem]
         });
         setcurrItem(' ');

    }
    const deleteItem =(event) =>{
         setItem((prevValue) =>{
            const currarray = [...prevValue];
            currarray.splice(event.target.id , 1);
            return currarray;
          })
    }

    return (
        <>
        <div className="container">
            <div className="contains">

                <h3 style={{textAlign:"center" , fontSize:"40px" , color:"white"}}>My FRIENDS</h3>

                <input type="text" name="" id="" onChange={itemList} value={currItem} className="inbox"/>
                
                <button onClick = {work} className="btn"><AddIcon></AddIcon></button><br></br>
                <h3 style={{textAlign:"center" , fontSize:"30px" ,color:"red"}}>Click on the friend to delete it</h3>

                <ol>
                   {Item.map((currVal , index)=>{
                       return <li onClick={deleteItem} id={index} className="list">{currVal}</li>;
                   })}
                </ol>
            </div>
        </div>
        </>
    );

}

export default ToDoList