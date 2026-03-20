import './App.css'
import { Routes, Route, NavLink } from 'react-router-dom'
import UserList from './UserList'

function App() {

  return (
    <div>
      <nav>
        <NavLink to="/">UserList</NavLink>
      </nav>

      <Routes>
        <Route path='/' element={<UserList />} />
      </Routes>
    </div>
  )
}

export default App
