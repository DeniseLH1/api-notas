import express from 'express'; //Trae la función principal de Express
import {notaRouter} from "./routes/nota.routes.js";
import {manejarError, rutaNoEncontrada} from "./middlewares/error.middleware.js"

const app = express(); // crea nuestra aplicación web

app.use(express.json());//  convierte el Json recibido en req.body

app.get('/health', (req, res) => { //atiende GET/ health
  res.status(200).json({ status: 'ok' }) //Devuelve estado HTTP 200 y un objeto JSON
});

app.use("/api/v1/notas",notaRouter);
app.use(rutaNoEncontrada)

export default app; // Permite usar app desde server.js

