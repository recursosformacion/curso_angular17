import { incrementar } from './numeros';

describe('Pruebas de numeros', () => {

    it('Comprobacion de tope', () => {
        const resp: number = incrementar(300);
        expect(resp).toBe(100);
    })

    it('Comprobacion de incremento', () => {
        const resp: number = incrementar(50);
        expect(resp).toBe(51);
    }),

    it('Comprobacion de 0', () => {
        const resp: number = incrementar(0);
        expect(resp).toBeUndefined();
    })
})