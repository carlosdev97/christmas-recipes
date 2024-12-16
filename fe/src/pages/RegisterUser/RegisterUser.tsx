import React, { useState } from "react";
import apiClient from "../../utils/api";
import { toast } from "react-hot-toast";
import "../../styles/FormStyles.css";

export const RegisterUser: React.FC = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    await toast.promise(apiClient.post("/api/users/register", formData), {
      loading: "Registrando usuario...",
      success: "¡Usuario registrado con éxito!",
      error: "No se pudo registrar el usuario.",
    });

    setFormData({
      username: "",
      email: "",
      password: "",
    });
  };
  return (
    <div className="form__container">
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="form__input"
          type="text"
          placeholder="Nombre de usuario"
          value={formData.username}
          onChange={(event) =>
            setFormData({ ...formData, username: event.target.value })
          }
        />
        <input
          className="form__input"
          type="email"
          placeholder="Correo electronico"
          value={formData.email}
          onChange={(event) =>
            setFormData({ ...formData, email: event.target.value })
          }
        />
        <input
          className="form__input"
          type="password"
          placeholder="Contraseña"
          value={formData.password}
          onChange={(event) =>
            setFormData({ ...formData, password: event.target.value })
          }
        />
        <button className="form__button" type="submit">
          Registrar
        </button>
      </form>
    </div>
  );
};
