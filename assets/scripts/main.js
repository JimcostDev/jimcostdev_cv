document.addEventListener('DOMContentLoaded', () => {
    calcularTiempoTranscurrido();
    generarPDF();
});

function calcularTiempoTranscurrido() {
    // Obtenemos los elementos donde se mostrará el tiempo
    const $tiempo1 = document.getElementById('time1');
    const $tiempo2 = document.getElementById('time2');

    // Calculamos el tiempo transcurrido para cada elemento
    const fechaInicio1 = new Date('April 2021');
    const fechaActual1 = new Date('March 2022');
    const mesesTranscurridos1 = (fechaActual1.getFullYear() - fechaInicio1.getFullYear()) * 12 + (fechaActual1.getMonth() - fechaInicio1.getMonth());

    const fechaInicio2 = new Date('October 2022');
    const fechaActual2 = new Date();
    const mesesTranscurridos2 = (fechaActual2.getFullYear() - fechaInicio2.getFullYear()) * 12 + (fechaActual2.getMonth() - fechaInicio2.getMonth());

    // Determinamos si mostrar "mos." o "yr" para cada elemento
    let tiempoTexto1;
    if (mesesTranscurridos1 > 12) {
        const aniosTranscurridos1 = Math.floor(mesesTranscurridos1 / 12);
        tiempoTexto1 = `${aniosTranscurridos1} yr`;
    } else {
        tiempoTexto1 = `${mesesTranscurridos1} mos.`;
    }

    let tiempoTexto2;
    if (mesesTranscurridos2 > 12) {
        const aniosTranscurridos2 = Math.floor(mesesTranscurridos2 / 12);
        tiempoTexto2 = `${aniosTranscurridos2} yr`;
    } else {
        tiempoTexto2 = `${mesesTranscurridos2} mos.`;
    }

    // Mostramos el tiempo transcurrido en cada elemento
    $tiempo1.textContent = tiempoTexto1;
    $tiempo2.textContent = tiempoTexto2;
}

function generarPDF() {
    // Escuchamos el click del botón
    const $boton = document.getElementById('btn-descargar');
    $boton.addEventListener('click', () => {
        const $elementoParaConvertir = document.getElementById('contenedor');
        html2pdf()
            .set({
                margin: 1,
                filename: 'CV_JimcostDev_Web.pdf',
                image: {
                    type: 'jpeg',
                    quality: 0.98
                },
                html2canvas: {
                    scale: 3, // A mayor escala, mejor gráfico, pero más peso
                    letterRendering: true,
                },
                jsPDF: {
                    unit: 'in',
                    format: 'a3',
                    orientation: 'portrait'
                }
            })
            .from($elementoParaConvertir)
            .save()
            .then(() => {
                // Muestra una alerta de SweetAlert indicando que el documento se guardó exitosamente
                Swal.fire('¡Documento guardado!', 'El documento se ha guardado correctamente.', 'success');
            })
            .catch(err => {
                // Muestra una alerta de SweetAlert indicando que ocurrió un error al guardar el documento
                Swal.fire('Error', 'Ocurrió un error al guardar el documento.', 'error');
                console.log(err);
            });
    });
}
