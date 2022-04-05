import './App.css'
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route exact path='/' element={<Login />}></Route>
          <Route exact path='/dashboard' element={<Dashboard />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
