
import './App.css'
import Card from './components/Card'

function App() {
  const students = [
    { name: "Faruk", age: 34},
    { name: "Shadia", age: 28},
    { name: "Kibria", age: 37},
    { name: "Hasina", age: 41},
    { name: "Peruna", age: 31},
    { name: "Yeasmin", age: 26},
    { name: "Faiza", age: 4}
  ]
  return <>
   {
    students.map((student)=>(
      <Card  name={student.name} age={student.age}/>
    ))
   }
  </>
}

export default App
