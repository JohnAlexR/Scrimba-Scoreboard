let teamOneScore = document.getElementById("team-one-score")
let teamTwoScore = document.getElementById("team-two-score")

console.log(teamOneScore)

teamOneScore = 0
teamTwoScore = 0

function plusOneTeamOne() {
    teamOneScore += 1
    teamOneScore.textContent = teamOneScore
}