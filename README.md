# 1. Información básica del proyecto

## Christmas Recipes

Es una aplicación web que simula un sitio web de recetas navideñas.

# 2. Descripción

Este proyecto consite en una aplicación web de gestión de recetas navideñas y usuarios.

# 3. Instalación

Para utilizar el proyecto, primero es necesario comprender la estructura de carpetas. La carpeta principal del proyecto se llama "christmas-recipes", y dentro de ella se encuentran dos subcarpetas: "be" y "fe", que contienen respectivamente el backend y el frontend.

El proyecto sigue el stack tecnológico MERN (MongoDB, Express, React, Node.js). En el backend, se utiliza Node.js como entorno de ejecución de JavaScript, y Express.js para simplificar la creación de rutas, middleware y controladores para el manejo de solicitudes HTTP. Para la persistencia de datos, se emplea MongoDB Atlas, una base de datos no relacional para la gestión de recetas y usuarios.

En el frontend, React.js se encarga de renderizar la vista en el navegador y gestionar el estado de la interfaz de usuario.

### En resumen:

Frontend: React.js

Backend: Node.js + Express.js (lógica del servidor) + MongoDB (almacenamiento de datos)

### Ejecución Backend:

1. Abra una terminal dentro de la carpeta "christmas-recipes".

2. Ejecute el siguiente comando:

### `cd be/`

3. Instalar las dependencias:

### `npm install`

4. Iniciar el servidor:

### `npm start`

5. Previamente asegúrese de tener las herramientas necesarias como Node.js y npm.

### `node -v` y `npm -v`

### Ejecución Frontend:

1. Abra una terminal dentro de la carpeta "christmas-recipes".

2. Ejecute el siguiente comando:

### `cd fe/`

3. Instalar las dependencias:

### `npm install`

4. Iniciar el servidor:

### `npm run dev`

5. Configuración adicional (si es necesario)

- Archivo .env: Asegúrate de que las variables en el archivo .env estén correctamente configuradas (por ejemplo, URL de la API del backend).
