export function calcularTiempoTranscurrido(fechaInicio, fechaFinal) {
    const fechaInicioObj = new Date(fechaInicio);
    let fechaFinalObj;

    if (fechaFinal.toLowerCase() === 'currently') {
        fechaFinalObj = new Date();
    } else {
        fechaFinalObj = new Date(fechaFinal);
    }

    const mesesTranscurridos = (fechaFinalObj.getFullYear() - fechaInicioObj.getFullYear()) * 12 + (fechaFinalObj.getMonth() - fechaInicioObj.getMonth());

    let tiempo;
    if (mesesTranscurridos > 12) {
        const aniosTranscurridos = Math.floor(mesesTranscurridos / 12);
        tiempo = `${aniosTranscurridos} yr`;
    } else {
        tiempo = `${mesesTranscurridos} mos.`;
    }

    return tiempo;
}
