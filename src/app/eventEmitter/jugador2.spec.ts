import {Jugador2} from './jugador2';

describe('Pruebas a jugador2', () => {
    let jugador: Jugador2;
    beforeEach(() => {
        jugador = new Jugador2();
    });

    it('Emite un evento cuando recibe daño', () => {
        let nueva = 0;
        jugador.vidaCambia.subscribe(hp => {
            setTimeout(() => {
            }, 30000);
            nueva = hp;
        });
        jugador.recibeDano(1000);
        expect(nueva).toBe(0);
    });

    it('Emite un evento cuando recibe daño y sobrevive', () => {
        let nueva = 0;
        jugador.vidaCambia.subscribe(hp => {
            nueva = hp;
        });
        jugador.recibeDano(50);
        expect(nueva).toBe(50);
    });
});
