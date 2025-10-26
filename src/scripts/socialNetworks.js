export async function actualizarRedesSociales(redesData) {
  const contenedor = document.querySelector('.redes-sociales');
  if (!contenedor) return;

  // Limpio el contenido (excepto el título y hr)
  contenedor.querySelectorAll('p').forEach(p => p.remove());

  // Mapeo redes a sus iconos de FontAwesome
  const iconos = {
    github: 'fab fa-github',
    linkedin: 'fab fa-linkedin',
    youtube: 'fab fa-youtube',
    twitter: 'fab fa-twitter',
    instagram: 'fab fa-instagram',
    web: 'fas fa-link'
  };

  // Función para extraer información legible de la URL
  function extraerInfoImprimible(title, url) {
    const titleLower = title.toLowerCase();
    
    try {
      const urlObj = new URL(url);
      
      // GitHub: extraer usuario
      if (titleLower === 'github') {
        const match = urlObj.pathname.match(/\/([^\/]+)/);
        return match ? `(@${match[1]})` : '';
      }
      
      // LinkedIn: extraer usuario
      if (titleLower === 'linkedin') {
        const match = urlObj.pathname.match(/\/in\/([^\/]+)/);
        return match ? `(@${match[1]})` : '';
      }
      
      // YouTube: extraer canal
      if (titleLower === 'youtube') {
        const match = urlObj.pathname.match(/\/@([^\/\?]+)/);
        return match ? `(@${match[1]})` : '';
      }
      
      // Para Web, CV o cualquier otra: mostrar dominio limpio
      return `(${urlObj.hostname.replace('www.', '')})`;
      
    } catch (e) {
      return '';
    }
  }

  redesData.forEach(({ title, url }) => {
    const p = document.createElement('p');

    // Si no hay icono definido, uso uno por defecto
    const iconClass = iconos[title.toLowerCase()] || 'fas fa-globe';

    const icon = document.createElement('i');
    icon.className = iconClass;

    const enlace = document.createElement('a');
    enlace.href = url;
    enlace.target = '_blank';
    enlace.textContent = title.charAt(0).toUpperCase() + title.slice(1);

    // Crear span con la info para impresión
    const infoPrint = document.createElement('span');
    infoPrint.className = 'print-only';
    infoPrint.textContent = ' ' + extraerInfoImprimible(title, url);

    p.appendChild(icon);
    p.appendChild(document.createTextNode(' '));
    p.appendChild(enlace);
    p.appendChild(infoPrint); // Info que solo se ve al imprimir

    contenedor.appendChild(p);
  });
}