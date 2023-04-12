let teamOneScore = document.getElementById("team-one-score")
let teamTwoScore = document.getElementById("team-two-score")

console.log(teamOneScore)

scoreOne = 0
scoreTwo = 0

function plusOneTeamOne() {
    scoreOne += 1
    teamOneScore.textContent = scoreOne
}

function plusTwoTeamOne() {
    scoreOne += 2
    teamOneScore.textContent = scoreOne
}

function plusThreeTeamOne() {
    scoreOne += 3
    teamOneScore.textContent = scoreOne
}

function plusOneTeamTwo() {
    scoreTwo += 1
    teamTwoScore.textContent = scoreTwo
}

function plusTwoTeamTwo() {
    scoreTwo += 2
    teamTwoScore.textContent = scoreTwo
}

function plusThreeTeamTwo() {
    scoreTwo += 3
    teamTwoScore.textContent = scoreTwo
}

function reset() {
    scoreOne = 0
    scoreTwo = 0
    teamOneScore.textContent = scoreOne 
    teamTwoScore.textContent = scoreTwo
}