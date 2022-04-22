const Pagar = document.getElementById("Pagar")


Pagar.addEventListener("click", () => {
    var Tarjeta = document.getElementById("validationDefault01").value

    var Nombre = document.getElementById("validationDefault02").value

    var Expiracion = document.getElementById("validationDefault03").value

    var CVC = document.getElementById("validationDefault05").value
    if (Tarjeta.length > 0 && Nombre.length > 0 && Expiracion.length > 0 && CVC.length > 0) {
        alert("Su reserva se ha completado con exito")
    } else {
        alert("debe completar todos los campos")
    }
})