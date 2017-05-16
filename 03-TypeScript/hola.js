/**
 * Created by USRDEL on 16/5/17.
 */
var holaMundo = 'Hola mundoi cruel';
//boolean
var soltero = true;
//enteros
var novias = 12;
//string
var frase = "You're done";
var otraFrase = "El numero de novias en " + (novias + 1);
//arrays
var notas = [1, 2, 34]; //[]
var jaladas = [1, 2, 34]; //[]
//convierte a la variable en tipo de variable javascript, que puede convertirse en cualquier otra cosa
var nombre = "as";
nombre = 12;
//interface
var usuario = {
    nombre: "julia",
    apellido: "recalde",
    direccion: "dfhgdf"
};
/*
class persona{
    nombre:string="Usuario"; //publico por defecto
    private apellido:string;
    public fechaNacimiento:Date;
    constructor(nombre:string,
                apellido:string,
                fechaNacimiento?:Date){
        this.nombre=nombre;
        this.apellido=apellido;
        this.fechaNacimiento = fechaNacimiento;
    }
}
*/
var Persona = (function () {
    function Persona(nombre, apellido, fechaNacimiento) {
        this.nombre = "Usuario"; //publico por defecto
    }
    Persona.prototype.imprimirPersona = function () {
        console.log(this.nombre, this.apellido);
        return {
            nombre: this.nombre,
            apellido: this.apellido
        };
    };
    Persona.prototype.imprimirNombre = function (nombre, apellido) {
        if (apellido) {
            console.log(nombre, apellido);
        }
        else {
            console.log(nombre);
        }
    };
    return Persona;
}());
function SumarNomberos(numero1, numero2) {
    return numero1 + numero2;
}
var julia = new Persona();
console.log(julia.nombre, julia.apellido, julia.fechaNacimiento);
julia.nombre = "Julia";
julia.apellido = "Recalde";
julia.fechaNacimiento = new Date(12 - 01 - 1993);
//console.log(julia.nombre, julia.apellido, julia.fechaNacimiento);
julia.imprimirPersona();
