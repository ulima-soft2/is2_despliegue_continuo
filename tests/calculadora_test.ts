import { Calculadora } from "../main"

// Pruebas Unitarias
describe("Calculadora Test", ()=>{
    it("sumar", () => {
        let calculadora : Calculadora = new Calculadora()
        let resObtenido = calculadora.sumar(5, 8)
        let resEsperado = 13

        //lo que espero ---> lo que obtengo
        expect(resEsperado).toEqual(resObtenido)
    })
})