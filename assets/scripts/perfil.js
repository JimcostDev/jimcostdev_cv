export async function actualizarPerfil(perfilData) {
    // NOMBRE
    const nombreDelUsuario = perfilData.nombre;
    const nombreElement = document.getElementById('nombre-usuario');
    nombreElement.textContent = nombreDelUsuario;
    // ROL
    const rolElement = document.getElementById('rol-user')
    if (rolElement){
        rolElement.textContent = perfilData.rol;
     }
    // DESCRIPCIÓN
    const descriptionElement = document.getElementById('descripcion-user')
    if (descriptionElement){
        descriptionElement.textContent = perfilData.descripcion;
    }
}