import calcularTiempoTranscurrido from './timeCalculator.js';
import generarPDF from './pdfGenerator.js';

document.addEventListener('DOMContentLoaded', () => {
    calcularTiempoTranscurrido();
    generarPDF();
});