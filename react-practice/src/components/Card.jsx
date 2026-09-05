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
export default function Card({firstName, lastName, age, children}){
    return(
        <>
            {children}
            <p> First Name: {firstName}</p>
            <p> Last Name: {lastName}</p>
            <p> Age: {age}</p>
        </>
    )
    
}