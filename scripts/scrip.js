//console.log("Hola");

//variables EJEMPLOS

var studentName="Sam";
let age=99;
const isStudent=false;

//age=98; CAMBIAOS NUMERO 

//studentName="Roberto"; CAMBIA EL VALOR DE LA VARIABLE

//isStudent=true; NO ES CORRECTO ASIGNAR ALGO A UNA CONSTANTE

console.log(studentName);
console.log(age);
console.log(isStudent);

//ARREGLOS
let students = ["Samantha","Angel","Fabiola","Sergio","Rafael"];

console.log(students)

//agregar al arreglo
students.push("Fernanda","Adrian");
console.log(students);

//buscar en posicion del arreglo
console.log(students[2]);

//modificar algo en el arreglo
students[2]="Fabi";
//console.log(students[2]);

//quitar el ultimo elemento en el arreglo
students.pop();
// borra ellemento especifico
students.splice(1,1)
console.log(students);

//Objetos literal
let student1 = {
    name: "Angel",
    age: 99,
    isStudent: false
}
let student2 = {
    name: "Sam",
    age: 99,
    isStudent: true
}

console.log(student1,student2)


//object constructor

function Student(name,age,isStudent){
    //this asgina los atributos al constructor
    this.name=name;
    this.age=age;
    this.isStudent=isStudent;

}

let student3 = new Student("Fabiola",97,false);
let student4 = new Student("Sergio",98,true);
let student5 = new Student("Fernando",99,true);

console.log(student3,student4,student5);

//function
//function saludar(nombre){
  //  console.log("Hola " + nombre)
    
    //return "Hello" regresa algo a consola 
//}
//console.log(saludar());

//llamar la funcion
//saludar("angel");

function sumar(a,b){
    let total= a+b;
    return total;
}
function calcularTaxes(ingresos,egresos){
    let subtotal = ingresos-egresos;
    let total =subtotal*.02;

    document.write(`
    <p class="container"> tus taxes son $ ${total} <p>
`)
}
calcularTaxes(sumar(100,200),sumar(10,8));
calcularTaxes(sumar(300,200),sumar(30,28));