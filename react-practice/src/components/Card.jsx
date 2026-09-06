import "./Card.css"
// old code gulo DynamicRandaring.jsx file e rekha hoyeche. 
export default function Card({name, age}){
    return(
        <>
        <div className="card">
            <p> Name: {name}</p>
            <p> Age: {age}</p>                    
            </div>
        </>
    )
    
}