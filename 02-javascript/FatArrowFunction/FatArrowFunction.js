/**
 * Created by USRDEL on 9/5/17.
 */

//FAT arrow functions

var holaMundo = function() {console.log("Hola mundo")}

holaMundo()

var holaMundo2 = ()=>{return "Hola mundo2"}
holaMundo2()

var holaMundo3 = ()=> "Hola mundo3"
holaMundo3()

var holaMundo4 = ()=> holaMundo2()
holaMundo4()

var holaMundo5 = (nombre)=> `Hola ${nombre}`
holaMundo5('Fabian')

var holaMundo5 = (apellido)=> `Hola ${apellido}`
holaMundo5('Eguez')

var holaMundo6 = (nombre, apellido)=> `Sr. ${apellido} ${nombre}`
holaMundo6("Vicente", "Eguez")