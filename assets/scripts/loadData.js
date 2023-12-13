
export async function cargarDatos(idioma) {
    let urlJSON = '';
    if (idioma === 'ingles') {
        urlJSON = 'assets/scripts/data.json';
    } else {
        urlJSON = 'assets/scripts/datos.json';
    } 
    
    return fetch(urlJSON)
        .then(response => response.json())
        .then(data => {
            return data; // Devuelve los datos para utilizarlos donde llames a esta función
        })
        .catch(error => {
            console.error('Error al obtener el archivo JSON:', error);
            return null; // Manejo de errores, puedes retornar algo específico en caso de error
        });
}

