import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/partials/Header";
import Footer from "../components/partials/Footer";

const ShowRecipePage = () => {

    const [meal, setMeal] = useState(null);

    const id = useParams().id;

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then(response => response.json())
        .then((data) => {
            setMeal(data.meals)
            console.log(data)
        })  
    }, [])



  return (
    <>
        <Header />
        <div>
            { meal ? 
            meal.map((meal) => {
                return <div key={meal.idMeal}>
                    <h2>{meal.strMeal}</h2>
                    <img src={meal.strMealThumb} alt={meal.strMeal} />
                    <ul>
                        <li>Origin: {meal.strArea} </li>
                        <li>Catégory: {meal.strCategory}</li>
                    </ul>
                    <p>{meal.strInstructions}</p>
                </div>
            }) : <p>Chargement du repas...</p> }
        </div>
        <Footer />
    </>
  )
}

export default ShowRecipePage