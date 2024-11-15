import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CategoriesList = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then(response => response.json())
        .then((data) => {
            setCategories(data.categories)
            console.log(data)
        })  
    }, [])


  return (
        <div>
            <h3>Liste des catégories :</h3>
            <ul>
            { categories ? 
                categories.map((cat) => {
                    const catName = (cat.strCategory).toLowerCase()
                    return <li key={cat.idCategory}>
                        <Link to={"/recipes-by-category/" + catName}>
                            <h3>{cat.strCategory}</h3>
                            <img src={cat.strCategoryThumb} alt={cat.strCategory} />
                            <p>{cat.strCategoryDescription}</p>
                        </Link>
                    </li>
            }) : <p>Chargement du repas...</p> }
            </ul>
        </div>
  )
}

export default CategoriesList