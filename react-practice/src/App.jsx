
import './App.css'
import Card from './components/Card'

function App() {


  return <Card firstName="Golam" lastName="Faruk" age={34}> 
    <div>
      <h1> Welcome My Friends</h1>
      <p> How are you?</p>
    </div>
  </Card>
}

export default App
