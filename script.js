//Creo la clase de objeto producto como base para cargar los productos 
class Producto {
    constructor(nombre, id, precio, stock) {
        this.nombre = nombre;
        this.id = id;
        this.precio = precio;
        this.stock = stock;
    }

    vender(cantidad) {
        this.stock = this.stock - cantidad;
    }
}

//Cargo el stock de productos que pertenecen a la clase producto
const tabla1 = new Producto("Tabla Taiko", 1, 2000, 10);
const tabla2 = new Producto("Tabla Taikito", 2, 1400, 30);
const gyozas1 = new Producto("Gyozas Carne", 3, 1600, 20);
const gyozas2 = new Producto("Gyozas Veggie", 4, 1300, 40);


//Simulador de la entrega anterior simplificado
function calcularPrecio(precioProducto, cantidadProducto, costoEnvio) {
    return (precioProducto * cantidadProducto) + costoEnvio;
}

//Solicito datos al comprador
alert("Seleccioná el número del producto:" + "\n" + "(1) Tabla Taiko $2.000" + "\n" + "(2) Tabla Taikito  $1.400" + "\n" + "(3) Gyozas Carne $1.600" + "\n" + "(4) Gyozas Veggie $1.300");
let productoSeleccionado = parseInt(prompt("Ingrese el ID/NÚMERO del producto que desea comprar:"));
let cantidad = parseInt(prompt("Ingrese la cantidad de unidades que quiere comprar del producto:"));
const envio = 800; //costo de envio promedio en CABA

//Salida de consola con el precio final segun el ID elegido
if (productoSeleccionado == tabla1.id) {
    alert("El precio final de tu compra es: $" + calcularPrecio(tabla1.precio, cantidad, envio));
    tabla1.vender(cantidad);
} else if (productoSeleccionado == tabla2.id) {
    alert("El precio final de tu compra es: $" + calcularPrecio(tabla2.precio, cantidad, envio));
    tabla2.vender(cantidad);
} else if (productoSeleccionado == gyozas1.id) {
    alert("El precio final de tu compra es: $" + calcularPrecio(gyozas1.precio, cantidad, envio));
    gyozas1.vender(cantidad);
} else if (productoSeleccionado == gyozas2.id) {
    alert("El precio final de tu compra es: $" + calcularPrecio(gyozas2.precio, cantidad, envio));
    gyozas2.vender(cantidad);
} else {
    alert("Error - ingrese un ID valido");
}