export async function actualizarContacto(data) {

     // si vienen en array, nos quedamos con el primer elemento
    const contactoData = Array.isArray(data) ? data[0] : data;

    // NACIONALIDAD
    const nacionalidadElement = document.getElementById('nacionalidad');
    if (nacionalidadElement) {
        nacionalidadElement.textContent = contactoData.nationality;
    }
    // TELEFONO
    // const telefonoElement = document.getElementById('telefono');
    // if (telefonoElement) {
    //     telefonoElement.textContent = contactoData.phone_number;
    // }
    // CIUDAD
    const ciudadElement = document.getElementById('ciudad');
    if (ciudadElement) {
        ciudadElement.textContent = contactoData.i_live_in;
    }
    // EMAIL
    const emailElement = document.getElementById('email');
    if (emailElement) {
        emailElement.textContent = contactoData.email;
    }
}
