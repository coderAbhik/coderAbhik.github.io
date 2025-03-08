document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;
  
    // Check for saved theme in localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      body.setAttribute("data-theme", savedTheme);
      updateToggleButton(savedTheme);
    }
  
    // Toggle theme on button click
    themeToggle.addEventListener("click", () => {
      const currentTheme = body.getAttribute("data-theme");
      const newTheme = currentTheme === "dark" ? "light" : "dark";
      body.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme); // Save theme to localStorage
      updateToggleButton(newTheme);
    });
  
    // Update toggle button icon
    function updateToggleButton(theme) {
      themeToggle.textContent = theme === "dark" ? "☀️" : "🌙";
    }
  });