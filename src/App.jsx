import './App.css'
import { Routes, Route, NavLink } from 'react-router-dom'
import UserList from './UserList'
import AddUser from './AddUser'

function App() {

  return (
    <div>
      <nav>
        <NavLink to="/">User List</NavLink>
        <NavLink to="/addUser">Add User</NavLink>
      </nav>

      <Routes>
        <Route path='/' element={<UserList />} />
        <Route path='/addUser' element={<AddUser />} />
      </Routes>
    </div>
  )
}

export default App
