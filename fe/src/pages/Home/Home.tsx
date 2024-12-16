import { FC } from "react";
import CardRecipe from "../../components/CardRecipe";
import useFetchRecipes from "../../hooks/useFetchRecipes";
import "./Home.css";

const Home: FC = () => {
  const { recipes, loading } = useFetchRecipes();

  if (loading) {
    return <div className="home__loader">Loading recipes . . . ✨</div>;
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
