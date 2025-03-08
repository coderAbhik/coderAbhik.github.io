// About Page Scripts (if any)
console.log("About page loaded!");
// Dynamically populate the name
document.addEventListener("DOMContentLoaded", () => {
    const name = "THE ABHISHEK"; // Replace with your name
    const namePlaceholder = document.querySelector(".about-content p");
  
    if (namePlaceholder) {
      namePlaceholder.textContent = `Hi, I'm ${name}, a passionate web developer with a love for creating beautiful and functional websites.`;
    }
  });
  