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

// ==============================================================================

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

let formSeleccion = document.getElementById("form-seleccion");
let radioColor = document.getElementsByName("color");
let radioFloracion = document.getElementsByName("floracion");
let radioStock = document.getElementsByName("stock");

formSeleccion.addEventListener("change", (e) => {
    e.preventDefault();
    // console.log("Has hecho un cambio");

    let color = ""    
    for (let i = 0; i < radioColor.length; i++) {
        if (radioColor[i].checked) {
            color = radioColor[i].value;
            break;
        }
    }
    console.log(color);

    let floracion = ""    
    for (let i = 0; i < radioFloracion.length; i++) {
        if (radioFloracion[i].checked) {
            floracion = radioFloracion[i].value;
            break;
        }
    }
    console.log(floracion);

    let stock = ""    
    for (let i = 0; i < radioStock.length; i++) {
        if (radioStock[i].checked) {
            stock = radioStock[i].value;
            break;
        }
    }
    console.log(stock);
})
