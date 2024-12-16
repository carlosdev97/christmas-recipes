import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CardRecipe.css";

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
  showFavoriteIcon?: boolean; // Optional prop para mostrar el icono de favorito
  onDelete?: () => void; // Optional prop para mostrar el icono de borrar
}

export const CardRecipe: React.FC<CardRecipeProps> = ({
  recipe,
  showFavoriteIcon,
  onDelete,
}) => {
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
    <div className="recipe__card">
      <div className="recipe__card-header">{title}</div>
      <div className="recipe__card-imagecont">
        <img
          className="recipe__card-image"
          src={image}
          alt={`Imagen de ${title}`}
        ></img>
      </div>
      <div className="recipe__card-footer">
        <button className="recipe__card-button" onClick={handleViewDetails}>
          Ver receta
        </button>
        {showFavoriteIcon ? (
          <button onClick={toggleFavorite}>{isFavorite ? "❤️" : "🤍"}</button>
        ) : (
          <button onClick={onDelete}>🗑️ {/* Botón para eliminar */}</button>
        )}
      </div>
    </div>
  );
};
