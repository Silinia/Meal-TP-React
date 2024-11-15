import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import RandomMealPage from './pages/RandomMealPage'
import RecipesByIngredientPage from './pages/RecipesByIngredientPage'
import RecipesByCategoryPage from './pages/RecipesByCategoryPage'
import ShowRecipePage from './pages/ShowRecipePage'

function App() {
  

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/random-meal" element={<RandomMealPage/>} />
          <Route path="/recipes-by-ingredient/:ingredient" element={<RecipesByIngredientPage/>} />
          <Route path="/recipes-by-category/:category" element={<RecipesByCategoryPage/>} />
          <Route path="/recipe-by-id/:id" element={<ShowRecipePage/>} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
