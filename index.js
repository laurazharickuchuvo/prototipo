const bVerdadero = document.getElementById("btrue");
const bfalso = document.getElementById("bfalse");
const brecargar = document.getElementById("breload");
const correcto = document.getElementById("correcto");
const incorrecto = document.getElementById("incorrecto");


bVerdadero.addEventListener("click", () => {
    incorrecto.style.display = "";
    correcto.style.display = "none";
    bVerdadero.style.display = "none";
    bfalso.style.display = "none";
    brecargar.style.display = "";
});

bfalso.addEventListener("click", () => {
    correcto.style.display = "";
    incorrecto.style.display = "none";
    bVerdadero.style.display = "none";
    bfalso.style.display = "none";
    brecargar.style.display = "";
});

brecargar.addEventListener("click", () => {
    location.reload();
});