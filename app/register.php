<?php

//CORS
// Permitir solicitudes desde cualquier origen
header("Access-Control-Allow-Origin: *");
// Permitir métodos HTTP GET, POST, y OPTIONS
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
// Permitir los encabezados Content-Type y Authorization en las solicitudes CORS
header('Content-Type: application/json');
header("Access-Control-Allow-Headers: Content-Type, Authorization");

include("connection.php");

if($_SERVER["REQUEST_METHOD"] == "POST"){
    if (isset($_POST["name"],$_POST["age"],$_POST["gender"],$_POST["faculty"],$_POST["materia1"],$_POST["materia2"],$_POST["materia3"],$_POST["email"],$_POST["password"])) {
        $nombre = $_POST["name"];
        $edad = $_POST["age"];
        $gender = $_POST["gender"];
        $faculty = $_POST["faculty"];
        $materia1 = $_POST["materia1"];
        $materia2 = $_POST["materia2"];
        $materia3 = $_POST["materia3"];
        $email = $_POST["email"];
        $password =$_POST["password"];

        $stmt_insert_usuarios =$conn->prepare("INSERT INTO estudiantes (name,age,gender,faculty,materia1,materia2,materia3,email,password) VALUES (?,?,?,?,?,?,?,?,?)");
        $stmt_insert_usuarios->bind_param("sssssssss",$nombre,$edad,$gender,$faculty,$materia1,$materia2,$materia3,$email,$password);
        $stmt_insert_usuarios->execute();

        echo json_encode(array("success" => true));
        $stmt_insert_usuarios-> close();

       
    }

    $conn->close();
    exit();
}
?>