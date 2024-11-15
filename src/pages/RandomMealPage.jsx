import { useEffect, useState } from "react"
import Footer from "../components/partials/Footer"
import Header from "../components/partials/Header"
import { Link } from "react-router-dom";

const RandomMealPage = () => {

    const [randomMeal, setRandomMeal] = useState(null);

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        .then(response => response.json())
        .then((data) => {
            setRandomMeal(data)
        })  
    }, [])



  return (
    <>
        <Header />
        <h2>Repas Aléatoire :</h2>
        <div>
            { randomMeal ? 
            randomMeal.meals.map((meal) => {
                return <div key={meal.idMeal}>
                    <Link to={"/recipe-by-id/" + meal.idMeal}>
                        <h3>{meal.strMeal}</h3>
                        <img src={meal.strMealThumb} alt={meal.strMeal} />
                        <p>{meal.strInstructions}</p>
                    </Link>
                </div>
            }) : <p>Chargement du repas...</p> }
        </div>
        <Footer />
    </>
  )
}

export default RandomMealPage