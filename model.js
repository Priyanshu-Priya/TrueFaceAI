// To check the upload of file in the Server

document.addEventListener('DOMContentLoaded', function() {
    const uploadBtn = document.getElementById('uploadBtn');
    const uploadForm = document.getElementById('uploadForm');
  
    uploadBtn.addEventListener('click', function() {
      // Perform form submission or file upload here
      // For example, use FormData to handle file upload
      const formData = new FormData(uploadForm);
      fetch('/upload', {
        method: 'POST',
        body: formData
      }).then(response => response.json())
        .then(data => {
          console.log('Success:', data);
          // Optionally, handle success response
        })
        .catch(error => {
          console.error('Error:', error);
          // Optionally, handle error response
        });
    });
  });
  