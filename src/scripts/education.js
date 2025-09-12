export async function actualizarEducacion(educacionData) {
    //*********** EDUCACIÓN ************** */
    const educacionContainer = document.getElementById('educacion');
    if (educacionContainer) {
        educacionContainer.innerHTML = ''; // Limpiar el contenido anterior

        educacionData.forEach(educacion => {
            const divEducacion = document.createElement('div');
            divEducacion.classList.add('educacion-item');

            // Título: Carrera
            const tituloElement = document.createElement('h3');
            tituloElement.textContent = educacion.career;
            divEducacion.appendChild(tituloElement);

            // Nombre de la universidad
            const universidadElement = document.createElement('h4');
            universidadElement.textContent = educacion.company;
            universidadElement.classList.add('educacion-universidad');
            divEducacion.appendChild(universidadElement);

            // Año de graduación
            const yearElement = document.createElement('p');
            yearElement.textContent = educacion.year;
            yearElement.classList.add('educacion-year');
            divEducacion.appendChild(yearElement);

            // Separador
            const separatorElement = document.createElement('br');
            divEducacion.appendChild(separatorElement);

            educacionContainer.appendChild(divEducacion);
        });
    }
}
