document.getElementById('openPdfButton').addEventListener('click', function() {
    const pdfPopup = document.getElementById('pdfPopup');
    const pdfViewer = document.getElementById('pdfViewer');
    pdfViewer.src = '/Product-Sample.pdf'; // Replace with your PDF path
    pdfPopup.style.display = 'flex'; // Make the pop-up visible
});

document.getElementById('closePdfButton').addEventListener('click', function() {
    const pdfPopup = document.getElementById('pdfPopup');
    const pdfViewer = document.getElementById('pdfViewer');
    pdfPopup.style.display = 'none'; // Hide the pop-up
    pdfViewer.src = ''; // Clear the iframe src to stop PDF loading
});