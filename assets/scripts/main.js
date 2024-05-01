import generarPDF from './pdfGenerator.js';
import { cargarDatos } from './loadData.js';
import { actualizarUsuario } from './user.js';
import { actualizarContacto } from './contact.js';
import { actualizarRedesSociales } from './socialNetworks.js';
import { actualizarPerfil } from './perfil.js';
import { actualizarExperienciaLaboral } from './experience.js'; 
import { actualizarEducacion } from './education.js';
import { actualizarCertificaciones } from './certification.js';


document.addEventListener('DOMContentLoaded', async () => {
    generarPDF();
    
    // Función para actualizar los datos en la página
    async function actualizarDatos() {
        try {
            const datosUsuario = await cargarDatos('users');
            const datosContacto = await cargarDatos('contact');
            const datosRedesSociales = await cargarDatos('social_network');
            const datosPerfil = await cargarDatos('perfil');
            const datosExperienciaLaboral = await cargarDatos('work_experience');
            const datosEducacion = await cargarDatos('education');
            const datosCertificaciones = await cargarDatos('certification');

            if (datosUsuario) {
                await actualizarUsuario(datosUsuario);
                await actualizarContacto(datosContacto);
                await actualizarRedesSociales(datosRedesSociales);
                await actualizarPerfil(datosPerfil);
                await actualizarExperienciaLaboral(datosExperienciaLaboral);
                await actualizarEducacion(datosEducacion);
                await actualizarCertificaciones(datosCertificaciones);
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
