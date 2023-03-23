// Configuración
const pdfUrl = 'https://drive.google.com/file/d/1fCxG7ZS9tHw1Lj8pz3Pe3ZQ9WOhsdQLy/view?usp=sharing';
const pageNumber = 1;
const container = document.getElementById('flipbook-container');

// Función para cargar el PDF
function loadPdf(url, pageNum, container) {
  // Carga el archivo PDF
  pdfjsLib.getDocument(url).promise.then((pdf) => {
    // Carga la página indicada
    pdf.getPage(pageNum).then((page) => {
      // Crea un lienzo para mostrar la página
      const canvas = document.createElement('canvas');
      container.appendChild(canvas);

      // Ajusta el tamaño del lienzo
      const viewport = page.getViewport({ scale: 1 });
      canvas.width = viewport.width;
      canvas.height = viewport.height;

      // Dibuja la página en el lienzo
      const context = canvas.getContext('2d');
      page.render({ canvasContext: context, viewport: viewport });
    });
  });
}

// Carga el PDF en el contenedor
loadPdf(pdfUrl, pageNumber, container);
