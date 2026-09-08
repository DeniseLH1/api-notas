import {Nota} from "../models/nota.model.js"// trae el modelo
export const notaService={//agrupa las operaciones de datos
    crear: (datos) =>Nota.create(datos), //POST: inserta un documento
    listar: () => Nota.find().sort({createAt:-1}),//GET: id trae una
    buscarPorId: (id) => Nota.findByIdAndUpdate(id,datos,{//PATCH busca y cambia
        new: true, runValidators: true,// devuelve la nueva versión y valida
    }),
    eliminar:(id)=>Nota.findByIdAndDelete(id),//DELETE: busca y elimina
};// Termina el servicio