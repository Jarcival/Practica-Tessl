const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware CORS para aceptar peticiones externas
app.use(cors());

// Middleware para parsear JSON
app.use(express.json());

// Arreglo en memoria con objetos de prueba
const juegos = [
  { id: 1, titulo: 'The Legend of Zelda', genero: 'Aventura' },
  { id: 2, titulo: 'Dark Souls', genero: 'RPG' },
  { id: 3, titulo: 'Elden Ring', genero: 'RPG' }
];

// Ruta GET para obtener la lista completa de juegos
app.get('/api/juegos', (req, res) => {
  res.json(juegos);
});

// Ruta POST para agregar un nuevo juego
app.post('/api/juegos', (req, res) => {
  const nuevoJuego = req.body;
  
  // Asignar un id nuevo basado en el último id
  nuevoJuego.id = juegos.length > 0 ? Math.max(...juegos.map(j => j.id)) + 1 : 1;
  
  // Agregar el nuevo juego al arreglo
  juegos.push(nuevoJuego);
  
  // Devolver código de estado 201 (Created)
  res.status(201).json(nuevoJuego);
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
