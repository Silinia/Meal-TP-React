import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const IngredientsList = () => {
    const [ingredientsList, setIngredientsList] = useState([]);

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
        .then(response => response.json())
        .then((data) => {
            setIngredientsList(data.meals)
        })  
    }, [])


  return (
        <div className="ingredients-list">
            <h3>Liste des ingrédients :</h3>
            <ul>
            { ingredientsList ? 
                ingredientsList.map((i) => {
                    const ing = (i.strIngredient).toLowerCase()
                    return <li key={i.idIngredient}>
                        <Link to={"/recipes-by-ingredient/" + ing}>{i.strIngredient}</Link>
                    </li>
            }) : <p>Chargement du repas...</p> }
            </ul>
        </div>
  )
}

export default IngredientsList