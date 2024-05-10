//arreglo para facultades
let facultades = [];

function Facultys(name, campus) {
    this.name = name;
    this.campus = campus;
}

//validacion
function isValidFaculty(unaFacultad) {
    let validacion = true;
    if (unaFacultad.name == "") {
        validacion = false;
    }
    if (unaFacultad.campus == "") {
        validacion = false;
    }
    return validacion;
}

//register
function registerFaculty() {
    let inputName = document.getElementById("facultad").value;
    let inputCampus = document.getElementById("txtCampus").value;
    let nuevaFaculty = new Facultys(inputName, inputCampus);

    if (isValidFaculty(nuevaFaculty)) {
       
        facultades.push(nuevaFaculty);

        saveItems(facultades);
     
        
        // Guardar las facultades en localStorage
        //localStorage.setItem("facultades", JSON.stringify(facultades));

        // Limpiar los campos después del registro
        document.getElementById("facultad").value = "";
        document.getElementById("txtCampus").value = "";

    } else {
        alert("Por favor completa los campos");
    }
}

