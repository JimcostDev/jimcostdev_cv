export async function actualizarContacto(contactoData) {
    //TITULO
    const tituloElement = document.getElementById('titulo-contacto');
    if (tituloElement) {
        tituloElement.textContent = contactoData.titulo;
    }
    //CIUDAD
    const ciudadUsuarioElement = document.getElementById('ciudad-usuario');
    if (ciudadUsuarioElement) {
        ciudadUsuarioElement.textContent = contactoData.ciudad;
    }
    //WHATSAPP
    const numeroWhatsappElement = document.getElementById('numero-whatsapp');
    if (numeroWhatsappElement) {
        numeroWhatsappElement.textContent = contactoData.telefono;
    }
    //UBICACIÓN
    const ubicacionUsuarioElement = document.getElementById('ubicacion-user');
    if (ubicacionUsuarioElement) {
        ubicacionUsuarioElement.textContent = contactoData.direccion;
    }
    //EMAIL
    const emailElement = document.getElementById('email-user')
    if (emailElement){
        emailElement.textContent = contactoData.email;
    }
    // WEB
    const webElement = document.getElementById('web-user')
    webElement.href = contactoData.sitioWeb.url;
    webElement.textContent = contactoData.sitioWeb.nombre;
}
