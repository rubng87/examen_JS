// Datos de trabajo

const flores = [
    {nombre: "rosa", color:"rojo", floracion: "primavera", stock: true},
    {nombre: "rosa", color:"balnco", floracion: "verano", stock: true},
    {nombre: "jazmin", color:"blanco", floracion: "verano", stock: false},
    {nombre: "crisantemo", color:"blanco", floracion: "otoño", stock: false},
    {nombre: "cerezo", color:"blanco", floracion: "primavera", stock: false},
    {nombre: "clavel", color:"rojo", floracion: "verano", stock: true},
]

flores.sort( (a, b) => {
    return a.nombre.localeCompare(b.nombre, "es-ES", {numeric: true});
})


// console.log(flores);

// Tiene que mostrasrse en el HTML los datos de las flores
// de esta manera:
// Como lista
// Flor: rosa, de color rojo, florece e primavera y tenemos stock.

let ejercicio1 = document.getElementById('ejercicio1');
let html1 = "<ul>";


//for clásico
// for (let i = 0; i < flores.length; i++) {
//     console.log(flores[i]);
// }

flores.forEach(flor => {
    let textoStock = ""
    if (!flor.stock) {
        textoStock = "no ";
    } 
    html1 += `<li>Flor: ${flor.nombre}, de color ${flor.color}, florece en ${flor.floracion} y ${textoStock}tenemos stock.</li>`;

})

html1 += "</ul>";





ejercicio1.innerHTML = html1;