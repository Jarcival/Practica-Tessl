# práctica-tessl

Servidor backend básico con Express y CORS que expone una API REST para administrar una lista en memoria de juegos.

## 📌 Descripción

Este proyecto levanta un servidor HTTP en el puerto `3000` y ofrece las siguientes funcionalidades:

- Middleware CORS para aceptar peticiones externas
- Middleware para parsear JSON en los cuerpos de las solicitudes
- Endpoints para obtener la lista de juegos y agregar nuevos juegos

## 🚀 Tecnologías

- Node.js
- Express
- CORS

## 📁 Estructura principal

- `index.js` - punto de entrada del servidor
- `package.json` - dependencias y configuración básica
- `tessl.json` - configuración del proyecto para Tessl

## ⚙️ Instalación

Desde la carpeta del proyecto:

```bash
npm install
```

> Si usas `tessl`, también puedes ejecutar:

```bash
tessl install --project-dependencies
```

## ▶️ Ejecución

```bash
node index.js
```

El servidor quedará escuchando en `http://localhost:3000`.

## 📡 Endpoints disponibles

### GET `/api/juegos`

Devuelve la lista completa de juegos.

Respuesta de ejemplo:

```json
[
  { "id": 1, "titulo": "The Legend of Zelda", "genero": "Aventura" },
  { "id": 2, "titulo": "Dark Souls", "genero": "RPG" },
  { "id": 3, "titulo": "Elden Ring", "genero": "RPG" }
]
```

### POST `/api/juegos`

Agrega un nuevo juego al arreglo en memoria.

Cuerpo de la solicitud (JSON):

```json
{
  "titulo": "Nombre del juego",
  "genero": "Género"
}
```

Respuesta:

- Código `201 Created`
- JSON del juego agregado con el `id` asignado

## 📝 Notas

- Los datos se almacenan en memoria, por lo que se pierden al reiniciar el servidor.
- No hay validación avanzada ni base de datos configurada en esta versión.
