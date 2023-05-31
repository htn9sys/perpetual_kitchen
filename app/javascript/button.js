document.addEventListener("DOMContentLoaded", function() {
  const submitButton = document.getElementById("submit-btn");

  submitButton.classList.add("register-blue-btn");

  submitButton.addEventListener("mouseenter", function() {
    submitButton.style.transform = "translate(-3px, -3px) scale(1.05)";
    submitButton.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.2)";
  });

  submitButton.addEventListener("mouseleave", function() {
    submitButton.style.transform = "none";
    submitButton.style.boxShadow = "none";
  });

  submitButton.addEventListener("mousedown", function() {
    submitButton.style.transform = "translate(3px, 3px) scale(0.95)";
  });

  submitButton.addEventListener("mouseup", function() {
    submitButton.style.transform = "none";
  });
});