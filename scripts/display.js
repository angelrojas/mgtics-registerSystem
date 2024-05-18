function displayCards(student){
    let card="";
    //for (let i=0;i<students.length;i++){
       // let student=students[i];
        card=`
        <div id="${student.id}" class='student'>
            <h4> Nombre: ${student.name}</h4>
            <p> Edad: ${student.age} </p>
            <p> Genero: ${student.gender} </p>
            <p> Facultad: ${student.faculty} </p>
            <p> Materia 1 calificacion: ${student.materia1} </p>
            <p> Materia 2 calificacion: ${student.materia2} </p>
            <p> Materia 3 calificacion: ${student.materia3} </p>
            <p> Correo Electronico: ${student.email} </p>
            <button>Eliminar</button>
         </div>
         `;   
    }
    document.getElementById("studentList").innerHTML=card;


//}
function searchToDataBase(){
    $.ajax({
        url:"./app/get_students.php",
        type:"GET",
        dataType:"json",
        success:function(response){
            console.log(response);
            if (response.success) {
                console.log(response.data);
                response.data.forEach(displayCards);   
                
            }else{
                console.log("Error en la la respuesta del servidor");
            }

        },
        error:function(xhr,status,error){
            console.log(error)

        }
    })
}
function init(){
    searchToDataBase();
}
window.onload=init;
function displayTables(){
    let table="";
    for (let i=0;i<students.length;i++){
        let student=students[i];
        table+=`
        <table class='table'>
        <tr>
        <th>Nombre</th>
        <th>Edad</th>
        <th>Genero</th>
        <th>Facultad</th>
        <th>Materia 1</th>
        <th>Materia 2</th>
        <th>Materia 3</th>
        <th>Correo Electronico</th>
      </tr>
      <tr>
      <td>${student.name}</td>
      <td>${student.age}</td>
      <td>${student.gender}</td>
      <td>${student.faculty} </td>
      <td>${student.materia1} </td>
      <td>${student.materia2} </td>
      <td>${student.materia3} </td>
      <td>${student.email} </td>
    </tr>
</table>
        `;

    }
    document.getElementById("studentTable").innerHTML=table;

}