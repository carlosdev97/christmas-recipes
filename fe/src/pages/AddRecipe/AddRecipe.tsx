import React, { useState } from "react";
import apiClient from "../../utils/api";
import { toast } from "react-hot-toast";
import "../../styles/FormStyles.css";

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

    await toast.promise(apiClient.post("/api/recipes", payload), {
      loading: "Guardando receta...",
      success: "¡Receta guardada con éxito!",
      error: "No se pudo guardar la receta.",
    });

    setFormData({
      title: "",
      category: "",
      ingredients: "",
      instructions: "",
      image: "",
    });
  };

  return (
    <div className="form__container">
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="form__input"
          type="text"
          placeholder="Título"
          value={formData.title}
          onChange={(event) =>
            setFormData({ ...formData, title: event.target.value })
          }
        />
        <input
          className="form__input"
          type="text"
          placeholder="Categoría"
          value={formData.category}
          onChange={(event) =>
            setFormData({ ...formData, category: event.target.value })
          }
        />
        <input
          className="form__input"
          type="textarea"
          placeholder="Ingredientes"
          value={formData.ingredients}
          onChange={(event) =>
            setFormData({ ...formData, ingredients: event.target.value })
          }
        />
        <input
          className="form__input"
          type="text"
          placeholder="Instrucciones"
          value={formData.instructions}
          onChange={(event) =>
            setFormData({ ...formData, instructions: event.target.value })
          }
        />
        <input
          className="form__input"
          type="text"
          placeholder="URL imagen"
          value={formData.image}
          onChange={(event) =>
            setFormData({ ...formData, image: event.target.value })
          }
        />
        <button className="form__button" type="submit">
          Agregar
        </button>
      </form>
    </div>
  );
};

export default AddRecipe;
