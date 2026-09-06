//app.jsx code  


// import './App.css'
// import Card from './components/Card'

// // Array of objects containing firstName, lastName, and age properties. 
// const members = [
//   { firstName: "Golam", lastName: "Faruk", age: 34 },
//   { firstName: "Golam", lastName: "Kibria", age: 16 },
//   { firstName: "Hasina", lastName: "Akter", age: 42 },
//   { firstName: "Shadia", lastName: "Sultana", age: 27 },
//   { firstName: "Faiza", lastName: "Humaira", age: 4 }
// ] 
// function App() {

//   return <>
//   {/* <Card firstName="Golam" lastName="Faruk" age={34}/>
//   <Card firstName="Golam" lastName="Kibria" age={16}/>
//   <Card firstName="Hasina" lastName="Akter" age={42}/>
//   <Card firstName="Shadia" lastName="Sultana" age={27}/>
//   <Card firstName="Faiza" lastName="Humaira" age={4}/> */
  
//   }

//    { // Mapping through the members array and rendering a Card component for each member.
//   //  members.map((member) =>(
//   //   <Card firstName={member.firstName} lastName={member.lastName} age={member.age}  />


//   //filtering the members array to only include members with age greater than 20 and then mapping through the filtered array to render a Card component for each member.
//   // members.filter((member) => member.age > 20).sort((a, b) => a.age - b.age).map((member) =>(
//   //   <Card firstName={member.firstName} lastName={member.lastName} age={member.age}  />


//   //filter, sort, and map methods are used to filter the members array to only include members with age greater than 20, sort the filtered array by age in ascending order, and then map through the sorted array to render a Card component for each member.
//     members.filter((member) => member.age > 20).sort((a, b) => a.age - b.age).map((member) =>(
//     <Card firstName={member.firstName} lastName={member.lastName} age={member.age}  />
//    ))}
//   </>
// }

// export default App




//=================card.jsx code 
// import "./Card.css"

// // props is an object that contains all the properties passed to the component.
// //children is a special property of the props object that contains any child elements passed to the component.

// // export default function Card(props){
// //     return(
// //         <>
// //             <p> First Name: {props.firstName}</p>
// //             <p> Last Name: {props.lastName}</p>
// //             <p> Age: {props.age}</p>
// //         </>
// //     )
    
// // }

// // Destructuring props object to extract firstName, lastName, and age properties.
// // export default function Card({firstName, lastName, age, children}){
// //     return(
// //         <>
// //             <div className="card">
// //             {children}
// //             <p> First Name: {firstName}</p>
// //             <p> Last Name: {lastName}</p>
// //             <p> Age: {age}</p>
// //             </div>
// //         </>
// //     )
    
// // }

// //conditional rendering of children prop. If children prop is not passed, it will render "No children passed" message.
// // export default function Card({firstName, lastName, age}){
// //     if(age > 18){
// //         return <h1 className="card"> You are eligible to vote</h1>
// //     }
// //     return(
// //         <>
// //             <div className="card">
            
// //             <p> First Name: {firstName}</p>
// //             <p> Last Name: {lastName}</p>
// //             <p> Age: {age}</p>
// //             </div>
// //         </>
// //     )
    
// // }

// //short cercuit evaluation of children prop. If children prop is not passed, it will render "No children passed" message.
// // export default function Card({firstName, lastName, age}){
// //     return(
// //         <>
// //         {age> 18 && (<div className="card">
            
// //             <p> First Name: {firstName}</p>
// //             <p> Last Name: {lastName}</p>
// //             <p> Age: {age}</p>
// //             </div>)}
// //         {age <= 18 && (<div className="card">
                    
// //             <p> First Name: {firstName}</p>
// //             <p> Last Name: {lastName}</p>
// //             <p> Age: {age}</p>
// //             </div>)}
// //         </>
// //     )
    
// // }

// //ternary operator for conditional rendering of children prop. If children prop is not passed, it will render "No children passed" message.

// export default function Card({firstName, lastName, age}){
//     return(
//         <>
//         {age> 18 ? (<div className="card">
            
//             <p> First Name: {firstName}</p>
//             <p> Last Name: {lastName}</p>
//             <p> Age: {age}</p>
//             </div>) :
//          (<div className="card">
                    
//             <p> {firstName}  {lastName} , Age: {age}</p>
//             <p>you are not eligible to vote</p>
//             </div>)}
//         </>
//     )
    
// }
