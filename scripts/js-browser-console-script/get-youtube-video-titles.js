//
// NOTE: COPY AND PASTE THE CODE BELOW IN BROWSER CONSOLE TO EXECUTE
//

const elements = document.querySelectorAll("#video-title")

const textArray = []

elements.forEach((element) => {
    textArray.push(element.innerText)
})

console.log(textArray)
