function saveItems(facultades){
    //console.log(item);
    //let val = JSON.stringify(item);
    //console.log(val);
    //localStorage.setItem("facultades",val);
    localStorage.setItem("facultades", JSON.stringify(facultades));
}