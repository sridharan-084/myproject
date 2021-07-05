import react from 'react'; 

const GettingBox = () =>{

return (
    <>
     <div className="container ">
        <div className="row">
            <div className="col-6 text-danger text-center "> word here </div>
            <div className="col-8 text-center mt-5 wh">timer here </div>
            <div className="col-8 text-center">
                <input type= "text"/>
                <button className="btn-primary ml-2 mt-5">Start</button>  
            </div>
        </div>
    </div>
    </>
)
}

export default GettingBox