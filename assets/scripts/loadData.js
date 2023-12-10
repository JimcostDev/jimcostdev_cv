
export async function cargarDatos() {
    const urlJSON = 'assets/scripts/data.json'; 

    return fetch(urlJSON)
        .then(response => response.json())
        .then(data => {
            // Aquí puedes trabajar con los datos obtenidos
            return data; // Devuelve los datos para utilizarlos donde llames a esta función
        })
        .catch(error => {
            console.error('Error al obtener el archivo JSON:', error);
            return null; // Manejo de errores, puedes retornar algo específico en caso de error
        });
}
