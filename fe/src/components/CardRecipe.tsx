import React from "react";

interface Recipe {
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
  const { title, category, ingredients, instructions, image } = recipe;

  return (
    <div className="card">
      <div className="card__header">{title}</div>
      <img className="card__image" src={image} alt={`Imagen de ${title}`}></img>
      <div className="card__category">Categoría: {category}</div>
      <div className="card__content">
        <h3>Ingredientes:</h3>
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <h3>Instrucciones:</h3>
        <p>{instructions}</p>
      </div>
      <div className="card__footer">
        <button>Ver más recetas</button>
      </div>
    </div>
  );
};

export default CardRecipe;
