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
    // 👇 más iconos
  };

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

    p.appendChild(icon);
    p.appendChild(document.createTextNode(' ')); // espacio entre icono y link
    p.appendChild(enlace);

    contenedor.appendChild(p);
  });
}
