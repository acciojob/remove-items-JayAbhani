// Select dropdown aur button ko pakdo
const select = document.getElementById("colorSelect");
const button = document.querySelector('input[type="button"]');

// Button click event
button.addEventListener("click", () => {
  const selectedIndex = select.selectedIndex; // jo option select hai uska index
  if (selectedIndex !== -1) {
    select.remove(selectedIndex); // wahi option delete ho jayega
  }
});
