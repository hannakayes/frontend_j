/* {
    title: {
      type: String,
      required: [true, 'Title is required.'],
      trim: true,
    },
    createdBy: {
      type: Types.ObjectId,
      required: true,
      ref: 'User',
    },
    instructions: {
      type: [String],
      required: true,
    },
    ingredients: {
      type: [String],
      required: true,
    },
    difficultyLevel: {
      type: String,
      enum: ['Easy', 'Okay', 'Hard'],
      required: true,
    },
  } */

import { useContext, useState } from 'react'
import { SessionContext } from '../contexts/SessionContext'

const NewRecipePage = () => {
  const { fetchWithToken } = useContext(SessionContext)

  const [title, setTitle] = useState('')
  const [difficultyLevel, setDifficultyLevel] = useState('')

  const handleSubmit = async event => {
    event.preventDefault()
    const payload = { title, difficultyLevel }
    fetchWithToken('/recipes', 'POST', payload)
  }

  return (
    <>
      <h1>New recipe</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title
          <input value={title} onChange={event => setTitle(event.target.value)} />
        </label>

        <label>
          Difficulty Level
          <input
            value={difficultyLevel}
            onChange={event => setDifficultyLevel(event.target.value)}
          />
        </label>
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default NewRecipePage
