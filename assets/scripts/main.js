// Importa las funciones necesarias
import generarPDF from './pdfGenerator.js';
import { cargarDatos } from './loadData.js';
import { actualizarContacto } from './contact.js';
import { actualizarRedesSociales } from './socialNetworks.js';
import { actualizarPerfil } from './perfil.js';
import { actualizarExperienciaLaboral } from './experience.js'; 
import { actualizarEducacion } from './education.js';
import { actualizarCertificaciones } from './certification.js';

// Función para mostrar la modal de carga
function mostrarModalCarga() {
    const modal = document.getElementById("modal-carga");
    modal.style.display = "block";
}

// Función para ocultar la modal de carga
function ocultarModalCarga() {
    const modal = document.getElementById("modal-carga");
    modal.style.display = "none";
}

// Función para verificar el estado de la API
async function verificarEstadoAPI() {
    try {
        const response = await fetch('https://jimcostdev-api-jimcostdev.koyeb.app/healthcheck');
        return response.ok; // Retorna true si la respuesta es exitosa
    } catch (error) {
        console.error('Error al verificar el estado del API:', error);
        return false; // Retorna false si hubo un error al realizar la solicitud
    }
}

// Función para actualizar los datos en la página
async function actualizarDatos() {
    try {
        // Muestra la modal de carga desde el principio
        mostrarModalCarga();

        // Verifica el estado de la API
        const estadoAPI = await verificarEstadoAPI();
        if (!estadoAPI) {
            console.error('La API no está disponible');
            return;
        }

        // Cargar los datos
        const datosContacto = await cargarDatos('contact');
        const datosRedesSociales = await cargarDatos('social_network');
        const datosPerfil = await cargarDatos('perfil');
        const datosExperienciaLaboral = await cargarDatos('work_experience');
        const datosEducacion = await cargarDatos('education');
        const datosCertificaciones = await cargarDatos('certification');

        // Oculta la modal de carga una vez que se han cargado los datos
        ocultarModalCarga();

        // Actualiza los datos en la página
        await actualizarContacto(datosContacto);
        await actualizarRedesSociales(datosRedesSociales);
        await actualizarPerfil(datosPerfil);
        await actualizarExperienciaLaboral(datosExperienciaLaboral);
        await actualizarEducacion(datosEducacion);
        await actualizarCertificaciones(datosCertificaciones);

        // Genera el PDF después de cargar los datos
        generarPDF();
    } catch (error) {
        console.error('Error al cargar los datos:', error);
        // Puedes mostrar un mensaje de error al usuario aquí
    }
}

// Llama a la función para cargar los datos
document.addEventListener('DOMContentLoaded', actualizarDatos);
