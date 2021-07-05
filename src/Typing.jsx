import react, { useEffect, useState } from 'react' 
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import mi from './mi.css'
import GettingBox from './GettingBox'
import FinalBox from './FinalBox'



const Typing = () =>{

    const arr = ['names' , 'hridhark' , 'virat' , 'suman' , 'devanshu', 'clickhere' , 'iaminnocennt' , 'get']
    const [currTime , setCurrTime] = useState(5);
    const [word , setWord] = useState(arr[0]);
    const [input , setInput] = useState('');
    const [correctAns , setCorrectAns] = useState([])
    const [wrongAns , setWrongAns] = useState([]);
    const [count , setCount] = useState(0);
    // const [running , setRunnning ] = useState('false');
    var flag = 0;
    const start = () =>{
        setWord(arr[Math.floor(Math.random()*arr.length)]); 
    }
    const type = (event) =>{
        setInput(event.target.value);
    } 
    const check = (event) =>{
  
        if (event.which === 13){
            if (input === word){
                setCorrectAns((prevVal)=>{
                  return [...prevVal,input];
                })
                setCount(count+1);
                setInput('')
                start();
            }
            else{
                setWrongAns((prevVal)=>{
                    return [...prevVal , input];
                })
                setInput('')
                start();
            }
        }
    } 
   
   const updateTime = () =>{

   }
 
  

return (
    <>
    <div className="d-flex border border-black flex-row">

        <div className="container">
            <div className="row-6">
                <h2>{word}</h2>
            </div>
            <div className="row-6 mt-4">
                <div className="timer text-center pt-4"><span style={{fontSize:"30px"}}><strong>{currTime}</strong></span></div>
            </div>
            <div className="row-6 mt-4">
                <input type="text" name="" id="" value={input} onChange={type} onKeyPress={check}  />
                <button onClick = {updateTime} >start</button>
              
               
            </div>
        </div>

        <div className='container'>
            <div className="row-8 bg-primary">
              <h2>Correct Ans:{count} </h2>
            </div>
            <div className ="row-8 d-flex flex-row">
                <div className="col-4">
                    {correctAns.map((currVal , index)=>{
                        return <p>{currVal}</p>
                    })}
                </div>
                <div className="col-4">
                    {wrongAns.map((currVal , index)=>{
                        return <p>{currVal}</p>
                    })}
                </div>
            </div>
        </div>
    
    </div>
   
    </>
);

}
export default Typing