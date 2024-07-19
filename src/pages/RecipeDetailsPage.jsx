import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const RecipesDetailsPage = () => {
  const { recipeId } = useParams()

  const [recipeDetails, setRecipeDetails] = useState({})

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/recipes/${recipeId}`)

        if (!response.status === 200) {
          throw new Error('response not ok')
        }

        const details = await response.json()

        setRecipeDetails(details)
      } catch (error) {
        console.log(error)
      }
    }

    fetchDetails()
  }, [])

  return (
    <>
      <h1>Details</h1>
      <p>title: {recipeDetails.title}</p>
      <p>difficulty: {recipeDetails.difficultyLevel}</p>
    </>
  )
}

export default RecipesDetailsPage
