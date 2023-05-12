//  --------------------------------- EJERCICIO 1 ---------------------------------

/* let formulario = document.getElementById("formulario")
const inputEstatura = document.getElementById("estatura")
const inputPeso = document.getElementById("peso")
const imc = document.getElementById("imc")

formulario.addEventListener("submit", (e) => {
  e.preventDefault()
  imc.value = calcularImc(inputEstatura.value, inputPeso.value)
})

function calcularImc(estatura, peso) {
  return peso / (estatura / 100) ** 2
} */
 

//  --------------------------------- EJERCICIO 2 ---------------------------------

const cotizacionDolar = 140   // 1 USD = 140 ARS
let pesoInput = document.getElementById("peso")
let dolarInput = document.getElementById("dolar")

// Escucho evento de tecla presionada (se produce al soltar la tecla)
pesoInput.addEventListener("keyup", (e) => {
  const cantidadPesosAConvertirADolares = parseInt(pesoInput.value) // Convierto a número el valor ingresado por el usuario
  if (isNaN(cantidadPesosAConvertirADolares)) {  // Si el valor ingresado no es un número asigno el valor vacio al input de dolares, asi se vuelve a mostrar el placeholder
    dolarInput.value = ''
  } else {    // Si el valor ingresado es un número entonces hago la conversión a dólares
    const cantidadDolares = convertirPesosADolares(cantidadPesosAConvertirADolares)   // Llamo a la función para convertir pesos a dólares y guardo el resultado en la variable cantidadDolares
    dolarInput.value = cantidadDolares    // Asigno el valor en dólares al input de dólares
  }
})

// Escucho evento de tecla presionada (se produce al soltar la tecla)
dolarInput.addEventListener("keyup", (e) => {
  const cantidadDolaresAConvertirAPesos = parseInt(dolarInput.value) // Convierto a número el valor ingresado por el usuario
  if (isNaN(cantidadDolaresAConvertirAPesos)) { // Si el valor ingresado no es un número asigno el valor vacio al input de pesos, asi se vuelve a mostrar el placeholder
    pesoInput.value = ''
  } else {    // Si el valor ingresado es un número entonces hago la conversión a pesos
    const cantidadPesos = convertirDolaresAPesos(cantidadDolaresAConvertirAPesos)  // Llamo a la función para convertir dólares a pesos y guardo el resultado en la variable cantidadPesos
    pesoInput.value = cantidadPesos     // Asigno el valor en pesos al input de pesos
  }
})

// Función que recibe una cantidad en dolares y devuelve la conversión a pesos
function convertirDolaresAPesos(cantidadDolares) {
  const cantidadPesos = cantidadDolares * cotizacionDolar
  return cantidadPesos
}

// Función que recibe una cantidad en pesos y devuelve la conversión a dólares
function convertirPesosADolares(cantidadPesos) {
  const cantidadDolares = cantidadPesos / cotizacionDolar
  return cantidadDolares
}