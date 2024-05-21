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

if($_SERVER["REQUEST_METHOD"] == "GET"){
    if ($conn->connect_error){
    die("Error de conexion de a base datos" . $conn->connect_error);
    }

    $query = "SELECT id,name,age FROM estudiantes";

    $stmt=$conn->prepare($query);
    $stmt->execute();

    $results=$stmt->get_result();

    if ($result->num_rows >0) {
        $data = array();
        while ($row = $result-> fetch_assoc()) {
            
            $data[] = array(
                "id"=>$row["id"],
                "name"=>$row["name"],
                "age"=>$row["age"]

            );
        }
        echo json_encode(array("success"=>true, "data"=> $data));
    }else{
    echo json_encode(array("success"=>false, "error" => "No se encontraron datos"));
    }

    $stmt->close();
}else{
    echo json_encode(array("success"=>false, "error" => "Solicitud no valida"));

    
}
$conn->close();
?>