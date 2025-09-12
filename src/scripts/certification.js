export async function actualizarCertificaciones(certificacionesData) {
    //*********** CERTIFICACIONES ************** */
    const certificacionesContainer = document.getElementById('certificaciones');
    if (certificacionesContainer) {
        certificacionesContainer.innerHTML = ''; // Limpiar el contenido anterior

        certificacionesData.forEach(certificacion => {
            const divCertificacion = document.createElement('div');
            divCertificacion.classList.add('certificacion-item');

            // Título: Nombre de la certificación
            const tituloElement = document.createElement('h4');
            tituloElement.textContent = certificacion.certification;
            divCertificacion.appendChild(tituloElement);

            // Nombre de la empresa y enlace "Ver"
            const empresaElement = document.createElement('p');
            empresaElement.textContent = `${certificacion.company} - `;
            const enlaceElement = document.createElement('a');
            enlaceElement.innerHTML = '<span class="ver-texto">Ver</span>';
            enlaceElement.href = certificacion.link;
            enlaceElement.target = '_blank';
            empresaElement.appendChild(enlaceElement);
            divCertificacion.appendChild(empresaElement);

            // Separador
            const separatorElement = document.createElement('br');
            divCertificacion.appendChild(separatorElement);

            certificacionesContainer.appendChild(divCertificacion);
        });
    }
}
