// Iteration 8: Making scoreboard functional
let play_again = document.getElementById("play-again-button")

play_again.onclick = function(){
    location.href = "./game.html";
}

let urlParamter = new URLSearchParams(window.location.search)
console.log(urlParamter)
console.log(window.location.search)

let score = document.getElementById("score-board")
score.innerHTML = urlParamter.get("score")