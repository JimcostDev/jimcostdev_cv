
export async function actualizarUsuario(data) {
  
  const usuario = Array.isArray(data) ? data[0] : data;

  // Obtener el elemento en el DOM
  const nombreUsuarioEl = document.getElementById('nombre-usuario');
  if (nombreUsuarioEl && usuario.full_name) {
    nombreUsuarioEl.textContent = usuario.full_name;
  }
}
