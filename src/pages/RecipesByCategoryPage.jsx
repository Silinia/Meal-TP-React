import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../components/partials/Header";
import Footer from "../components/partials/Footer";

const RecipesByCategoryPage = () => {

    const [recipes, setRecipes] = useState([]);

    const category = useParams().category;

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
        .then(response => response.json())
        .then((data) => {
            setRecipes(data.meals)
        })  
    }, [] )


  return (
        <div>
            <Header />
            <h3>Recettes de catégorie {category}:</h3>
            <ul className="category-list">
            { recipes ? 
                recipes.map((recipe) => {
                    return <li key={recipe.idMeal}>
                        <Link to={"/recipe-by-id/" + recipe.idMeal}>
                            <h3>{recipe.strMeal}</h3>
                            <img src={recipe.strMealThumb} alt={recipe.strMeal} />
                        </Link>
                    </li>
            }) : <p>Chargement du repas...</p> }
            </ul>
            <Footer />
        </div>
  )
}

export default RecipesByCategoryPage