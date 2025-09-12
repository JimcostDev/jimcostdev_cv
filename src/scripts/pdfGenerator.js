function generarPDF() {
  const $boton = document.getElementById("btn-descargar");
  if (!$boton) return;

  $boton.addEventListener("click", async () => {
    const $elementoParaConvertir = document.getElementById("contenedor");
    if (!$elementoParaConvertir) {
      Swal.fire("Error", "No se encontró el contenido para exportar.", "error");
      return;
    }

    const fechaActual = new Date().toISOString().split("T")[0];
    const nombreArchivo = `CV_JIMCOSTDEV_${fechaActual}.pdf`;

    const opciones = {
      margin: 0,
      filename: nombreArchivo,
      image: { type: "jpeg", quality: 1 },
      html2canvas: {
        scale: 3, // siempre alta calidad
        letterRendering: true,
        useCORS: true,
      },
      jsPDF: {
        unit: "in",
        format: "a3", // fijo en A3 para evitar cortes
        orientation: "portrait",
      },
    };

    Swal.fire({
      title: "Generando PDF...",
      text: "Por favor espera mientras se prepara tu CV.",
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading(),
    });

    try {
      await html2pdf().set(opciones).from($elementoParaConvertir).save();

      Swal.fire({
        title: "¡Documento guardado!",
        text: "El CV se exportó correctamente",
        icon: "success",
        confirmButtonColor: "#03A9F4",
      });
    } catch (err) {
      console.error(err);
      Swal.fire("Error", "Ocurrió un error al guardar el documento.", "error");
    }
  });
}

export default generarPDF;
