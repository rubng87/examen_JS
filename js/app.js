// Datos de trabajo


const flores = [
    {nombre: "rosa", color: "rojo", floracion: "primavera", stock: true},
    {nombre: "rosa", color: "blanco", floracion: "verano", stock: true},
    {nombre: "jazmín", color: "blanco", floracion: "verano", stock: false},
    {nombre: "crisantemo", color: "blanco", floracion: "otoño", stock: false},
    {nombre: "cerezo", color: "blanco", floracion: "primavera", stock: false},
    {nombre: "clavel", color: "rojo", floracion: "verano", stock: true},
]

flores.sort( (a, b) => { 
    return a.nombre.localeCompare(b.nombre, "es-ES", {numeric: true});   
})

// console.log(flores);
// 1 Ejercicio ==============================================================================

// Tiene que mostrarse en el HTML los datos de las flores
// de esta manera:
// Como lista
// Flor: rosa, de color rojo, florece en primavera y tenemos stock

let ejercicio1 = document.getElementById("ejercicio1");
let html1 = "<ul>";

// for clásico
// for (let i = 0; i < flores.length; i++) {
//     console.log(flores[i]);
// }

flores.forEach( flor => {
    let textoStock = ""
    if (!flor.stock) {
        textoStock = "no ";
    } 
    html1 += `<li>Flor: ${flor.nombre}, de color ${flor.color}, florece en ${flor.floracion} y ${textoStock}tenemos stock</li>`;
})

html1 += "</ul>";
ejercicio1.innerHTML = html1;

// 2 Ejercicio ==============================================================================

// Listar las flores de color blanco que florecen en verano
// Modelo de mensaje de salida:
// Flor: rosa, de color blanco, florece en verano y tenemos stock
// se mostrará el resultado en #ejercicio2

let ejercicio2 = document.getElementById("ejercicio2");
let html2 = "<ul>";

flores.forEach((flor) => {
  let textoStock = "";
  if (!flor.stock) {
    textoStock = "no ";
  }
  if (flor.color === "blanco" && flor.floracion === "verano") {
    html2 += `<li>Flor: ${flor.nombre}, de color ${flor.color}, florece en ${flor.floracion} y ${textoStock}tenemos stock</li>`;
  }
});

html2 += "</ul>";
ejercicio2.innerHTML = html2;

// ==============================================================================
// EJERCICIO 3

// A partir del formulario form-seleccion, hay que mostrar que datos 
// corresponden a la selección realizada.
// Se mostrarán en forma de lista como los modelos anteriores.
// Si no hay ninguna flor que cumpla las condiciones, se mostrará este mensaje:
// "No hay ninguna flor que cumpla las condiciones"

let formSeleccion = document.getElementById("form-seleccion")

formSeleccion.addEventListener("change", (e) => {
    e.preventDefault();
    console.log("hiciste un cambio");
})




let ejercicio3 = document.getElementById("ejercicio3");
let html3 = "<ul>";

let seleccion = ""

for (let i = 0; i < formSeleccion.length; i++) {
    if (formSeleccion[i].checked == true) {
        seleccion = formSeleccion[i].value
        
    } 
}
html3 += "</ul>";
ejercicio3.innerText = html3;

let formulario = document.getElementById("form-seleccion");