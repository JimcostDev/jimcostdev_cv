export function calcularTiempoTranscurrido(fechaInicio, fechaFinal) {
    const fechaInicioObj = new Date(fechaInicio);
    let fechaFinalObj;

    if (fechaFinal.toLowerCase() === 'currently') {
        fechaFinalObj = new Date();
    } else {
        fechaFinalObj = new Date(fechaFinal);
    }

    const mesesTranscurridos = (fechaFinalObj.getFullYear() - fechaInicioObj.getFullYear()) * 12 + (fechaFinalObj.getMonth() - fechaInicioObj.getMonth());
    const aniosTranscurridos = Math.floor(mesesTranscurridos / 12);
    const mesesRestantes = mesesTranscurridos % 12;

    let tiempo;

    if (aniosTranscurridos === 0) {
        tiempo = `${mesesRestantes} mos`;
    } else {
        tiempo = `${aniosTranscurridos} yrs`;
        if (mesesRestantes > 0) {
            tiempo += ` and ${mesesRestantes} mos`;
        }
    }

    return tiempo;
}
