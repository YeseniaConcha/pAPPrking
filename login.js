const Iniciar = document.getElementById("Iniciar")
const Enviar = document.getElementById("Enviar")

console.log("mensaje")

Iniciar.addEventListener("click", () => {

    var Email = document.getElementById("exampleInputEmail1").value

    var Contraseña = document.getElementById("exampleInputPassword1").value


    if (Email.length > 0 && Contraseña.length > 0) {
        Enviar.click()
    } else {
        alert("debe completar todos los campos")
    }
})