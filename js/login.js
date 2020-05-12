var intentos = 3;
class Users{
    constructor(user,pass){
        this.user= user;
        this.pass= pass;
    }
}
function validar(){
    var user1 = new Users("jdakill","jafetito1");
    var username = document.getElementById("user").value;
    var password = document.getElementById("pass").value;
    if ( username == user1.user&& password == user1.pass){
        alert ("Se ha ingresado correctamente");
        return false;
}else{
    intentos --;

    alert("Te quedan "+intentos+" intentos;");

    if( attempt == 0){
        document.getElementById("user").disabled = true;
        document.getElementById("pass").disabled = true;
        document.getElementById("submit").disabled = true;
        return false;
    }
}
}
