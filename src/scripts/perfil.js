export async function actualizarPerfil(data) {

    const datosPerfil = Array.isArray(data) ? data[0] : data;
    
    //*********** PERFIL ************** */
    const rolElement = document.getElementById('rol');
    if (rolElement) {
        rolElement.textContent = datosPerfil.rol;
    }

    const descripcionElement = document.getElementById('descripcion');
    if (descripcionElement) {
        descripcionElement.textContent = datosPerfil.description;
    }

    const skillsElement = document.getElementById('skills');
    if (skillsElement) {
        skillsElement.textContent = datosPerfil.skills.join(', ');
    }

    const avatarElement = document.getElementById('avatar');
    if (avatarElement) {
        avatarElement.src = datosPerfil.avatar;
        avatarElement.alt = 'Foto de perfil de ' + datosPerfil.username;
    }
}
