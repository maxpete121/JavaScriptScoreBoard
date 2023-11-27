let home = 0
let away = 0
let point = 1
let reset = 0

function homeScore(){
    let score = document.getElementById("home")
    score.innerText = (home += 3)
    home + 3
    console.log(home)
    patWin()
}

function homePoint(){
    let scoreTwo = document.getElementById("home")
    scoreTwo.innerText = (home += 7)
    home + 7
    patWin()
}

function removePat() {
    if(home > 0) {
        home -= 1
        let pScore = document.getElementById("home")
        pScore.innerText = (home)
        console.log(home)
    }
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

function removeEagle() {
    if(away > 0) {
        away -= 1
        let eScore = document.getElementById("away")
        eScore.innerText = away
        console.log(away)
        
    }
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

    window.alert ("Game restarted")
}

