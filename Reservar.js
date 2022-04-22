var opcion = document.getElementById("opcion")
var total = document.getElementById("Total")
opcion.addEventListener("change", () => {

    if (opcion.value == 0) {
        total.value = "$0"
    }
    if (opcion.value == 1) {
        total.value = "$1.200"
    }
    if (opcion.value == 2) {
        total.value = "$20.000"
    }
    if (opcion.value == 3) {
        total.value = "$30.000"
    }


})