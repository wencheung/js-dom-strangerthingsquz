/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log('hi');

// Sets up variables; stores HTML elements inside of them.
let userInput = document.querySelector("#userInput")
let pictureBox = document.querySelector("#pictureBox")

// Logs the variables, to confirm whether they worked.
console.log(userInput)
console.log(pictureBox)

// Adds the event, so that when you type (input), it fires the event.
userInput.addEventListener("input", (e) => {
  // Logs the CONTENTS of the input element.
  console.log(userInput.value)
  const guess = userInput.value.toLowerCase()
  // Compares what the user typed to the string "Eleven", 
  // and fires the code block if it matches.
  if (guess == "eleven") {
    pictureBox.innerHTML += `<img src="https://cdn.glitch.com/01b27d37-a07e-4e2e-8caf-659256274937%2FScreen%20Shot%202019-08-08%20at%208.39.11%20AM.png?v=1565269664594"/>`
    userInput.value = ""
  } else if (guess == "dustin") {
    pictureBox.innerHTML += `<img src="https://cdn.glitch.com/01b27d37-a07e-4e2e-8caf-659256274937%2FScreen%20Shot%202019-08-08%20at%208.39.21%20AM.png?v=1565269664037"/>`
    userInput.value = ""
  } else if (guess == "mike") {
    pictureBox.innerHTML += `<img src="https://cdn.glitch.com/01b27d37-a07e-4e2e-8caf-659256274937%2FScreen%20Shot%202019-08-08%20at%208.39.01%20AM.png?v=1565269664401" />`
    userInput.value = ""
  } else if (guess == "hopper") {
    pictureBox.innerHTML += `<img src="https://cdn.glitch.com/01b27d37-a07e-4e2e-8caf-659256274937%2FScreen%20Shot%202019-08-08%20at%208.39.07%20AM.png?v=1565269664510" />`
    userInput.value = ""
  } else if (guess == "steve") {
    pictureBox.innerHTML += `<img src="https://cdn.glitch.com/01b27d37-a07e-4e2e-8caf-659256274937%2FScreen%20Shot%202019-08-08%20at%208.39.33%20AM.png?v=1565269664227" />`
    userInput.value = ""
  } else if (guess == "nancy") {
    pictureBox.innerHTML += `<img src="https://cdn.glitch.com/01b27d37-a07e-4e2e-8caf-659256274937%2FScreen%20Shot%202019-08-08%20at%208.39.27%20AM.png?v=1565269664169" />`
    userInput.value = ""
  } else if (guess == "joyce") {
    pictureBox.innerHTML += `<img src="https://cdn.glitch.com/01b27d37-a07e-4e2e-8caf-659256274937%2FScreen%20Shot%202019-08-08%20at%208.39.16%20AM.png?v=1565269663965" />`
    userInput.value = ""
  } else if (guess == "lucas") {
    pictureBox.innerHTML += `<img src="https://cdn.glitch.com/01b27d37-a07e-4e2e-8caf-659256274937%2FScreen%20Shot%202019-08-08%20at%208.38.56%20AM.png?v=1565269664316" />`
    userInput.value = ""
  }
})