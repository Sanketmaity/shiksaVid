// Example: you can later add navigation handling here
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".bottom-nav a, .sidebar nav a");

  navLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();

      // Remove active class from all
      navLinks.forEach(l => l.classList.remove("active"));

      // Add active to clicked
      link.classList.add("active");

      // For demo: just alert (you can replace with real navigation)
      console.log("Navigated to:", link.textContent.trim());
    });
  });
});
