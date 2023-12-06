
import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Create from './Sites/create/Create'
import Employeelist from './Sites/Employeelist/Employeelist'
import Login from './Sites/login/Login'


function App() {
  return (

    <Routes>
      <Route path='/' element={<Navigate to="/Login" />} />
      <Route path='/Login' element={<Login />} />
      <Route path='/Create' element={<Create />} />
      <Route path='/Employeelist' element={<Employeelist />} />
    </Routes>

  )
}

export default App


