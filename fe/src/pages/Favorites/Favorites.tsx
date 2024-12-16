import React, { useState, useEffect } from "react";
import { CardRecipe } from "../../components";
import "./Favorites.css";

interface Recipe {
  _id: string;
  title: string;
  category: string;
  ingredients: string[];
  instructions: string;
  image?: string;
}

export const Favorites: React.FC = () => {
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
          {favorites.map((recipe) => (
            <div key={recipe._id} className="favorite__item">
              <CardRecipe
                recipe={recipe}
                showFavoriteIcon={false}
                onDelete={() => removeFromFavorites(recipe._id)}
              />
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
