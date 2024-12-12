import React from "react";
import CardRecipe from "../components/CardRecipe";
import useFetchRecipes from "../hooks/useFetchRecipes";

const Home: React.FC = () => {
  const { recipes, loading } = useFetchRecipes();

  if (loading) {
    return <div>Loading recipes . . . ✨</div>;
  }

  return (
    <div className="home">
      {recipes.map((recipe) => (
        <CardRecipe key={recipe._id} recipe={recipe} />
      ))}
    </div>
  );
};

export default Home;
