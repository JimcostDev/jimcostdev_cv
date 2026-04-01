export const API_BASE_URL = 'https://jimcostdev-api.fastapicloud.dev';
const API_USER = 'jimcostdev';

export async function cargarDatos(endpoint) {
    const urlAPI = `${API_BASE_URL}/${endpoint}/p/${API_USER}`;
    try {
        const response = await fetch(urlAPI);
        if (!response.ok) {
            throw new Error(`No se pudo obtener la respuesta de la API para el endpoint ${endpoint}`);
        }
        const data = await response.json();
        return data; 
    } catch (error) {
        console.error('Error al obtener los datos:', error);
        return null; 
    }
}
