export async function actualizarUsuario(datosUsuario) {
    //*********** DATOS DEL USUARIO ************** */
    const nombreUsuarioElement = document.getElementById('nombre-usuario');
    if (nombreUsuarioElement) {
        nombreUsuarioElement.textContent = datosUsuario.full_name;
    }
}
