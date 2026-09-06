
import './App.css'
import Card from './components/Card'

// Array of objects containing firstName, lastName, and age properties. 
const members = [
  { firstName: "Golam", lastName: "Faruk", age: 34 },
  { firstName: "Golam", lastName: "Kibria", age: 16 },
  { firstName: "Hasina", lastName: "Akter", age: 42 },
  { firstName: "Shadia", lastName: "Sultana", age: 27 },
  { firstName: "Faiza", lastName: "Humaira", age: 4 }
] 
function App() {

  return <>
  {/* <Card firstName="Golam" lastName="Faruk" age={34}/>
  <Card firstName="Golam" lastName="Kibria" age={16}/>
  <Card firstName="Hasina" lastName="Akter" age={42}/>
  <Card firstName="Shadia" lastName="Sultana" age={27}/>
  <Card firstName="Faiza" lastName="Humaira" age={4}/> */
  
  }

   { // Mapping through the members array and rendering a Card component for each member.
  //  members.map((member) =>(
  //   <Card firstName={member.firstName} lastName={member.lastName} age={member.age}  />


  //filtering the members array to only include members with age greater than 20 and then mapping through the filtered array to render a Card component for each member.
  // members.filter((member) => member.age > 20).sort((a, b) => a.age - b.age).map((member) =>(
  //   <Card firstName={member.firstName} lastName={member.lastName} age={member.age}  />


  //filter, sort, and map methods are used to filter the members array to only include members with age greater than 20, sort the filtered array by age in ascending order, and then map through the sorted array to render a Card component for each member.
    members.filter((member) => member.age > 20).sort((a, b) => a.age - b.age).map((member) =>(
    <Card firstName={member.firstName} lastName={member.lastName} age={member.age}  />
   ))}
  </>
}

export default App
