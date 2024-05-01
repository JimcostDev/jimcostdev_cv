export async function actualizarExperienciaLaboral(experienciaLaboralData) {
    //*********** EXPERIENCIA LABORAL ************** */
    const experienciaLaboralContainer = document.getElementById('experiencia-laboral');
    if (experienciaLaboralContainer) {
        experienciaLaboralContainer.innerHTML = ''; // Limpiar el contenido anterior

        experienciaLaboralData.forEach(experiencia => {
            const divExperiencia = document.createElement('div');
            divExperiencia.classList.add('experiencia-item');

            // Título: Rol y Empresa
            const tituloElement = document.createElement('h3');
            tituloElement.textContent = `${experiencia.rol} - ${experiencia.company}`;
            divExperiencia.appendChild(tituloElement);

            // Duración
            const durationElement = document.createElement('p');
            durationElement.textContent = `${experiencia.initial_date} - ${experiencia.end_date || 'actualmente'} | ${experiencia.duration}`;
            durationElement.classList.add('experiencia-duracion');
            divExperiencia.appendChild(durationElement);

            // Localización
            const locationElement = document.createElement('p');
            locationElement.textContent = `[${experiencia.location}] `;
            locationElement.classList.add('experiencia-ubicacion');
            divExperiencia.appendChild(locationElement);

            // Actividades
            const activitiesElement = document.createElement('p');
            activitiesElement.textContent = experiencia.activities;
            divExperiencia.appendChild(activitiesElement);

            

            // Separador
            const separatorElement = document.createElement('br');
            divExperiencia.appendChild(separatorElement);

            experienciaLaboralContainer.appendChild(divExperiencia);
        });
    }
}
