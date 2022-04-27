document.addEventListener('DOMContentLoaded', () => {
    //escuchamos el click del boton
    const $boton = document.getElementById('btn-descargar');
    $boton.addEventListener('click', ()=>{
        const $elementoParaConvertir = document.getElementById('contenedor');
        html2pdf()
            .set({
                margin: 1,
                filename: 'CV_JimcostDev.pdf',
                image:{
                    type: 'jpeg',
                    quality: 0.98
                },
                html2canvas: {
                    scale: 3, // A mayor escala, mejor grafico, pero mas peso
                    letterRendering: true,
                },
                jsPDF:{
                    unit: 'in',
                    format: 'a3',
                    orientation: 'portrait'
                }
            })
            .from($elementoParaConvertir)
            .save()
            .catch(err => console.log(err))
            .finally()
            .then(()=> {
                console.log('Se guardo el documento!');
            });
    })
})