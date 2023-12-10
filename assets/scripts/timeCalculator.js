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

export default calcularTiempoTranscurrido;