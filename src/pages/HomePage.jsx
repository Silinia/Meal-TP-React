import { useState } from "react";
import Footer from "../components/partials/Footer"
import Header from "../components/partials/Header"
import ListSix from "../components/ListSix";
import CategoriesList from "../components/CategoriesList";
import IngredientsList from "../components/IngredientsList";


const HomePage = () => {

    const [showComponentListSix, setShowComponentListSix] = useState(false);
    const [showComponentCategories, setShowComponentCategories] = useState(false);
    const [showComponentIngredients, setShowComponentIngredients] = useState(false);
    

    const toggleComponentListSix = () => {
        if (showComponentListSix) {
            setShowComponentListSix(false);
        } else {
            setShowComponentIngredients(false);
            setShowComponentCategories(false);
            setShowComponentListSix(true);
        }
    };
    const toggleComponentCategories = () => {
        if (showComponentCategories) {
            setShowComponentCategories(false);
        } else {
            setShowComponentIngredients(false);
            setShowComponentListSix(false);
            setShowComponentCategories(true);
        }
    };
    const toggleComponentIngredients = () => {
        if (showComponentIngredients) {
            setShowComponentIngredients(false);
        } else {
            setShowComponentListSix(false);
            setShowComponentCategories(false);
            setShowComponentIngredients(true);
        }
    };

  return (
    <>
        <Header />
        <div className="homepage-text">
            <h2>Bienvenue sur site du Meal à Kunis !</h2>
            <p>Retrouvez vos recettes préférées et venez enjoy un Meal à Kunis en gardant votre indice glycémique aussi bas que celui de notre érégie !</p>
            <p>Parcourez sans plus attendre nos différentes sections 👍</p>
        </div>

        <div className="homepage">
            <button onClick={toggleComponentListSix} >Afficher 6 recettes</button>
            <button onClick={toggleComponentCategories} >Afficher toutes les catégories</button>
            <button onClick={toggleComponentIngredients} >Afficher tous les ingrédients</button>
            {showComponentListSix ? <ListSix /> : null}
            {showComponentCategories ? <CategoriesList /> : null}
            {showComponentIngredients ? <IngredientsList /> : null}
            
        </div>
        <Footer />
    </>
  )
}

export default HomePage