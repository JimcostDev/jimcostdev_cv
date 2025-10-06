# JimcostDev CV

Versión web descargable de mi currículum vitae, desarrollado con HTML, SCSS y JavaScript. Consume datos dinámicamente desde la API y permite generar un PDF profesional con un solo clic.

## 🌐 Ecosistema del Proyecto

Este repositorio forma parte de un ecosistema de 3 aplicaciones:

- **[jimcostdev_api](https://github.com/JimcostDev/jimcostdev_api)** - API REST (FastAPI + MongoDB)
- **[jimcostdev-astro](https://github.com/JimcostDev/jimcostdev-astro)** - Sitio web principal (Astro + Tailwind CSS)
- **[jimcostdev_cv](https://github.com/JimcostDev/jimcostdev_cv)** - CV descargable (HTML + SCSS + JavaScript) ← *Estás aquí*

## 📌 Características

- 📄 **Visualización web responsiva** - CV adaptable a cualquier dispositivo
- 📥 **Descarga en PDF** - Generación de currículum en formato PDF
- 🔄 **Datos dinámicos** - Integración con API de FastAPI
- 🎨 **Estilos modulares** - Arquitectura SCSS con `@use` y `@forward`
- ⚡ **Build optimizado** - PostCSS, Autoprefixer y cssnano
- 🧩 **Código modular** - Estructura escalable y mantenible

## 🚀 Tecnologías Utilizadas

- **HTML5** - Estructura semántica del documento
- **SCSS (Sass)** - Estilos modulares y mantenibles
- **JavaScript** - Lógica del cliente y generación de PDF
- **html2pdf.js** - Conversión de HTML a PDF en el navegador
- **PostCSS** - Procesamiento de CSS (Autoprefixer + cssnano)
- **FastAPI** - Backend para servir los datos del CV

## 📦 Instalación

### 1. Clonar el repositorio
```bash
git clone https://github.com/JimcostDev/jimcostdev_cv.git
cd jimcostdev_cv
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Compilar los estilos
```bash
npm run build
```

Esto generará el archivo optimizado `assets/css/main.min.css`

### 4. Modo desarrollo (opcional)

Para desarrollo con recompilación automática:

```bash
# Terminal 1 - Watch SCSS
npm run watch:css

# Terminal 2 - Watch PostCSS (opcional)
npm run postcss -- -w
```

### 5. Abrir el proyecto

Abre `index.html` en tu navegador preferido 🚀

## 🛠️ Scripts Disponibles

- `npm run build` - Compila y minifica los estilos para producción
- `npm run watch:css` - Observa cambios en archivos SCSS
- `npm run postcss` - Aplica Autoprefixer y cssnano

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Si deseas mejorar algo, abre un **pull request** o crea un **issue**.

## 📜 Licencia

Este proyecto está bajo la **Licencia MIT**. Consulta el archivo [LICENSE](./LICENSE) para más detalles.

## 📬 Contacto

Para más información, visita mi sitio web: [jimcostdev.com](https://jimcostdev.com)
