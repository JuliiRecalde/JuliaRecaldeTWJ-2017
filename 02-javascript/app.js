/**
 * Created by USRDEL on 3/5/17.
 */


//comentarios una sola linea

console.log('hello Kitty');
var julia = {
    nombre:"julia",
    apelido:"recalde",
    fechaNacimiento: new Date(),
    imprimir:function(){
        console.log(this.nombre, this.apelido);      //console.log(julia.nombre, julia.apelido)

    },
    ano:function () {
        return this.fechaNacimiento.getFullYear();

    },
    diferenciaEdad: function (edadAComparar) {
        //Primera forma
        return Math.abs(edadAComparar-this.fechaNacimiento.getFullYear())

    }
};

console.log(julia.ano());
console.log(julia.diferenciaEdad(1993));
julia.imprimir();

