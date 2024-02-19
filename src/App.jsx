import { Route, Routes } from 'react-router-dom'
import './App.css'
import Element from './component/Element/Element'
import Home from './component/Home'
import About from './component/About/About'

function App() {

  return (
    <>
      <Routes>
        <Route  path="/" element={<Element />} >
        <Route  path="/" element={<Home />} /> 
        <Route  path="/about" element={<About />} /> 
        </Route>
      </Routes>
    </>
  )
}

export default App
