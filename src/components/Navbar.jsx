import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { SessionContext } from '../contexts/SessionContext'

const Navbar = () => {
  const { isAuthenticated, handleLogout } = useContext(SessionContext)

  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        {!isAuthenticated && (
          <>
            <li>
              <Link to='/signup'>Signup</Link>
            </li>
            <li>
              <Link to='/login'>Login</Link>
            </li>
          </>
        )}
        {isAuthenticated && (
          <li>
            <Link to='/profile'>Profile</Link>
          </li>
        )}
        <li>
          <Link to='/recipes'>All recipes</Link>
        </li>

        {isAuthenticated && (
          <>
            <li>
              <Link to='/recipes/new'>Add a new recipe</Link>
            </li>
            <li>
              <button type='button' onClick={handleLogout}>
                Logout
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  )
}

export default Navbar
