import './App.css'
import { Routes, Route, NavLink } from 'react-router-dom'
import UserList from './UserList'
import AddUser from './AddUser'
import EditUser from './EditUser'

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
        <Route path='/editUser/:id' element={<EditUser />} />
      </Routes>
    </div>
  )
}

export default App
