export class ActualizarNotaODT{ //Molde para PATCH
    constructor (body){ // Recibe solo los campos que el cliente quiere cambiar
        if(body.titulo!== undefined){ // Comprueba si enviaron título
            this.titulo = body.titulo.thim();// Agrega unicamente ese cambio
        }
        if(body.categoria!=undefined){ //Compruba si enviaron categoría
            this.categoria=body.categoria;// Agrega la nueva categoría
        }
    }
}// El DTO final contiene solo lo que se actualizará.