export async function actualizarIdiomas(idiomasData) {
            //TITULO
            const tituloLangsElement = document.getElementById('titulo-langs');
            if (tituloLangsElement) {
                tituloLangsElement.textContent = idiomasData.titulo;
            }
            // ESPAÑOL
            const spanishElement = document.getElementById('spanish-user')
            if (spanishElement){
                spanishElement.textContent = idiomasData.espanol;
            }
            //INGLES
            const englishElement = document.getElementById('english-user')
            if (englishElement){
                englishElement.textContent = idiomasData.ingles;
            }
}