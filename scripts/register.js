//arreglo para guardar estudiantes
let students=[];

//constructor objeto
function Student(name,age,gender,faculty,materia1,materia2,materia3,email,password){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.faculty=faculty;
    this.materia1=materia1;
    this.materia2=materia2;
    this.materia3=materia3;
    this.email=email;
    this.password=password;
}

//validación
function isValid(unAlumno){
    let validacion = true;

    if(unAlumno.name==""){
        validacion = false;
    }
    if(unAlumno.age==""){
        validacion = false;
    }
    if(unAlumno.gender==""){
        validacion = false;
    }
    if(unAlumno.materia1==""){
        validacion = false;
    }
    if(unAlumno.materia2==""){
        validacion = false;
    }
    if(unAlumno.materia3==""){
        validacion = false;
    }

    return validacion;
}
//registrar funcion
function registrar(){
    let inputNombre = document.getElementById("txtNombre").value;
    let inputEdad = document.getElementById("txtEdad").value;
    let inputGender = document.getElementById("gender").value;
    let inputFaculty = document.getElementById("facultad").value;
    let inputMateria1 = document.getElementById("numMateria1").value;
    let inputMateria2 = document.getElementById("numMateria2").value;
    let inputMateria3 = document.getElementById("numMateria3").value;
    let inputEmail = document.getElementById("txtEmail").value;
    let inputPassword = document.getElementById("txtPassword").value;

    let nuevoAlumno = new Student(inputNombre,inputEdad,inputGender,inputFaculty,inputMateria1,inputMateria2,inputMateria3,inputEmail,inputPassword);
    if(isValid(nuevoAlumno)){
        students.push(nuevoAlumno);

        //displayCards();
        displayTables();
    }else{
        alert("Por favor completa los campos");
    }


}



function init(){
    let student1 = new Student("Samuel",99,"Masculino","Medicina",87,89,99,"s@s.com","123456");
    students.push(student1);
    //displayCards();
    displayTables();
}

window.onload=init;// espera a rendirizar el HTML