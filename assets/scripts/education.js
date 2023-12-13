export async function actualizarEducacion(educacionData) {
     // TITULO
     const tituloEduElement = document.getElementById('titulo-educacion');
     if (tituloEduElement) {
         tituloEduElement.textContent = educacionData.titulo;
     }
     // EDUCACIÓN
     const educacionElement = document.querySelector('.infoEducacion');
     if (educacionElement) {
         const educacionHTML = educacionData.historial.map(item => {
             if ('carrera' in item) {
                 return `
                     <div class="descripcion mb">
                         <h3 class="rol">${item.institucion}</h3>
                         <p><i>${item.carrera}</i></p>
                     </div>
                 `;
             } else if ('curso' in item) {
                 return `
                     <div class="descripcion mb">
                         <h3 class="rol">${item.certificacion}</h3>
                         <p><i>${item.curso}</i></p>
                     </div>
                 `;
             } else if ('titulo' in item) {
                 return `
                     <div class="descripcion mb">
                         <h3 class="rol">${item.institucion}</h3>
                         <p><i>${item.titulo}</i></p>
                     </div>
                 `;
             }
         }).join('');

         educacionElement.innerHTML = educacionHTML;
     }
}


           