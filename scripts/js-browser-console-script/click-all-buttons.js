//
// NOTE: COPY AND PASTE THE CODE BELOW IN BROWSER CONSOLE TO EXECUTE
//

// Replace the querySelector with your element
const buttons = document.querySelectorAll('div[aria-label="Open"]');

// Simulate a click on each button
buttons.forEach(button => {
  if (button) {
    button.click();
  }
});