// Datos de trabajo
localStorage.removeItem('flores')

const flores = JSON.parse(localStorage.getItem('flores')) || [
  { nombre: "rosa", color: "rojo", floracion: "primavera", stock: true },
  { nombre: "rosa", color: "blanco", floracion: "verano", stock: true },
  { nombre: "jazmín", color: "blanco", floracion: "verano", stock: false },
  { nombre: "crisantemo", color: "blanco", floracion: "otoño", stock: false },
  { nombre: "cerezo", color: "blanco", floracion: "primavera", stock: false },
  { nombre: "clavel", color: "rojo", floracion: "verano", stock: true },
];



// ==============================================================================
// EJERCICIO 1

// console.log(flores);

// Tiene que mostrarse en el HTML los datos de las flores
// de esta manera:
// Como lista
// Flor: rosa, de color rojo, florece en primavera y tenemos stock

// for clásico
// for (let i = 0; i < flores.length; i++) {
//     console.log(flores[i]);
// }

let ejercicio1 = document.getElementById("ejercicio1");

mostrarFlores();

function mostrarFlores() {

  flores.sort((a, b) => {
    return a.nombre.localeCompare(b.nombre, "es-ES", { numeric: true });
  }); 


  let html1 = "<ul>";

  flores.forEach((flor) => {
    let textoStock = "";
    if (!flor.stock) {
      textoStock = "no ";
    }
    html1 += `<li>Flor: ${flor.nombre}, de color ${flor.color}, florece en ${flor.floracion} y ${textoStock}tenemos stock</li>`;
  });

  html1 += "</ul>";
  ejercicio1.innerHTML = html1;
}

// ==============================================================================
// EJERCICIO 2
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
// "No hay flor que cumpla las condiciones"

let formSeleccion = document.getElementById("form-seleccion");
let radioColor = document.getElementsByName("color");
let radioFloracion = document.getElementsByName("floracion");
let radioStock = document.getElementsByName("stock");
let ejercicio3 = document.getElementById("ejercicio3");

formSeleccion.addEventListener("change", (e) => {
  ejercicio3.innerHTML = "";
  e.preventDefault();
  // console.log("Has hecho un cambio");

  let color = "";
  for (let i = 0; i < radioColor.length; i++) {
    if (radioColor[i].checked) {
      color = radioColor[i].value;
      break;
    }
  }
  // console.log(color);

  let floracion = "";
  for (let i = 0; i < radioFloracion.length; i++) {
    if (radioFloracion[i].checked) {
      floracion = radioFloracion[i].value;
      break;
    }
  }
  // console.log(floracion);

  let stock = "";
  for (let i = 0; i < radioStock.length; i++) {
    if (radioStock[i].checked) {
      stock = radioStock[i].value;
      break;
    }
  }
  //   stock = Boolean(stock);

  let respuestaHTML = "<ul>";

  flores.forEach((flor) => {
    // console.log(typeof flor.stock);
    let textoStock = "";
    if (!flor.stock) {
      textoStock = "no ";
    }
    // console.log(flores);
    // if (flor.stock == stock) console.log(stock);
    florStockString = String(flor.stock);
    if (
      flor.color == color &&
      flor.floracion == floracion &&
      flor.stock == stock
    ) {
      respuestaHTML += `<li>Flor: ${flor.nombre}, de color ${flor.color}, florece en ${flor.floracion} y tenemos ${textoStock}stock</li>`;
    }
  });
  respuestaHTML += "</ul>";

  if (respuestaHTML == "<ul></ul>") {
    respuestaHTML = "No hay flor que cumpla las condiciones";
  }

  ejercicio3.innerHTML = respuestaHTML;
});

// ==============================================================================
// EJERCICIO 4

// Obtener la flor que corresponda a la indicación del usuario.

let ejercicio4 = document.getElementById("ejercicio4");
let formFlor = document.getElementById("form-flor");

formFlor.addEventListener("submit", (e) => {
  e.preventDefault();
  let respuestaHTML = "";

  let respuestaUsuario = formFlor[0].value.toLocaleLowerCase();
  if (respuestaUsuario.trim() == "") {
    respuestaHTML = "No se aceptan datos sin contenido";
    ejercicio4.innerHTML = respuestaHTML;
    return;
  }

  flores.forEach((flor) => {
    if (flor.nombre.toLocaleLowerCase().includes(respuestaUsuario)) {
      respuestaHTML += `<p>Flor: ${flor.nombre}, de color ${flor.color}, florece en ${flor.floracion} y tenemos stock</p>`;
    }
  });
  if (respuestaHTML == "") {
    respuestaHTML = "No hay flor que cumpla las condiciones";
  }
  ejercicio4.innerHTML = respuestaHTML;
});

// ==============================================================================
// EJERCICIO 5

// Crea y programa un formulario para añadir flores al array.
// Por ejemplo:
// flor: cyclamen, color:rosa, floracion: invierno, stock:true
// Tiene que actualizarse automáticamente la lista del ejercicio 1

let formAddFlower = document.getElementById("form-add-flower");

formAddFlower.addEventListener("submit", (e) => {
  e.preventDefault();

  let nombre = formAddFlower[0].value.toLocaleLowerCase();
  let color = formAddFlower[1].value.toLocaleLowerCase();
  let floracion = formAddFlower[2].value;
  let stock = formAddFlower[3].checked;
  let miFlor = {
    nombre: nombre,
    color: color,
    floracion: floracion,
    stock: stock,
  };

  // console.log(miFlor);
  flores.push(miFlor);

  localStorage.setItem("flores", JSON.stringify(flores));

  mostrarFlores();
  // console.log(flores);
  // console.log(formAddFlower[3].checked);
});



// ==============================================================================
// EJERCICIO 6

// Crea y programa un formulario para añadir precios a las flores:
// rosa roja : 8.00€
// rosa blanca : 10.00€
// jazmin: 12.00€
// crisantemo: 5.00€
// cerezo: 25.00€
// cyclamen: 4.50€
// Tiene que actualizarse automáticamente la lista del ejercicio 1

// ==============================================================================
// EJERCICIO 7

// Crea la forma de eliminar elementos del array
// Tiene que actualizarse automáticamente la lista del ejercicio 1

// ==============================================================================
// EJERCICIO 8

// Crea la forma de editar elementos del array de flores
// Todas las propiedades deben poder ser editadas: nombre, color, floración, stock  y precio
// Tiene que actualizarse automáticamente la lista del ejercicio 1
