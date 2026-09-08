import mongoose from "mongoose";//Importa el modelador de MongoDB
const notaSchema = new mongoose.Schema({ // define la forma de cada nota
    título: { type: String, required: true}, // texto obligatorio
    contenido: { type:String,required:true}, //  texto obligatorio
    categoria:{type: String,enum:["clase","tarea","idea"],required:true},//solo 3 valores y es obligatorio 
},{timestamps:true});// crea fechas automaticamente
export const Nota =  mongoose.model("Nota",notaSchema)