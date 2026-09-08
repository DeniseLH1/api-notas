export class CrearNotaODT{ // Define el molde de datos permitidos
    constructor(body){ //recibe req.body como entrada
        this.titulo= body.titulo.trim();//Guarda el título sin espacios externos.
        this. contenido= body.contenido.trim();// limpia el contenido
        this.categoria= body.categoria//conserva la categoría válida
    }

}