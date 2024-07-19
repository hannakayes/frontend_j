import { Route, Routes } from 'react-router-dom'
import SignupPage from './pages/SignupPage'
import Navbar from './components/Navbar'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'
import PrivateRoute from './components/PrivateRoute'
import AllRecipesPage from './pages/AllRecipesPage'
import RecipesDetailsPage from './pages/RecipeDetailsPage'
import NewRecipePage from './pages/NewRecipePage'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<h1>Home page</h1>} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route
          path='/profile'
          element={
            <PrivateRoute>
              <ProfilePage />
            </PrivateRoute>
          }
        />
        <Route path='/recipes' element={<AllRecipesPage />} />
        <Route path='/recipes/:recipeId' element={<RecipesDetailsPage />} />
        <Route
          path='/recipes/new'
          element={
            <PrivateRoute>
              <NewRecipePage />
            </PrivateRoute>
          }
        />

        <Route path='*' element={<h1>404 page</h1>} />
      </Routes>
    </>
  )
}

export default App
