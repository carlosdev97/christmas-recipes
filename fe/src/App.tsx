import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddRecipe from "./pages/AddRecipe";
import Favorites from "./pages/Favorites";
import Users from "./pages/Users";
import RecipeDetails from "./pages/RecipeDetails";
import RegisterUser from "./pages/RegisterUser";
import Header from "./components/Header";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <Router>
      <Toaster
        toastOptions={{ duration: 5000 }}
        position="bottom-right"
        reverseOrder={false}
      />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addrecipe" element={<AddRecipe />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/users" element={<Users />} />
        <Route path="/register" element={<RegisterUser />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
