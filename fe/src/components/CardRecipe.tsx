import React from "react";
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

  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/recipe/${recipe._id}`);
  };

  return (
    <div className="card">
      <div className="card__header">{title}</div>
      <img className="card__image" src={image} alt={`Imagen de ${title}`}></img>
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
      </div>
    </div>
  );
};

export default CardRecipe;
