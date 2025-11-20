export async function actualizarProyectos(proyectosData) {
  const contenedor = document.querySelector(".projects");
  if (!contenedor) return;

  // Busco el elemento donde voy a insertar los proyectos
  // Primero elimino el enlace estático si existe
  const enlaceEstatico = contenedor.querySelector(".link-proyectos");
  if (enlaceEstatico) {
    enlaceEstatico.remove();
  }

  // Si no hay proyectos, no hago nada
  if (!proyectosData || proyectosData.length === 0) return;

  // Creo un contenedor para los proyectos
  const listaProyectos = document.createElement("div");
  listaProyectos.className = "lista-proyectos";

  proyectosData.forEach(({ title, link }) => {
    const proyectoItem = document.createElement("p");
    proyectoItem.className = "proyecto-item";

    // Icono de proyecto
    const icon = document.createElement("i");
    icon.className = "fas fa-folder-open";

    // Enlace del proyecto
    const enlace = document.createElement("a");
    enlace.href = link;
    enlace.target = "_blank";
    enlace.rel = "noopener noreferrer";
    enlace.textContent = title;

    // Información para impresión (URL limpia)
    const infoPrint = document.createElement("span");
    infoPrint.className = "print-only";

    try {
      const urlObj = new URL(link);

      // Dominios válidos de GitHub
      const allowedGitHubHosts = ["github.com", "www.github.com"];

      // Si el host coincide exactamente con GitHub
      if (allowedGitHubHosts.includes(urlObj.hostname)) {
        infoPrint.textContent = ` (${urlObj.hostname}${urlObj.pathname})`;
      } else {
        // Para otros enlaces, solo mostrar el dominio sin "www."
        const cleanHost = urlObj.hostname.replace(/^www\./, "");
        infoPrint.textContent = ` (${cleanHost})`;
      }
    } catch (e) {
      // Si la URL es inválida, mostrar el texto original
      infoPrint.textContent = ` (${link})`;
    }

    // Ensamblo el elemento
    proyectoItem.appendChild(icon);
    proyectoItem.appendChild(document.createTextNode(" "));
    proyectoItem.appendChild(enlace);
    proyectoItem.appendChild(infoPrint);

    listaProyectos.appendChild(proyectoItem);
  });

  // Agrego la lista de proyectos al contenedor
  contenedor.appendChild(listaProyectos);
}
