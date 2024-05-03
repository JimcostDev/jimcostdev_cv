export async function actualizarExperienciaLaboral(experienciaLaboralData) {
  //*********** EXPERIENCIA LABORAL ************** */
  const experienciaLaboralContainer = document.getElementById(
    "experiencia-laboral"
  );
  if (experienciaLaboralContainer) {
    experienciaLaboralContainer.innerHTML = ""; // Limpiar el contenido anterior

    experienciaLaboralData.forEach((experiencia) => {
      const divExperiencia = document.createElement("div");
      divExperiencia.classList.add("experiencia-item");

      // Título: Rol y Empresa
      const tituloElement = document.createElement("h3");
      tituloElement.textContent = `${experiencia.rol} - ${experiencia.company}`;
      divExperiencia.appendChild(tituloElement);

      // Obtener las fechas de inicio y fin de la experiencia
      const fechaInicio = new Date(experiencia.initial_date);
      const fechaFin = experiencia.end_date
        ? new Date(experiencia.end_date)
        : new Date();

      // Crear un array con los nombres de los meses abreviados
      const mesesAbreviados = [
        "ene.",
        "feb.",
        "mar.",
        "abr.",
        "may.",
        "jun.",
        "jul.",
        "ago.",
        "sep.",
        "oct.",
        "nov.",
        "dic.",
      ];

      // Obtener los nombres de los meses abreviados para las fechas de inicio y fin
      const nombreMesInicio = mesesAbreviados[fechaInicio.getMonth()];
      const nombreMesFin = experiencia.end_date
        ? mesesAbreviados[fechaFin.getMonth()]
        : "actualidad";

      // Formatear la fecha en el nuevo formato
      const fechaFormateada = `${nombreMesInicio} ${fechaInicio.getFullYear()} - ${nombreMesFin} ${
        experiencia.end_date ? fechaFin.getFullYear() : ""
      }`;

      // Crear el elemento de duración y establecer el texto formateado
      const durationElement = document.createElement("p");
      durationElement.textContent = `${fechaFormateada} | ${experiencia.duration}`;
      durationElement.classList.add("experiencia-duracion");
      divExperiencia.appendChild(durationElement);

      // Localización
      const locationElement = document.createElement("p");
      locationElement.textContent = `[${experiencia.location}] `;
      locationElement.classList.add("experiencia-ubicacion");
      divExperiencia.appendChild(locationElement);

      // Actividades
      const activitiesElement = document.createElement("p");
      activitiesElement.textContent = experiencia.activities;
      divExperiencia.appendChild(activitiesElement);

      // Separador
      const separatorElement = document.createElement("br");
      divExperiencia.appendChild(separatorElement);

      experienciaLaboralContainer.appendChild(divExperiencia);
    });
  }
}
