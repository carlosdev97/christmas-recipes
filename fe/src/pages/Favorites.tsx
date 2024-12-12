import React, { useState, useEffect } from "react";
import CardRecipe from "../components/CardRecipe";

interface Recipe {
  _id: string;
  title: string;
  category: string;
  ingredients: string[];
  instructions: string;
  image?: string;
}

const Favorites: React.FC = () => {
  const [favorites, setFavorites] = useState<Recipe[]>([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  const removeFromFavorites = (id: string) => {
    const updatedFavorites = favorites.filter((recipe) => recipe._id !== id);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <div className="favorites">
      {favorites.length > 0 ? (
        <div className="favorites__list">
          <h1>My favorite recipes 🍲!</h1>
          {favorites.map((recipe) => (
            <div key={recipe._id} className="favorite__item">
              <CardRecipe recipe={recipe} />
              <button onClick={() => removeFromFavorites(recipe._id)}>
                Remove
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <p>No favorite recipes yet. Start adding some!</p>
        </div>
      )}
    </div>
  );
};

export default Favorites;
