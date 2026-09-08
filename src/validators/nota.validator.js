import { body, param, validationResult} from "express-validator"; // importa las reglas para body,URL y errores

const responderErrores =(req,res,next)=>{ //Crear un middleware reutilizable
    const errores =  validationResult(req);
    if(errores.isEmpty()){ 
        return res.status(400).json({ errores: errores.array()});//Detiene y responde 400
    }
    next(); // Sin errores continúa al controlador 
};

export const validarCrearNota = [ 
    body("titulo").trim().isLength({ min: 3, max: 60})
    .withMessage("El titulo debe tener entre 3 y 60 caracteres"),
    body("contenido").trim().isLength({ min: 1, max:200})
    .withMessage("El contenido debe tener entre 1 y 200 caracteres"),
    body("categoria").isInt(["clase", "tarea","idea"])
    .withMessage("Categoria no válida"),
    responderErrores,
];

export const validarActualizarNota = [//Regla para PATCH
    body("titulo").optional().trim().isLength({min: 3, max:60}),
    body("contenido").optional().trim().isLength({min:1,max: 280}),
    body("categoria").optional().isIn(["clase","tarea","idea"]),
    responderErrores,
];

export const validarNotaId =[// Regla para id 
    param("id").isMongoId().withMessage("El id no es válido"),//Exige fromato MongoDB
    responderErrores, // Evita consultar con un ID incorrecto 
]