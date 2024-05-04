function Facultys(name,campus){
    this.name=name;
    this.campus=campus;
}

//register
function registerFaculty(){
    let inputName = document.getElementById("txtFaculty").value;
    let inputCampus = document.getElementById("txtCampus").value;
let nuevaFaculty = new Facultys(inputName,inputCampus);
saveItems(nuevaFaculty);
}