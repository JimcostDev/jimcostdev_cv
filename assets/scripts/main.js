import generarPDF from './pdfGenerator.js';
import {cargarDatos} from './loadData.js';
import { actualizarContacto } from './contact.js';
import { actualizarRedesSociales } from './socialNetworks.js';
import { actualizarIdiomas } from './languages.js';
import { actualizarPerfil } from './perfil.js';
import { actualizarExperienciaLaboral } from './work.js';
import { actualizarEducacion } from './education.js';

document.addEventListener('DOMContentLoaded', async () => {
    generarPDF();
    
   // Función para actualizar los datos en la página
   async function actualizarDatos(idioma) {
    try {
        const data = await cargarDatos(idioma);
        if (data) {
            await actualizarContacto(data.contacto);
            await actualizarRedesSociales(data.redesSociales);
            await actualizarIdiomas(data.idiomas);
            await actualizarPerfil(data.perfil);
            await actualizarExperienciaLaboral(data.experienciaLaboral);
            await actualizarEducacion(data.infoEducacion);

        } else {
            console.error('No se pudieron cargar los datos');
        }
    } catch (error) {
        console.error('Error al cargar los datos:', error);
    }
}
 // Cargar los datos iniciales al cargar la página
 await actualizarDatos('ingles'); // Cambia 'ingles' por el idioma inicial que desees mostrar

 // Manejar el clic en los botones para cambiar el idioma
 document.getElementById('btn-english').addEventListener('click', async () => {
     await actualizarDatos('ingles');
 });

 document.getElementById('btn-spanish').addEventListener('click', async () => {
     await actualizarDatos('espanol');
 });
});