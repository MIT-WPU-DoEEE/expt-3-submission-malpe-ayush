// Import jQuery library.  This needs to be included in your HTML file before this script is included.  For example: <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

console.log("ajax.js is loaded")
function submitForm() {
  console.log("Submitting form...") // Debugging Log
  $.ajax({
    url: "/test/FORM_VALIDATION/submit.php",
    type: "POST",
    data: $("#myForm").serialize(),
    dataType: "json",
    success: (response) => {
      if (response.status === "success") {
        alert(response.message)
        $("#myForm")[0].reset()
        // Remove all is-invalid classes
        $("#myForm .is-invalid").removeClass("is-invalid")
      } else {
        alert("Error: " + response.message)
      }
    },
    error: () => {
      alert("An error occurred while submitting the form.")
    },
  })
}

