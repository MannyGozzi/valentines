import './App.css'
import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Valentine from './pages/Valentine'


function App() {

  return (
    <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/valentine' element={<Valentine/>}/>
    </Routes>
     
  )
}

export default App
