// Variables globales
var carrito = [];

// Función para agregar un producto al carrito
function agregarAlCarrito(producto) {
  carrito.push(producto);
}

// Función para calcular el total del carrito
function calcularTotalCarrito() {
  var total = 0;
  for (var i = 0; i < carrito.length; i++) {
    total += carrito[i].precio;
  }
  return total;
}

// Ejemplo de uso
var producto1 = { nombre: "Camiseta", precio: 20 };
var producto2 = { nombre: "Pantalón", precio: 40 };

agregarAlCarrito(producto1);
agregarAlCarrito(producto2);

console.log("Total del carrito: $" + calcularTotalCarrito());