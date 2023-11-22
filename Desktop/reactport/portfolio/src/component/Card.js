import "../css/Card.css";
function Card({Skills}) {
    console.log(Skills.h);
    return (
        <>
             
             <div className="card">
            <h1>{Skills.h}</h1>
            <img className="images" src={Skills.i}></img>
            
            <p>{Skills.p}</p>
            </div>
        
        </>
    )
}
export default Card;