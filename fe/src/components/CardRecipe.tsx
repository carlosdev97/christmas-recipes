import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Recipe {
  _id: string;
  title: string;
  category: string;
  ingredients: string[];
  instructions: string;
  image?: string;
}

interface CardRecipeProps {
  recipe: Recipe;
}

const CardRecipe: React.FC<CardRecipeProps> = ({ recipe }) => {
  const { title, image } = recipe;
  const [isFavorite, setIsFavorite] = useState(false);

  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/recipe/${recipe._id}`);
  };

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    if (favorites.includes(recipe._id)) {
      // Si ya es favorito, eliminarlo
      const updatedFavorites = favorites.filter(
        (id: string) => id !== recipe._id
      );
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      setIsFavorite(false);
    } else {
      // Si no es favorito, agregarlo
      favorites.push(recipe);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      setIsFavorite(true);
    }
  };

  return (
    <div className="card">
      <div className="card__header">{title}</div>
      <div className="card__image-container">
        <img
          className="card__image"
          src={image}
          alt={`Imagen de ${title}`}
        ></img>
      </div>
      {/* <div className="card__category">Categoría: {category}</div>
      <div className="card__content">
        <h3>Ingredientes:</h3>
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <h3>Instrucciones:</h3>
        <p>{instructions}</p>
      </div> */}
      <div className="card__footer">
        <button className="card__button" onClick={handleViewDetails}>
          Ver receta
        </button>
        <button onClick={toggleFavorite}>
          {isFavorite ? "❤️" : "🤍"} {/* Ícono de corazón */}
        </button>
      </div>
    </div>
  );
};

export default CardRecipe;
