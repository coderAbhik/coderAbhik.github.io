console.log("Script is running!"); // Add this line



// Brightness Effect (Optional - Keep if you want the background brightness effect)
const hero = document.querySelector(".hero");

document.addEventListener("mousemove", (e) => {
  const x = e.pageX;
  const y = e.pageY;
  hero.style.setProperty("--x", `${x}px`);
  hero.style.setProperty("--y", `${y}px`);
});

document.addEventListener("DOMContentLoaded", () => {
    console.log("Script is running!"); // Debugging line
    const typingElement = document.querySelector(".typing-effect");
    console.log(typingElement); // Debugging line
  
    const text = "THE ABHISHEK"; // Text to type
    typingElement.textContent = ""; // Clear the text initially
  
    let index = 0;
    const typingSpeed = 100; // Adjust typing speed (in milliseconds)
    const pauseDuration = 1000; // Pause before restarting (in milliseconds)
  
    function type() {
      if (index < text.length) {
        // Type the next character
        typingElement.textContent += text.charAt(index);
        index++;
        setTimeout(type, typingSpeed);
      } else {
        // Pause, then restart the typing effect
        setTimeout(() => {
          typingElement.textContent = ""; // Clear the text
          index = 0; // Reset the index
          type(); // Restart the typing effect
        }, pauseDuration);
      }
    }
  
    type(); // Start the typing effect
  });

  