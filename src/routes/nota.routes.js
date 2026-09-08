import { Router } from "express";
import {crearNota,listarNotas,obtenerNota,actualizarNota,eliminarNota} from '../controlllers/nota.controlller.js'
import {validarCrearNota,validarActualizarNota,ValidarNotaId, validarNotaId} from '../validators/nota.validator.js'

export const notaRouter = Router();
notaRouter.post("/",validarCrearNota,crearNota);
notaRouter.get("/",listarNotas);
notaRouter.get("/:id",validarNotaId,obtenerNota);
notaRouter.patch("/:id",validarNotaId,validarActualizarNota,actualizarNota);
notaRouter.delete("/:id",validarNotaId,eliminarNota);