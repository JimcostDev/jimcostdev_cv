export async function actualizarRedesSociales(redesData) {
    //*********** SOCIAL NETWORKS ************** */
    redesData.forEach(redSocial => {
        switch (redSocial.title) {
            case 'github':
                const githubElement = document.getElementById('github-user');
                if (githubElement) {
                    githubElement.href = redSocial.url;
                    githubElement.textContent = 'GitHub';
                }
                break;
            case 'linkedin':
                const linkedinElement = document.getElementById('linkedin-user');
                if (linkedinElement) {
                    linkedinElement.href = redSocial.url;
                    linkedinElement.textContent = 'LinkedIn';
                }
                break;
            case 'youtube':
                const youtubeElement = document.getElementById('youtube-user');
                if (youtubeElement) {
                    youtubeElement.href = redSocial.url;
                    youtubeElement.textContent = 'YouTube';
                }
                break;
            case 'web':
                const webElement = document.getElementById('web-user');
                if (webElement) {
                    webElement.href = redSocial.url;
                    webElement.textContent = 'jimcostdev.com';
                }
                break;
            // Agrega más casos según sea necesario para otras redes sociales
        }
    });
}
