// <!-- JS Home -->
let slider = document.querySelector('.slider-contenedor');
let sliderInd = document.querySelectorAll('.slider-test');
let contador = 1;
let tamañoWidth = sliderInd[0].clientWidth;
let intervalo = 3000;

setInterval(function tiempo(){
    slides();
}, intervalo);

function slides(){
    slider.style.transform = 'translate('+ (- tamañoWidth * contador) + 'px';
    slider.style.transition = 'transform 1s';
    contador++;

    if(contador === sliderInd.length){
        contador=0;
        setTimeout(function(){
            slider.style.transform = 'translate(0px)';
            slider.style.transition = 'transform 0s';
        },intervalo)
    }
}

// JS Borrar Usuarios como Administrador

var selectedRow = null;

// Show Alerts
function showAlert(message, className){
    const div = document.createElement("div");
    div.className = `alert alert-${className}`;

    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container");
    const main = document.querySelector(".main");
    container.insertBefore(div, main)

    setTimeout(() => document.querySelector(".alert").remove(), 3000);
}

// Borrar Datos
document.querySelector("#student-list").addEventListener("click", (e) =>{
    target = e.target;
    if(target.classList.contains("delete")){
        target.parentElement.parentElement.remove();
        showAlert("Student Data Delete", "danger");
    }
});
