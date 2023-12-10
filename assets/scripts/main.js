import { calcularTiempoTranscurrido } from './timeCalculator.js';
import generarPDF from './pdfGenerator.js';
import {cargarDatos} from './loadData.js';

document.addEventListener('DOMContentLoaded', async () => {
    generarPDF();
    calcularTiempoTranscurrido();

    // Obtener tiempos transcurridos
    const { tiempoTexto1, tiempoTexto2 } = calcularTiempoTranscurrido();


    // lecrura de los datos
    try {
        const data = await cargarDatos();
        if (data) {
            // console.log(data); // Ejemplo: muestra los datos en la consola
            //*********** CONTACT ************** */
            //CIUDAD
            const ciudadUsuarioElement = document.getElementById('ciudad-usuario');
            if (ciudadUsuarioElement) {
                ciudadUsuarioElement.textContent = data.contacto.ciudad;
            }
            //WHATSAPP
            const numeroWhatsappElement = document.getElementById('numero-whatsapp');
            if (numeroWhatsappElement) {
                numeroWhatsappElement.textContent = data.contacto.telefono;
            }
            //UBICACIÓN
            const ubicacionUsuarioElement = document.getElementById('ubicacion-user');
            if (ubicacionUsuarioElement) {
                ubicacionUsuarioElement.textContent = data.contacto.direccion;
            }
            //EMAIL
            const emailElement = document.getElementById('email-user')
            if (emailElement){
                emailElement.textContent = data.contacto.email;
            }
            // WEB
            const webElement = document.getElementById('web-user')
            if (webElement){
                webElement.textContent = data.contacto.sitioWeb;
            }

            //*********** SOCIAL NETWORKS ************** */
            // GITHUB
            const githubElement = document.getElementById('github-user')
            if (githubElement){
                githubElement.textContent = data.redesSociales.github;
            }
            //INSTAGRAM
            const instagramElement = document.getElementById('instagram-user')
            if (instagramElement){
                instagramElement.textContent = data.redesSociales.instagram;
            }
            //LINKEDIN
            const linkedinElement = document.getElementById('linkedin-user')
            if (linkedinElement){
                linkedinElement.textContent = data.redesSociales.linkedin;
            }
            //PLATZI
            const platziElement = document.getElementById('platzi-user')
            if (platziElement){
                platziElement.textContent = data.redesSociales.platzi;
            }

            //*********** LANGUAGES ************** */
            // ESPAÑOL
            const spanishElement = document.getElementById('spanish-user')
            if (spanishElement){
                spanishElement.textContent = data.idiomas.espanol;
            }
            //INGLES
            const englishElement = document.getElementById('english-user')
            if (englishElement){
                englishElement.textContent = data.idiomas.ingles;
            }

            //*********** PERFIL ************** */
            // NOMBRE
            const nombreDelUsuario = data.perfil.nombre;
            const nombreElement = document.getElementById('nombre-usuario');
            nombreElement.textContent = nombreDelUsuario;
            // ROL
            const rolElement = document.getElementById('rol-user')
            if (rolElement){
                rolElement.textContent = data.perfil.rol;
            }
            // DESCRIPCIÓN
            const descriptionElement = document.getElementById('descripcion-user')
            if (descriptionElement){
                descriptionElement.textContent = data.perfil.descripcion;
            }

            //*********** EXPERIENCIA LABORAL ************** */
            data.experienciaLaboral.forEach((experiencia, index) => {
                const posicionElement = document.getElementById(`work${index + 1}`);
                if (posicionElement) {
                    let html = `<h3 class="rol mb">${experiencia.cargo} - ${experiencia.empresa} [${experiencia.ubicacion}] [${experiencia.industria}]</h3>`;
                    html += experiencia.actividades.map(act => `<p>${act}</p>`).join('');
                    html += `<span class="bold">${experiencia.fecha}</span>`; // Mostrar la fecha primero
                    html += `<span class="bold">${index === 0 ? tiempoTexto1 : tiempoTexto2}</span>`; // Luego, mostrar el tiempo
            
                    posicionElement.innerHTML = html;
                }
            });


            //*********** EDUCACIÓN ************** */
            // EDUCACIÓN
            const educacionElement = document.querySelector('.infoEducacion');
            if (educacionElement) {
                const educacionHTML = data.infoEducacion.map(item => {
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

            

        } else {
            console.error('No se pudieron cargar los datos');
        }
    } catch (error) {
        console.error('Error al cargar los datos:', error);
    }
});
