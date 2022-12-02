var modal = document.getElementById("formulario");

var buttonproduto1= document.getElementById("reservar-produto-1");
buttonproduto1.onclick = function () {
    modal.style.display = "block";
}


var buttonproduto2= document.getElementById("reservar-produto-2");
buttonproduto2.onclick = function () {
    modal.style.display = "block";
}


var buttonproduto3= document.getElementById("reservar-produto-3");
buttonproduto3.onclick = function () {
    modal.style.display = "block";
}


var span = document.getElementsByClassName("fechar")[0];

span.onclick = function () {
    modal.style.display = "none";
}

var Enviar = document.getElementById("enviar")[0];

buttonEnviar.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target = modal) {
        modal.style.display = "none";
    }
}