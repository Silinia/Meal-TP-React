import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [input, setInput] = useState("");
  const [meal, setMeal] = useState(null);
  const [debouncedInput, setDebouncedInput] = useState("");


  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedInput(input);
    }, 500);

    return () => clearTimeout(timer);
  }, [input]);

  
  useEffect(() => {
    if (debouncedInput) {
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${debouncedInput}`)
        .then((response) => response.json())
        .then((data) => {
          setMeal(data.meals);
        })
    } else {
      setMeal(null);
    }
  }, [debouncedInput]);

  const handleclick = () => {
    setInput("");
    setMeal(null);
  }

  return (
    <header>
      <h1>Enjoy un Meal à Kunis !</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/random-meal">Repas Aléatoire</Link>
          </li>
        </ul>
      </nav>
      <div className="search">
        <form onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="search">Search </label>
          <input
            type="text"
            placeholder="Search for a meal"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            name="search"
          />
        </form>
        {meal && meal.length > 0 ? (
        <div className="search-meal">
          {meal.map((meal) => (
            <div key={meal.idMeal}>
              <Link to={`/recipe-by-id/${meal.idMeal}`} onClick={handleclick}>
                <p>{meal.strMeal}</p>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        input && <p>No results found</p>
      )}
      </div>
      
    </header>
  );
};

export default Header;
