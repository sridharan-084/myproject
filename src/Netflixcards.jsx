import react from 'react';
import './Netflixcards.css'
const cards = (prop) =>{

    return (<div className="container">
            <div>
            <img className="img"src={prop.image} alt=""></img>
            <p className="original">Netflix original series</p>
            <p className="title">{prop.title}</p>
            </div>
            <div >
                <a href={prop.link} target="__blank">
                <button className="BTN">Watch Now</button>
                </a>
            </div>          
        </div>
       );
}
export default cards;