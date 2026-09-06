import "./Card.css"

// props is an object that contains all the properties passed to the component.
//children is a special property of the props object that contains any child elements passed to the component.

// export default function Card(props){
//     return(
//         <>
//             <p> First Name: {props.firstName}</p>
//             <p> Last Name: {props.lastName}</p>
//             <p> Age: {props.age}</p>
//         </>
//     )
    
// }

// Destructuring props object to extract firstName, lastName, and age properties.
// export default function Card({firstName, lastName, age, children}){
//     return(
//         <>
//             <div className="card">
//             {children}
//             <p> First Name: {firstName}</p>
//             <p> Last Name: {lastName}</p>
//             <p> Age: {age}</p>
//             </div>
//         </>
//     )
    
// }

//conditional rendering of children prop. If children prop is not passed, it will render "No children passed" message.
// export default function Card({firstName, lastName, age}){
//     if(age > 18){
//         return <h1 className="card"> You are eligible to vote</h1>
//     }
//     return(
//         <>
//             <div className="card">
            
//             <p> First Name: {firstName}</p>
//             <p> Last Name: {lastName}</p>
//             <p> Age: {age}</p>
//             </div>
//         </>
//     )
    
// }

//short cercuit evaluation of children prop. If children prop is not passed, it will render "No children passed" message.
// export default function Card({firstName, lastName, age}){
//     return(
//         <>
//         {age> 18 && (<div className="card">
            
//             <p> First Name: {firstName}</p>
//             <p> Last Name: {lastName}</p>
//             <p> Age: {age}</p>
//             </div>)}
//         {age <= 18 && (<div className="card">
                    
//             <p> First Name: {firstName}</p>
//             <p> Last Name: {lastName}</p>
//             <p> Age: {age}</p>
//             </div>)}
//         </>
//     )
    
// }

//ternary operator for conditional rendering of children prop. If children prop is not passed, it will render "No children passed" message.

export default function Card({firstName, lastName, age}){
    return(
        <>
        {age> 18 ? (<div className="card">
            
            <p> First Name: {firstName}</p>
            <p> Last Name: {lastName}</p>
            <p> Age: {age}</p>
            </div>) :
         (<div className="card">
                    
            <p> {firstName}  {lastName} , Age: {age}</p>
            <p>you are not eligible to vote</p>
            </div>)}
        </>
    )
    
}