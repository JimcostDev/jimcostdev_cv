export async function actualizarContacto(data) {
  const contactoData = Array.isArray(data) ? data[0] : data;
  const contenedor = document.querySelector('.contacto');
  if (!contenedor) return;

  // Deja la foto y título, elimina los <p> anteriores
  contenedor.querySelectorAll('p').forEach(p => p.remove());

  const campos = [
    { key: 'nationality', icon: 'fas fa-globe', label: '' },
    // { key: 'phone_number', icon: 'fab fa-whatsapp', label: '' }, // si decides mostrarlo
    { key: 'i_live_in', icon: 'fas fa-map-marker-alt', label: '' },
    { key: 'email', icon: 'fas fa-envelope', label: '' },
    { key: 'web', icon: 'fas fa-link', isLink: true, label: '' }
  ];

  campos.forEach(({ key, icon, isLink }) => {
    const valor = contactoData[key];
    if (!valor) return;

    const p = document.createElement('p');
    const iconEl = document.createElement('i');
    iconEl.className = icon;

    p.appendChild(iconEl);
    p.appendChild(document.createTextNode(' '));

    if (isLink) {
      const a = document.createElement('a');
      a.href = valor;
      a.target = '_blank';
      a.textContent = valor;
      p.appendChild(a);
    } else {
      const span = document.createElement('span');
      span.textContent = valor;
      p.appendChild(span);
    }

    contenedor.appendChild(p);
  });
}
