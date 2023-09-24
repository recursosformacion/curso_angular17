import { mensaje } from './string';


describe('Pruebas de string', () => {
    beforeAll(() => console.log('Inicio del sistema de test '))
    beforeEach(() => console.log('Se inicia un test'))
    afterEach(() => console.log('Finaliza un test'))
    afterAll(() => console.log('Finalizaron todos los test'))

    it(' Comprobacion que devuelve una string', () => {
        const resp = mensaje(' Miguel');
        expect(typeof resp).toBe('string');
    })

    it(' Devuel el valor correcto', () => {
        const resp = mensaje(' Miguel');
        expect(resp).toBe('Saludos  Miguel');
    })

    it(' Devuele saludo con el nombre', () => {
        const nombre = 'Miguel';
        const resp = mensaje(nombre);
        expect(resp).toContain(nombre);
    })

    /*  it(' quiero que falle', () => {
          
          if (true) { fail('Falla porque quiero')}
      })
   */

});




