import "../css/Card.css";
function Card({Skills}) {
    console.log(Skills.h);
    return (
        <>
        <div className="card">
            <h2>{Skills.h}</h2>
            <p>{Skills.p}</p>
        </div>
        </>
    )
}
export default Card;