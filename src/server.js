import mongoose from 'mongoose';
import app from './app.js'; // importa la aplicación preparada
const PORT =3000; //Define el puerto local 
const MONGODB_URI="mongodb+srv://lopezjennifer8642_db_user:wCPokEn5bEsKpJO5@campustec.piaiqxo.mongodb.net/"

try{
    await mongoose.connect(MONGODB_URI);
    app.listen(PORT, () => { 
    console.log(`API lista en http://localhost:${PORT}`); //Muestá la dirección
    }); // Cierra el arranque
}catch(error){
    console.log("No fue posible conectar con MongoDB", error.message);
    process.exit(1);
}