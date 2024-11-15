import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ListSix = () => {
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=b')
        .then(response => response.json())
        .then((data) => {
            const mealsSliced = data.meals.slice(0, 6)
            setMeals(mealsSliced)
        })  
    }, [])


  return (
        <div className="six-list">
            <h3>6 recettes :</h3>
            { meals ? 
                meals.map((meal) => {
                    return <div key={meal.idMeal}>
                       <Link to={"/recipe-by-id/" + meal.idMeal}>
                            <h3>{meal.strMeal}</h3>
                            <div>
                                <img src={meal.strMealThumb} alt={meal.strMeal} />
                                <p>{meal.strInstructions}</p>
                            </div>
                        </Link>
                    </div>
            }) : <p>Chargement du repas...</p> }
        </div>
  )
}

export default ListSix