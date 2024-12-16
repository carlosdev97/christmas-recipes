import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiClient from "../../utils/api";
import "./RecipeDeatails.css";

interface Recipe {
  _id: string;
  title: string;
  category: string;
  ingredients: string[];
  instructions: string;
  image?: string;
}

export const RecipeDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await apiClient.get(`/api/recipes/${id}`);
        setRecipe(response.data);
        console.log(response);
      } catch (error) {
        setError("Error fetching the recipe. Please try again.");
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [id]);

  if (loading) {
    return <p className="recipes__loader">Loading recipe details . . .🍝</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="recipe__details">
      {recipe ? (
        <>
          <h1 className="recipe__title">{recipe.title}</h1>
          {recipe.image && (
            <img
              className="recipe__image"
              src={recipe.image}
              alt={`Imagen de ${recipe.title}`}
            />
          )}
          <h3>Ingredientes: </h3>
          <ul className="recipe__ingredients">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <h3>Instrucciones: </h3>
          <p>{recipe.instructions}</p>
        </>
      ) : (
        <p>Not recipe found!!!</p>
      )}
    </div>
  );
};
