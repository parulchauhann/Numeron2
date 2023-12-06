// Iteration 1: Making the play button in the index.html functional.
// Description: When the play button is clicked the game.html page should be opened

let playbutton = document.getElementById("play-button")

playbutton.addEventListener('click', ()=> {
    location.href = "./game.html"
})

// playbutton.onclick = function(){
//     location.href = "./game.html"
// }