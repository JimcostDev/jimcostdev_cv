function generarPDF() {
  // Escuchamos el click del botón
  const $boton = document.getElementById("btn-descargar");
  $boton.addEventListener("click", () => {
    const $elementoParaConvertir = document.getElementById("contenedor");
    html2pdf()
      .set({
        margin: 1,
        filename: "CV_JimcostDev_Web.pdf",
        image: {
          type: "jpeg",
          quality: 0.98,
        },
        html2canvas: {
          scale: 3, // A mayor escala, mejor gráfico, pero más peso
          letterRendering: true,
        },
        jsPDF: {
          unit: "in",
          format: "a3",
          orientation: "portrait",
        },
      })
      .from($elementoParaConvertir)
      .save()
      .then(() => {
        // Muestra una alerta de SweetAlert indicando que el documento se guardó exitosamente
        Swal.fire({
          title: "¡Documento guardado!",
          text: "El documento se ha guardado correctamente.",
          icon: "success",
          confirmButtonColor: "#03A9F4",
        });
      })
      .catch((err) => {
        // Muestra una alerta de SweetAlert indicando que ocurrió un error al guardar el documento
        Swal.fire(
          "Error",
          "Ocurrió un error al guardar el documento.",
          "error"
        );
        console.log(err);
      });
  });
}

export default generarPDF;
