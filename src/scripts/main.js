import generarPDF from './pdfGenerator.js';
import { cargarDatos } from './loadData.js';
import { actualizarContacto } from './contact.js';
import { actualizarRedesSociales } from './socialNetworks.js';
import { actualizarPerfil } from './perfil.js';
import { actualizarExperienciaLaboral } from './experience.js';
import { actualizarEducacion } from './education.js';
import { actualizarCertificaciones } from './certification.js';
import { actualizarUsuario } from './user.js';
import { actualizarProyectos } from './projects.js';

function mostrarModalCarga() {
    const modal = document.getElementById("modal-carga");
    modal.style.display = "block";
}

function ocultarModalCarga() {
    const modal = document.getElementById("modal-carga");
    modal.style.display = "none";
}

async function actualizarDatos() {
    try {
        document.body.style.display = "block";
        mostrarModalCarga();

        const datosContacto = await cargarDatos('contact');
        const datosRedesSociales = await cargarDatos('social_networks');
        const datosPerfil = await cargarDatos('profile');
        const datosExperienciaLaboral = await cargarDatos('work_experience');
        const datosEducacion = await cargarDatos('education');
        const datosCertificaciones = await cargarDatos('certifications');
        const datosUsuario = await cargarDatos('users');
        const datosProyectos = await cargarDatos('projects');

        ocultarModalCarga();

        await actualizarContacto(datosContacto);
        await actualizarRedesSociales(datosRedesSociales);
        await actualizarPerfil(datosPerfil);
        await actualizarExperienciaLaboral(datosExperienciaLaboral);
        await actualizarEducacion(datosEducacion);
        await actualizarCertificaciones(datosCertificaciones);
        await actualizarUsuario(datosUsuario);
        await actualizarProyectos(datosProyectos);

        generarPDF();
    } catch (error) {
        console.error('Error al cargar los datos:', error);
    }
}

document.addEventListener('DOMContentLoaded', actualizarDatos);
