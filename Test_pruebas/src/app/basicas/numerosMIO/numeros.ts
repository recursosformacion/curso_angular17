
export function incrementar(numero: number): number {
    if (numero > 100) {
        return 100;
    };
    if (numero > 0) {
        return numero + 1;
    }
}