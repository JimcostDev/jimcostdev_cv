# JimcostDev CV

Este es mi proyecto de **CV web personal**, desarrollado con **HTML**,
**SCSS (Sass moderno)** y **JavaScript**.\
Permite visualizar mi currículum, descargarlo en formato PDF y consumir
datos desde una API construida con FastAPI.\
El código está modularizado y estructurado para facilitar su
mantenimiento y escalabilidad.

------------------------------------------------------------------------

## 🚀 Características principales

-   Visualización de CV en formato web responsivo.
-   Descarga del CV en formato PDF con un solo clic.
-   Consumo de datos dinámicos desde una API (FastAPI).
-   Estilos organizados con **SCSS** usando `@use` y `@forward`.
-   Proceso de build con **npm scripts**, **PostCSS**, **Autoprefixer**
    y **cssnano**.
-   Código limpio y fácilmente extensible.


------------------------------------------------------------------------

## 🛠️ Tecnologías utilizadas

-   🖌️ **SCSS (Sass moderno)**: Estilos modulares y mantenibles.
-   🌐 **JavaScript**: Lógica del cliente, carga de datos y generación
    de PDF.
-   ⚡ **FastAPI**: Backend para servir los datos del CV.
-   📄 **html2pdf.js**: Generación de PDF en el navegador.
-   📦 **npm + PostCSS (Autoprefixer, cssnano)**: Compilación, prefijos
    automáticos y minificación.

------------------------------------------------------------------------

## 📦 Instalación y uso

1.  Clonar el repositorio:

    ``` bash
    git clone https://github.com/JimcostDev/jimcostdev_cv.git
    cd jimcostdev_cv
    ```

2.  Instalar dependencias:

    ``` bash
    npm install
    ```

3.  Compilar los estilos:

    ``` bash
    npm run build
    ```

    Esto generará `assets/css/main.min.css`.

4.  Para desarrollo con recompilación automática:

    ``` bash
    npm run watch:css
    ```

    y opcionalmente en otra terminal:

    ``` bash
    npm run postcss -- -w
    ```

5.  Abrir `index.html` en el navegador 🚀

------------------------------------------------------------------------

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas!\
Si deseas mejorar algo, abre un **pull request** o crea un **issue**.

------------------------------------------------------------------------

## 📜 Licencia

Este proyecto está bajo la **Licencia MIT**.\
Más detalles en el archivo [LICENSE](./LICENSE).


