const express = require('express');
const cors = require('cors');
const db = require('./dbConnection'); // Esto asegura que la BD se crea
const authRoutes = require('./authRoutes'); // Importa las rutas de autenticación
const registroRoutes = require('./registroRoutes');
const clientesRoutes = require('./routes/clientesRoutes');
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Usar rutas de autenticación
app.use('/', authRoutes);

app.use('/api', registroRoutes);
app.use(clientesRoutes);

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
