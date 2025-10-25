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
    
    Swal.fire({
      title: "Generando PDF...",
      text: "Por favor espera mientras se prepara tu CV.",
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading(),
    });
    
    try {
      // Capturar el contenedor como imagen con html2canvas
      const canvas = await html2canvas($elementoParaConvertir, {
        scale: 2,
        useCORS: true,
        logging: false,
        letterRendering: true,
        allowTaint: false
      });
      
      // Obtener dimensiones del canvas
      const imgWidth = 210; // A4 ancho en mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      // Crear PDF con jsPDF
      const { jsPDF } = window.jspdf;
      const pdf = new jsPDF({
        orientation: imgHeight > imgWidth ? 'portrait' : 'portrait',
        unit: 'mm',
        format: 'a4'
      });
      
      const pageHeight = 297; // A4 alto en mm
      
      // Convertir canvas a imagen
      const imgData = canvas.toDataURL('image/jpeg', 1.0);
      
      // Si el contenido es más alto que una página, escalarlo para que quepa
      if (imgHeight > pageHeight) {
        const ratio = pageHeight / imgHeight;
        const scaledWidth = imgWidth * ratio;
        const scaledHeight = pageHeight;
        const xOffset = (imgWidth - scaledWidth) / 2;
        
        pdf.addImage(imgData, 'JPEG', xOffset, 0, scaledWidth, scaledHeight);
      } else {
        pdf.addImage(imgData, 'JPEG', 0, 0, imgWidth, imgHeight);
      }
      
      // Guardar PDF
      pdf.save(nombreArchivo);
      
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