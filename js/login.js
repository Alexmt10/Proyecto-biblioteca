// Definir el mapa para almacenar los datos de usuario
const users = new Map();
users.set('Jaime', 'root');
users.set('Alejandro', 'root');
users.set('Pedro', 'root');
// Puedes agregar más usuarios y contraseñas según sea necesario

// Función para iniciar sesión
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (users.has(username) && users.get(username) === password) {
        // Inicio de sesión exitoso
        alert('Inicio de sesión exitoso');
        // Redirigir a la página de acciones.html
        window.location.href = 'listaLibros.html';
    } else {
        // Inicio de sesión fallido
        alert('Nombre de usuario o contraseña incorrectos');
    }
}
