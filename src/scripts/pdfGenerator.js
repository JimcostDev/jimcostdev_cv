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
        scale: 3,
        letterRendering: true,
        useCORS: true,
      },
      jsPDF: {
        unit: "mm",
        format: "a4",
        orientation: "portrait",
      },
      pagebreak: { mode: 'avoid-all' } // Evita saltos de página
    };

    Swal.fire({
      title: "Generando PDF...",
      text: "Por favor espera mientras se prepara tu CV.",
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading(),
    });

    try {
      // Obtener dimensiones A4 en mm
      const pageHeight = 297; // A4 height en mm
      const pageWidth = 210;  // A4 width en mm
      
      await html2pdf()
        .set(opciones)
        .from($elementoParaConvertir)
        .toPdf()
        .get('pdf')
        .then(function(pdf) {
          // Asegurar que solo tenga 1 página
          const totalPages = pdf.internal.getNumberOfPages();
          
          // Si hay más de 1 página, eliminar las extras
          for (let i = totalPages; i > 1; i--) {
            pdf.deletePage(i);
          }
        })
        .save();

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