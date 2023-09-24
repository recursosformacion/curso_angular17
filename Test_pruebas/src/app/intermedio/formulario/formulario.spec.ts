import { FormularioLogin } from './formulario';
import { FormBuilder } from '@angular/forms';


describe('Formularios', () => {

    let componente: FormularioLogin;

    beforeEach(() => {
        componente = new FormularioLogin(new FormBuilder);
    })

    it('Crea formulario dos campos', () => {
        expect(componente.form.contains('email')).toBeTruthy();
        expect(componente.form.contains('password')).toBeTruthy();
    })

    it('Email obligatorio', () => {
        const control = componente.form.get('email');
        control.setValue('');
        expect(control.valid).toBeFalsy();
        control.setValue('aaaa@bbbb.com');
        expect(control.valid).toBeTruthy();
    })
    it('Email valido si', () => {
        const control = componente.form.get('email');
        control.setValue('aaaaa@bbbb.com');
        expect(control.valid).toBeTruthy();
    })
    it('Email valido no-solo nombre', () => {
        const control = componente.form.get('email');
        control.setValue('aaaaa');
        expect(control.valid).toBeFalsy();
    })
    it('Email valido no-parte dominio', () => {
        const control = componente.form.get('email');
        control.setValue('@aaaaa');
        expect(control.valid).toBeFalsy();
    })
    it('Email valido no-sin dominio', () => {
        const control = componente.form.get('email');
        control.setValue('aaaaa@');
        expect(control.valid).toBeFalsy();

    })
    xit('Email valido no-sin tld', () => {
        const control = componente.form.get('email');
        control.setValue('aaaaa@bbbb');
        expect(control.valid).toBeFalsy();
    })
    it('Email valido no-con punto', () => {
        const control = componente.form.get('email');
        control.setValue('aaaaa@bbbb.');
        expect(control.valid).toBeFalsy();
    })
})