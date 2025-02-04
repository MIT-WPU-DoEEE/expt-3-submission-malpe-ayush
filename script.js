console.log("script.js is loaded")
function submitForm() {
  // Add your form submission logic here
  alert("Form submitted successfully!")
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("myForm").addEventListener("submit", (event) => {
    event.preventDefault()
    var isValid = true

    // Name validation (only letters, min 3 characters)
    var name = document.getElementById("name").value.trim()
    if (name === "" || !/^[A-Za-z ]{3,}$/.test(name)) {
      document.getElementById("nameError").textContent = "Enter a valid name (min 3 letters)."
      document.getElementById("name").classList.add("is-invalid")
      isValid = false
    } else {
      document.getElementById("nameError").textContent = ""
      document.getElementById("name").classList.remove("is-invalid")
    }

    // Phone number validation (10 digits)
    var phone = document.getElementById("phone").value.trim()
    if (phone === "" || !/^\d{10}$/.test(phone)) {
      document.getElementById("phoneError").textContent = "Enter a valid 10-digit phone number."
      document.getElementById("phone").classList.add("is-invalid")
      isValid = false
    } else {
      document.getElementById("phoneError").textContent = ""
      document.getElementById("phone").classList.remove("is-invalid")
    }

    // Email validation
    var email = document.getElementById("email").value.trim()
    if (email === "" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      document.getElementById("emailError").textContent = "Enter a valid email."
      document.getElementById("email").classList.add("is-invalid")
      isValid = false
    } else {
      document.getElementById("emailError").textContent = ""
      document.getElementById("email").classList.remove("is-invalid")
    }

    // Zip code validation (5-6 digits)
    var zip = document.getElementById("zip").value.trim()
    if (zip === "" || !/^\d{5,6}$/.test(zip)) {
      document.getElementById("zipError").textContent = "Enter a valid zip code (5-6 digits)."
      document.getElementById("zip").classList.add("is-invalid")
      isValid = false
    } else {
      document.getElementById("zipError").textContent = ""
      document.getElementById("zip").classList.remove("is-invalid")
    }

    if (isValid) {
      submitForm()
    }
  })
})

