let libros = [
    { titulo: 'Harry Potter y la piedra filosofal', autor: 'J.K. Rowling', ejemplares: 1, genero: 'Fantasía', precio: 19.99, foto: '' },
    { titulo: 'El gran Gatsby', autor: 'F. Scott Fitzgerald', ejemplares: 1, genero: 'Ficción', precio: 12.99, foto: '' },
    { titulo: '1984', autor: 'George Orwell', ejemplares: 1, genero: 'Ciencia Ficción', precio: 15.99, foto: '' },
    { titulo: 'Orgullo y prejuicio', autor: 'Jane Austen', ejemplares: 1, genero: 'Clásico', precio: 11.99, foto: '' },
    { titulo: 'Matar a un ruiseñor', autor: 'Harper Lee', ejemplares: 1, genero: 'Ficción', precio: 14.99, foto: '' },
    { titulo: 'El señor de los anillos: La comunidad del anillo', autor: 'J.R.R. Tolkien', ejemplares: 1, genero: 'Fantasía', precio: 18.99, foto: '' },
    { titulo: 'Don Quijote de la Mancha', autor: 'Miguel de Cervantes Saavedra', ejemplares: 1, genero: 'Clásico', precio: 13.99, foto: '' },
    { titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez', ejemplares: 1, genero: 'Realismo Mágico', precio: 17.99, foto: '' },
    { titulo: 'Crónica de una muerte anunciada', autor: 'Gabriel García Márquez', ejemplares: 1, genero: 'Ficción', precio: 11.99, foto: '' },
    { titulo: 'Los juegos del hambre', autor: 'Suzanne Collins', ejemplares: 1, genero: 'Ciencia Ficción', precio: 14.99, foto: '' },
    { titulo: 'El código Da Vinci', autor: 'Dan Brown', ejemplares: 1, genero: 'Suspense', precio: 12.99, foto: '' },
    { titulo: 'El alquimista', autor: 'Paulo Coelho', ejemplares: 1, genero: 'Autoayuda', precio: 9.99, foto: '' },
    { titulo: 'El nombre del viento', autor: 'Patrick Rothfuss', ejemplares: 1, genero: 'Fantasía', precio: 16.99, foto: '' },
    { titulo: 'El retrato de Dorian Gray', autor: 'Oscar Wilde', ejemplares: 1, genero: 'Clásico', precio: 10.99, foto: '' },
    { titulo: 'El laberinto de los espíritus', autor: 'Carlos Ruiz Zafón', ejemplares: 1, genero: 'Misterio', precio: 13.99, foto: '' },
    { titulo: 'La sombra del viento', autor: 'Carlos Ruiz Zafón', ejemplares: 1, genero: 'Misterio', precio: 14.99, foto: '' },
    { titulo: 'It', autor: 'Stephen King', ejemplares: 1, genero: 'Terror', precio: 16.99, foto: '' },
    { titulo: 'Anna Karenina', autor: 'Lev Tolstói', ejemplares: 1, genero: 'Clásico', precio: 11.99, foto: '' },
    { titulo: 'Moby Dick', autor: 'Herman Melville', ejemplares: 1, genero: 'Aventura', precio: 13.99, foto: '' },
    { titulo: 'El guardián entre el centeno', autor: 'J.D. Salinger', ejemplares: 1, genero: 'Ficción', precio: 12.99, foto: '' },
    { titulo: 'Orgullo y prejuicio', autor: 'Jane Austen', ejemplares: 1, genero: 'Romance', precio: 10.99, foto: '' },
    { titulo: 'La catedral del mar', autor: 'Ildefonso Falcones', ejemplares: 1, genero: 'Histórico', precio: 15.99, foto: '' },
    { titulo: 'La insoportable levedad del ser', autor: 'Milan Kundera', ejemplares: 1, genero: 'Filosófico', precio: 12.99, foto: '' },
    { titulo: 'Las aventuras de Tom Sawyer', autor: 'Mark Twain', ejemplares: 1, genero: 'Aventura', precio: 11.99, foto: '' },
    { titulo: 'El perfume', autor: 'Patrick Süskind', ejemplares: 1, genero: 'Suspense', precio: 14.99, foto: '' },
    { titulo: 'Rebelión en la granja', autor: 'George Orwell', ejemplares: 1, genero: 'Sátira', precio: 11.99, foto: '' },
    { titulo: 'El cazador de autógrafos', autor: 'Carlos Reyes', ejemplares: 1, genero: 'Romance', precio: 9.99, foto: '' },
    { titulo: 'El cuento de la criada', autor: 'Margaret Atwood', ejemplares: 1, genero: 'Distopía', precio: 15.99, foto: '' },
    { titulo: 'Crimen y castigo', autor: 'Fyodor Dostoevsky', ejemplares: 1, genero: 'Drama', precio: 13.99, foto: '' },
    { titulo: 'La naranja mecánica', autor: 'Anthony Burgess', ejemplares: 1, genero: 'Ciencia Ficción', precio: 14.99, foto: '' },
    { titulo: 'El amor en los tiempos del cólera', autor: 'Gabriel García Márquez', ejemplares: 1, genero: 'Romance', precio: 12.99, foto: '' },
    { titulo: 'La hoguera de las vanidades', autor: 'Tom Wolfe', ejemplares: 1, genero: 'Sátira', precio: 11.99, foto: '' },
    { titulo: 'El ruido y la furia', autor: 'William Faulkner', ejemplares: 1, genero: 'Drama', precio: 13.99, foto: '' },
    { titulo: 'El guardian invisible', autor: 'Dolores Redondo', ejemplares: 1, genero: 'Misterio', precio: 14.99, foto: '' },
    { titulo: 'La chica del tren', autor: 'Paula Hawkins', ejemplares: 1, genero: 'Suspense', precio: 15.99, foto: '' },
    { titulo: 'El código del dinero', autor: 'Raimon Samsó', ejemplares: 1, genero: 'Finanzas', precio: 12.99, foto: '' },
    { titulo: 'El club de la lucha', autor: 'Chuck Palahniuk', ejemplares: 1, genero: 'Ficción', precio: 13.99, foto: '' },
    { titulo: 'Los pilares de la tierra', autor: 'Ken Follett', ejemplares: 1, genero: 'Histórico', precio: 16.99, foto: '' },
    { titulo: 'El poder del ahora', autor: 'Eckhart Tolle', ejemplares: 1, genero: 'Autoayuda', precio: 10.99, foto: '' },
    { titulo: 'El silencio de la ciudad blanca', autor: 'Eva García Sáenz de Urturi', ejemplares: 1, genero: 'Thriller', precio: 14.99, foto: '' },
    { titulo: 'Un mundo feliz', autor: 'Aldous Huxley', ejemplares: 1, genero: 'Ciencia Ficción', precio: 13.99, foto: '' },
    { titulo: 'El cuaderno de Maya', autor: 'Isabel Allende', ejemplares: 1, genero: 'Romance', precio: 11.99, foto: '' }
];


//Funcion mejorada que crea cada atributo de los objetos del array en un tr
function mostrarListaLibros() {
    const listaLibros = document.getElementById('listaLibros');

    libros.forEach(libro => {
        const fila = document.createElement('tr');

        const tituloCelda = document.createElement('td');
        tituloCelda.textContent = libro.titulo;
        fila.appendChild(tituloCelda);

        const autorCelda = document.createElement('td');
        autorCelda.textContent = libro.autor;
        fila.appendChild(autorCelda);

        const generoCelda = document.createElement('td');
        generoCelda.textContent = libro.genero;
        fila.appendChild(generoCelda);

        const numEjemplares = document.createElement('td');
        numEjemplares.textContent = libro.ejemplares;
        fila.appendChild(numEjemplares);

        const accionesCelda = document.createElement('td');

        const btnAñadir = document.createElement('button');
        btnAñadir.textContent = 'Añadir';
        btnAñadir.onclick = () => añadirLibro(libro);
        accionesCelda.appendChild(btnAñadir);

        const btnEliminar = document.createElement('button');
        btnEliminar.textContent = 'Eliminar';
        btnEliminar.onclick = () => eliminarLibro(libro.titulo);
        accionesCelda.appendChild(btnEliminar);

        const btnModificar = document.createElement('button');
        btnModificar.textContent = 'Modificar';
        btnModificar.onclick = () => modificarLibro(libro.titulo);
        accionesCelda.appendChild(btnModificar);

        fila.appendChild(accionesCelda);

        listaLibros.appendChild(fila);
    });
}

function añadirLibro(libro) {
    const nuevosEjemplares = prompt(`¿Cuántos ejemplares de "${libro.titulo}" deseas añadir?`);
    if (nuevosEjemplares !== null && !isNaN(nuevosEjemplares)) {
        libro.ejemplares += parseInt(nuevosEjemplares);
        alert(`Se añadieron ${nuevosEjemplares} ejemplares de "${libro.titulo}".`);
    }
}

function eliminarLibro(titulo) {
    const confirmacion = confirm(`¿Estás seguro que deseas eliminar el libro "${titulo}"?`);
    if (confirmacion) {
        const indice = libros.findIndex(libro => libro.titulo === titulo);
        if (indice !== -1) {
            libros.splice(indice, 1);
            alert(`El libro "${titulo}" ha sido eliminado.`);
            const filaAEliminar = document.querySelector(`tr[data-titulo="${titulo}"]`);
            if (filaAEliminar) {
                filaAEliminar.remove();
            }
        } else {
            alert(`El libro "${titulo}" no se encontró.`);
        }
    }
}



function eliminarLibro(titulo) {
    const confirmacion = confirm(`¿Estás seguro que deseas eliminar el libro "${titulo}"?`);
    if (confirmacion) {
        const indice = libros.findIndex(libro => libro.titulo === titulo);
        if (indice !== -1) {
            libros.splice(indice, 1);
            alert(`El libro "${titulo}" ha sido eliminado.`);
            mostrarListaLibros(); // Actualizar la tabla HTML después de eliminar el libro
        } else {
            alert(`El libro "${titulo}" no se encontró.`);
        }
    }
}




