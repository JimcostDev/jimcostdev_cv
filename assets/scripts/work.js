import { calcularTiempoTranscurrido } from './timeCalculator.js';

export async function actualizarExperienciaLaboral(experienciaData) {
            // TITULO
            const tituloWorkElement = document.getElementById('titulo-work');
            if (tituloWorkElement) {
                tituloWorkElement.textContent = experienciaData.titulo;
            }
            // INFO
            experienciaData.historial.forEach((experiencia, index) => {
                const posicionElement = document.getElementById(`work${index + 1}`);
                if (posicionElement) {
                    const tiempo = calcularTiempoTranscurrido(experiencia.fechaInicio, experiencia.fechaFin);
                    let html = `<h3 class="rol mb">${experiencia.cargo} - ${experiencia.empresa} [${experiencia.ubicacion}] [${experiencia.industria}]</h3>`;
                    html += experiencia.actividades.map(act => `<p>${act}</p>`).join('');
                    html += `<span class="bold">${experiencia.fechaInicio} - ${experiencia.fechaFin === 'currently' ? 'Currently' : experiencia.fechaFin} | ${tiempo}</span>`;
            
                    posicionElement.innerHTML = html;
                }
            });
}