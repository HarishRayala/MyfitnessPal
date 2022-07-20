import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import AllRoutes from './components/AllRoutes'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header/>
      <AllRoutes/>
    </div>
  )
}

export default App
