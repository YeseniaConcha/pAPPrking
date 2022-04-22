const Registrarse = document.getElementById("Registrarse")
const Enviar = document.getElementById("Enviar")

Registrarse.addEventListener("click", () => {
    var Nombre = document.getElementById("exampleInputNombre1").value

    var Email = document.getElementById("exampleInputEmail1").value

    var password1 = document.getElementById("exampleInputPassword1").value

    var password2 = document.getElementById("exampleInputPassword2").value
    if (Nombre.length > 0 && Email.length > 0 && password1.length > 0 && password2.length > 0) {
        if (password1 == password2) {
            Enviar.click()
        } else {
            alert("las contraseñas son diferentes")
        }
    } else {
        alert("debe completar todos los campos")
    }
})