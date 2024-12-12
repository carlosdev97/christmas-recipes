import React, { useState } from "react";
import apiClient from "../utils/api";

const AddRecipe: React.FC = () => {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    ingredients: "",
    instructions: "",
    image: "",
  });

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const ingredientsArray = formData.ingredients
      .split(",") // Dividir por comas
      .map((item) => item.trim()) // Eliminar espacios en blanco extra
      .filter((item) => item); // Filtrar líneas vacías

    const payload = {
      ...formData,
      ingredients: ingredientsArray, // Actualizar los ingredientes como array
    };

    try {
      await apiClient.post("/api/recipes", payload);
      alert("Recipe added successfully!");
    } catch (error) {
      alert(`error adding recipe ${error}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        onChange={(event) =>
          setFormData({ ...formData, title: event.target.value })
        }
      />
      <input
        type="text"
        placeholder="Category"
        onChange={(event) =>
          setFormData({ ...formData, category: event.target.value })
        }
      />
      <input
        type="textarea"
        placeholder="Ingredients"
        onChange={(event) =>
          setFormData({ ...formData, ingredients: event.target.value })
        }
      />
      <input
        type="text"
        placeholder="Instructions"
        onChange={(event) =>
          setFormData({ ...formData, instructions: event.target.value })
        }
      />
      <input
        type="text"
        placeholder="Image"
        onChange={(event) =>
          setFormData({ ...formData, image: event.target.value })
        }
      />
      <button type="submit">ADD</button>
    </form>
  );
};

export default AddRecipe;
