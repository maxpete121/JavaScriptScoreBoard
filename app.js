let home = 0
let away = 0
let point = 1
let reset = 0

function homeScore(){
    let score = document.getElementById("home")
    score.innerText = (home += 3)
    patWin()
}

function homePoint(){
    let scoreTwo = document.getElementById("home")
    scoreTwo.innerText = (home += 7)
    patWin()
}

function patWin() {
    if(home >= 30) {
        document.getElementById("pats-win").style.display = ('block')
    }
}

function awayScore() {
    let eScore = document.getElementById("away")
    eScore.innerText = (away += 3)
    eagleWin()
}

function awayPoint() {
    let eScoreTwo = document.getElementById("away")
    eScoreTwo.innerText = (away += 7)
    eagleWin()
}

function eagleWin() {
    if(away >= 30) {
        document.getElementById("eagles-win").style.display = ('block')
    }
}

function restartGame() {
    document.getElementById("pats-win").style.display = ('none')
    let pScore = document.getElementById("home")
    pScore.innerText = 0
    home = 0

    document.getElementById("eagles-win").style.display = ('none')
    let eScore = document.getElementById("away")
    eScore.innerText = 0
    away = 0
}

