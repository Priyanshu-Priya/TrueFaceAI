document.addEventListener('DOMContentLoaded', function() {
  const uploadBtn = document.getElementById('uploadBtn');
  const uploadForm = document.getElementById('uploadForm');
  const loader = document.getElementById('fullPageLoader'); // Target the full-page loader

  // Hide the loader initially (this ensures that it's hidden on page load)
  loader.style.display = 'none';

  uploadBtn.addEventListener('click', function() {
    // Check if a file is selected
    const fileInput = document.getElementById('mediaFile');
    const alertDiv = document.getElementById('alert');
    
    // Clear previous alerts
    alertDiv.innerHTML = '';

    if (fileInput.files.length === 0) {
      alertDiv.innerHTML = `
        <div class="alert alert-warning alert-dismissible d-flex align-items-center mt-1" role="alert">
  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#A96424"><path d="m40-120 440-760 440 760H40Zm138-80h604L480-720 178-200Zm302-40q17 0 28.5-11.5T520-280q0-17-11.5-28.5T480-320q-17 0-28.5 11.5T440-280q0 17 11.5 28.5T480-240Zm-40-120h80v-200h-80v200Zm40-100Z"/></svg> 
  <div>
 Please select a file before uploading.
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>`;
      return;
    }


      //  Redirect to processing.html after successful upload
              window.location.href = 'pages/processing.html';

    // Show the loader when the upload starts
    loader.style.display = 'flex';

    // Perform form submission or file upload here
    const formData = new FormData(uploadForm);
    fetch('/upload', {
      method: 'POST',
      body: formData
    }).then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        // Hide the loader and redirect to another page
        loader.style.display = 'none';
        window.location.href = 'pages/result.html'; // Redirect to processing.html
      })
      .catch(error => {
        console.error('Error:', error);
        // Hide the loader and handle error
        loader.style.display = 'none';
      });
  });
});


