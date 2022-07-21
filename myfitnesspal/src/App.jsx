import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import AllRoutes from './components/AllRoutes'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header/>
      <AllRoutes/>
      <Footer/>
    </div>
  )
}

export default App
