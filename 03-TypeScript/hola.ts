/**
 * Created by USRDEL on 16/5/17.
 */



let holaMundo = 'Hola mundoi cruel';


//boolean
let soltero:boolean = true;

//enteros
let novias=12;

//string
let frase= "You're done";

let otraFrase= `El numero de novias en ${novias +1}`;

//arrays
let notas :number []=[1, 2, 34]; //[]
let jaladas:Array<number>=[1, 2, 34] //[]

//convierte a la variable en tipo de variable javascript, que puede convertirse en cualquier otra cosa
let nombre:any="as"
nombre=12;

//interface
let usuario ={
    nombre:"julia",
    apellido:"recalde",
    direccion:"dfhgdf"
}
interface UsuarioLogin{
    nombre:string,
    apellido:string,
    direccion?:string
}
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

class persona{
    nombre:string="Usuario"; //publico por defecto
    private apellido:string;
    public fechaNacimiento:Date;
    constructor(nombre:string,
                apellido:string,
                fechaNacimiento?:Date){
    }
    imprimirPersona(){
        console.log(this.fechaNacimiento);
    }
}



console.log ("Hola mundo");