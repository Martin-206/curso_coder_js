
//asegura que el script se ejecute completo
document.addEventListener("DOMContentLoaded", function() {
    //listado de productos
    const productos = [
        { nombre: "Filtro de Aceite", 
            precio: 15000 },
        { nombre: "Batería", 
            precio: 85000 },
        { nombre: "Llanta",
            precio: 120000 },
        { nombre: "Aceite de Motor", 
            precio: 30000 },
        { nombre: "Amortiguadres", 
            precio: 70000 }
    ];

    //carrito en el storage
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    //botones del html

    document.getElementById('verProductos').addEventListener('click', mostrarProductos);
    document.getElementById('agregarProducto').addEventListener('click', agregarCarrito);
    document.getElementById('verCarrito').addEventListener('click', verCarrito);
    document.getElementById('vaciarCarrito').addEventListener('click', borrarCarrito);

    //funcion mostrar

    function mostrarProductos() {
        const output = document.getElementById('output');
        output.innerHTML = '<h2>Productos Disponibles:</h2>';
        productos.forEach((producto, index) => {
            output.innerHTML += `<p>${index + 1}. ${producto.nombre} - $${producto.precio}</p>`;
        });
    }


    //funcion de agregar producto

    function agregarCarrito() {
        const prodIndex = parseInt(prompt("Ingrese el número del producto para agregar al carrito:")) - 1;
        if (prodIndex >= 0 && prodIndex < productos.length) {
            carrito.push(productos[prodIndex]);
            localStorage.setItem('carrito', JSON.stringify(carrito));
            alert(`${productos[prodIndex].nombre} ha sido agregado al carrito.`);
        } else {
            alert("Número de producto no válido.");
        }
    }

    //ver el carrito

    function verCarrito() {
        const output = document.getElementById('output');
        if (carrito.length === 0) {
            output.innerHTML = "<p>El carrito está vacío.</p>";
        } else {
            output.innerHTML = '<h2>Productos en el Carrito:</h2>';
            carrito.forEach((item, index) => {
                output.innerHTML += `<p>${index + 1}. ${item.nombre} - $${item.precio}</p>`;
            });
        }
    }

    //borrar el carrito

    function borrarCarrito() {
        carrito = [];
        localStorage.setItem('carrito', JSON.stringify(carrito));
        alert("El carrito ha sido vaciado.");
    }
});
