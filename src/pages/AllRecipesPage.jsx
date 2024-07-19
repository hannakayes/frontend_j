import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const AllRecipesPage = () => {
  const [recipes, setRecipes] = useState([])

  const getAllRecipes = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/recipes`)
      if (response.ok) {
        const recipesData = await response.json()
        setRecipes(recipesData)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getAllRecipes()
  }, [])

  return (
    <>
      <h1>All recipes</h1>
      <ul>
        {recipes.map(recipe => (
          <li key={recipe._id}>
            <Link to={`/recipes/${recipe._id}`}>{recipe.title}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default AllRecipesPage
