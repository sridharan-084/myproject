import react from 'react' 

const Form1 = (props) =>{

    return (<>

      <div style={props.Style}>
        <div>
        <h2 className="ml-2 text-white">Yourname</h2>
        <input type="text" className="form-control ml-2 w-50 h-25" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
        </div>

        <div className="mt-3">
        <h2 className="ml-2 text-white">Your Password</h2>
        <input type="text" className="form-control ml-2 w-50 h-25" placeholder="yourpassword" aria-label="Username" aria-describedby="basic-addon1"/>
        </div>
        <button type="button" className="btn btn-outline-danger mt-4 ml-3">Submit</button>
     </div>
  

    </>)




}
 const design = {
     width : "30vw",
     height : "40vh",
     backgroundColor: "skyblue",
     marginTop : "9em"
 }
export default Form1