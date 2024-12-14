// Saludo inicial

function saludar() {
    alert("Proyecto coder");
}

// Array para almacenar los productos seleccionados
let carrito = [];

// Lista de productos disponibles
const productos = [
    {   nombre: "Filtro de Aceite", 
        precio: 15000 },
    {   nombre: "Batería", 
        precio: 85000 },
    {   nombre: "Llanta", 
        precio: 120000 },
    {   nombre: "Aceite de Motor", 
        precio: 30000 },
    {   nombre: "Amortiguadores",
        precio: 70000 }
];

// Función para mostrar el menú
function Mostrar_Menu() {
    let men = prompt(
    "Bienvenido a la Tienda de Repuestos\n" +
    "1. Ver productos disponibles\n" +
    "2. Agregar producto al carrito\n" +
    "3. Ver carrito\n" +
    "4. Vaciar carrito\n" +
    "5. Salir"
    );

    return men;
}

// Función para mostrar los productos cambiar
function Mostrar_Productos() {
    let productos_Lista = "Productos disponibles:\n";
    productos.forEach((producto, indice) => {
        productos_Lista += `${indice + 1}. ${producto.nombre} - $${producto.precio}\n`;
    });
    alert(productos_Lista);
    
}

// Función para agregar productos al carrito
function agregar_Carrito() {
    Mostrar_Productos();
    const prod_carr = parseInt(prompt("Ingrese el número del producto que desea agregar:"));
    if (prod_carr >= 1 && prod_carr <= productos.length) {
        carrito.push(productos[prod_carr - 1]);
        alert(`"${productos[prod_carr - 1].nombre}" ha sido agregado al carrito.`);
    } else {
        alert("Opción no válida.");
    }
}


// Función para ver el carrito
function ver_Carrito() {
    if (carrito.length === 0) {
        alert("El carrito está vacío.");
        return;
    }

    let carrtList = "Productos en tu carrito:\n";
    let total = 0;

    carrito.forEach((item, indice) => {
        carrtList += `${indice + 1}. ${item.nombre} - $${item.precio}\n`;
        total += item.precio;
    });

    carrtList += `\nTotal: $${total}`;
    alert(carrtList);
}

// Función para vaciar el carrito
function borrar_Carrito() {
    carrito = [];
    alert("El carrito ha sido vaciado.");
}

// Programa
function main() {

    saludar();

    let opcion;
    do {
        opcion = Mostrar_Menu();

        switch (opcion) {
            case "1":
                Mostrar_Productos();
                break;
            case "2":
                agregar_Carrito();
                break;
            case "3":
                ver_Carrito();
                break;
            case "4":
                borrar_Carrito();
                break;
            case "5":
                alert("Gracias por visitar la Tienda de Repuestos. ¡Hasta luego!");
                break;
            default:
                alert("Opción no válida, intenta de nuevo.");
        }
    } while (opcion !== "5");
}

// Ejecutar el programa
main();
