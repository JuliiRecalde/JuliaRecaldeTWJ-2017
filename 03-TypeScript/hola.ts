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

class Persona{
    nombre:string="Usuario"; //publico por defecto
    apellido:string;
    public fechaNacimiento:Date;
    constructor(nombre?:string,
                apellido?:string,
                fechaNacimiento?:Date){
    }
    imprimirPersona():UsuarioLogin{
        console.log(this.nombre, this.apellido);
        return{
            nombre:this.nombre,
            apellido:this.apellido
        }
    }

    imprimirNombre (nombre:string, apellido:string):void{

        if(apellido){
            console.log(nombre, apellido);

        }else{
            console.log(nombre);
        }
    }
}


function SumarNomberos(numero1:number, numero2:number):number{
    return numero1+numero2;
}



let julia:Persona = new Persona();
console.log(julia.nombre, julia.apellido, julia.fechaNacimiento);


julia.nombre="Julia";
julia.apellido="Recalde";
julia.fechaNacimiento= new Date(12-01-1993);
//console.log(julia.nombre, julia.apellido, julia.fechaNacimiento);

julia.imprimirPersona();