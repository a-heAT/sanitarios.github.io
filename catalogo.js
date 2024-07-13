// catalogo.js

document.addEventListener('DOMContentLoaded', () => {
    // Obtener todos los botones de compra
    const botonesCompra = document.querySelectorAll('.btn-comprar');

    // Añadir un evento click a cada botón de compra
    botonesCompra.forEach(boton => {
        boton.addEventListener('click', (event) => {
            // Obtener el producto
            const producto = event.target.closest('.producto');
            const nombreProducto = producto.querySelector('h3').textContent;
            const precioProducto = producto.querySelector('.precio').textContent;

            // Mostrar una alerta con el nombre y el precio del producto
            alert(`¡Gracias por tu interés en ${nombreProducto}!\nPrecio: ${precioProducto}\n¡Pronto te contactaremos!`);
        });
    });

    // Filtro de Productos
    const filtroCategoria = document.querySelector('#filtro-categoria');

    filtroCategoria.addEventListener('change', (event) => {
        const categoriaSeleccionada = event.target.value;
        const productos = document.querySelectorAll('.producto');

        productos.forEach(producto => {
            if (categoriaSeleccionada === 'todos' || producto.classList.contains(categoriaSeleccionada)) {
                producto.style.display = 'block';
            } else {
                producto.style.display = 'none';
            }
        });
    });
});
