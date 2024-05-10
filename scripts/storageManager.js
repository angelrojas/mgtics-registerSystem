function saveItems(facultades) {
    // Obtener las facultades existentes del almacenamiento local
    let storedFacultades = JSON.parse(localStorage.getItem("facultades")) || [];

    // Agregar la nueva facultad a las facultades existentes
    storedFacultades.push(...facultades);

    // Guardar todas las facultades en el almacenamiento local
    localStorage.setItem("facultades", JSON.stringify(storedFacultades));
}
