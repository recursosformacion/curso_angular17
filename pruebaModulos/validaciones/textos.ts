const MENSAJES: string[] = [
    "Este es el mensaje primero",
    "Este es el mensaje segundo"
]

export function obtenerError(numError:number):string {
    return MENSAJES[numError];
}