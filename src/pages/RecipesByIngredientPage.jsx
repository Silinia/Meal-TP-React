import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../components/partials/Header";
import Footer from "../components/partials/Footer";

const RecipesByIngredientPage = () => {

    const [recipes, setRecipes] = useState([]);

    const ingredient = useParams().ingredient;
    console.log(ingredient)

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
        .then(response => response.json())
        .then((data) => {
            setRecipes(data.meals)
            console.log(data)
        })  
    }, [])


  return (
        <div>
            <Header />
            <h3>Recettes avec {ingredient} en ingrédient principal :</h3>
            { recipes ? 
                recipes.map((recipe) => {
                    return <div key={recipe.idMeal}>
                        <Link to={"/recipe-by-id/" + recipe.idMeal}>
                            <h3>{recipe.strMeal}</h3>
                            <img src={recipe.strMealThumb} alt={recipe.strMeal} />
                            <p>{recipe.strCategory}</p>
                        </Link>
                    </div>
            }) : <p>Chargement du repas...</p> }
            <Footer />
        </div>
  )
}

export default RecipesByIngredientPage