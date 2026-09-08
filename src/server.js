import app from './app.js'; // importa la aplicación preparada
const PORT =3000; //Define el puerto local 

app.listen(PORT, () => { 
    console.log(`API lista en http://localhost:${PORT}`); //Muestá la dirección
 
}); // Cierra el arranque