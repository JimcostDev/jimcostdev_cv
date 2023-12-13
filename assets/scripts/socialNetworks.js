export async function actualizarRedesSociales(redesData) {
    //*********** SOCIAL NETWORKS ************** */
            //TITULO
            const tituloRedesElement = document.getElementById('titulo-redes');
            if (tituloRedesElement) {
                tituloRedesElement.textContent = redesData.titulo;
            }
            // GITHUB
            const githubElement = document.getElementById('github-user')
            githubElement.href = redesData.github.url;
            githubElement.textContent = redesData.github.nombre;
            //INSTAGRAM
            const instagramElement = document.getElementById('instagram-user')
            instagramElement.href = redesData.instagram.url;
            instagramElement.textContent = redesData.instagram.nombre;
            //LINKEDIN
            const linkedinElement = document.getElementById('linkedin-user')
            linkedinElement.href = redesData.linkedin.url;
            linkedinElement.textContent = redesData.linkedin.nombre;
            //PLATZI
            const platziElement = document.getElementById('platzi-user')
            platziElement.href = redesData.platzi.url;
            platziElement.textContent = redesData.platzi.nombre;
}